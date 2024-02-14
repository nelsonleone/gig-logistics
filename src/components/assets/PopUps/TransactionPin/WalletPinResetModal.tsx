"use client"

import { inter, roboto_slab } from "@/app/fonts";
import { AuthUserWalletPinStatus } from "@/enums";
import { PinInput } from "@mantine/core";
import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import PinInputStyles from "@/LibCSSModules/PinInput.module.css"
import { useState } from "react";
import { BiSolidMessageAltError } from "react-icons/bi";
import LoadingEllipse from "../../Loaders/LoadingEllipse";

export default function WalletPinResetModal({ authUserPinStatus }: { authUserPinStatus:AuthUserWalletPinStatus}){
    
    const router = useRouter()
    const [otpError,setOtpError] = useState('')
    const [otp,setOtp] = useState<string|undefined>()
    const [isResetting,setIsResetting] = useState(false)

    const handleOTPInput = (val:string) => {
        setOtpError('')
        setOtp(val)
    }

    return(
        <Modal open>
            <div className="h-96 outline-none border-none overflow-y-auto bg-white shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
               <IconButton aria-controls="walletPinSetpup" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-black">
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
                                <p role="alert" className="w-full text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{otpError}</p>
                            }
                        </div>

                        <button className="relative bg-black h-14 mt-6 flex justify-center items-start text-white w-full mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
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