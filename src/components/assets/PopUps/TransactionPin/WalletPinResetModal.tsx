"use client"

import { inter, roboto_slab } from "@/app/fonts";
import { AlertSeverity, AuthUserWalletPinStatus } from "@/enums";
import { PinInput } from "@mantine/core";
import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import PinInputStyles from "@/LibCSSModules/PinInput.module.css"
import { useEffect, useState } from "react";
import { BiSolidMessageAltError } from "react-icons/bi";
import LoadingEllipse from "../../Loaders/LoadingEllipse";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { handleConfirmOTPForPinReset } from "@/helperFns/handleConfirmOTPForPinReset";

export default async function WalletPinResetModal({ authUserPinStatus }: { authUserPinStatus:AuthUserWalletPinStatus}){
    
    const router = useRouter()
    const [otpError,setOtpError] = useState('')
    const [otp,setOtp] = useState<string|undefined>()
    const [isResetting,setIsResetting] = useState(false)
    const { phoneNumber, beenAuthenticated } = useAppSelector(store => store.authUser)
    const dispatch = useAppDispatch()
    const [verified,setVerified] = useState(false)

    const handleOTPInput = (val:string) => {
        setOtpError('')
        setOtp(val)
    }

    const handleSendOTP = async() => {
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/reset`,{
                method: "POST",
                body: JSON.stringify({ phoneNumber })
            })

            if(!res.ok){
                const { error } = await res.json()
                throw new Error(error)
            }

            const { message } = await res.json()

            dispatch(setShowAlert({
                mssg: message,
                severity:AlertSeverity.SUCCESS
            }))
        }

        catch(err:any|unknown){
            dispatch(setShowAlert({
                mssg: err.message,
                severity: AlertSeverity.ERROR
            }))
        }
    }


    const handleConfirm = async() => {
        try{
            if(!phoneNumber || !beenAuthenticated){
                throw new Error("Unauthourized action, please login ")
            }

            await handleConfirmOTPForPinReset(setVerified,phoneNumber,otp!,dispatch)

            dispatch(setShowAlert({
                mssg: "OTP confirmed successfully",
                severity: AlertSeverity.SUCCESS
            }))
        }

        catch(err:any|unknown){
            dispatch(setShowAlert({
                mssg: err.message || "An Error Occurred",
                severity: AlertSeverity.ERROR
            }))
        }
    }


    useEffect(() => {
        if(!beenAuthenticated)return;
        handleSendOTP()
    },[])

    return(
        <Modal open>
            <div className="h-96 outline-none border-none overflow-y-auto bg-base-color1 shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
               <IconButton aria-controls="walletPinSetpup" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-base-color2">
                    <IoMdClose />
                </IconButton>
                {
                    authUserPinStatus === AuthUserWalletPinStatus.HasPin ?
                    <div>
                        <h4 className={` ${roboto_slab.className} my-4 text-2xl font-bold text-center`}>Enter OTP</h4>
                        <p className="text-gray-500">Please enter otp sent to your email and phone number</p>
                        <div className="my-5">
                            <PinInput
                                type={/^[0-9]*$/} 
                                inputType="password" 
                                mask={true}
                                length={5}
                                error={otpError ? true : false}
                                className={inter.className}
                                placeholder="*"
                                inputMode="numeric" 
                                value={otp}
                                
                                onChange={handleOTPInput}
                                classNames={{
                                    root: PinInputStyles.root,
                                    pinInput: PinInputStyles.pinInput2,
                                    input: PinInputStyles.input
                                }}
                            />
                            {
                                otpError &&
                                <p role="alert" className="w-full text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{otpError}</p>
                            }
                        </div>

                        <button onClick={handleConfirm} className="relative bg-base-color2 h-14 mt-6 flex justify-center items-start base-color1 w-full mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
                            {
                                isResetting ?
                                <LoadingEllipse />
                                :
                                "Confirm"
                            }
                        </button>
                    </div>

                    :
                    <div>
                        <p>You have not setup a wallet pin yet</p>
                        <button>Set Up</button>
                    </div>
                }
            </div>
        </Modal>
    )
}