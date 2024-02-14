"use client"

import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { asyncWrapper } from "@/helperFns/asyncWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import LoadingEllipse from "../../Loaders/LoadingEllipse";
import { BiSolidMessageAltError } from "react-icons/bi";
import { inter, roboto_slab } from "@/app/fonts";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity, AuthUserWalletPinStatus } from "@/enums";
import { setWalletPinStatus } from "@/redux/slices/authUser";
import { PinInput } from "@mantine/core";
import PinInputStyles from "@/LibCSSModules/PinInput.module.css"

export default function WalletPinSetupModal(){

    const router = useRouter()
    const [error,setError] = useState<string>('')
    const [pin,setPin] = useState<string|undefined>()
    const [creatingPin,setCreatingPin] = useState(false)
    const dispatch = useAppDispatch()
    const { uid } = useAppSelector(store => store.authUser)

    const handlePinInput = (val:string) => {
        setError('')
        setPin(val)
    }

    const handleCreatePin = async() => {
        await asyncWrapper(
            async() => {
                try{
                    if(pin?.trim().length !== 4){
                        setError('Please enter a valid 4-Digits Pin')
                        return;
                    }
                    setCreatingPin(true)

                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/create_pin?uid=${uid}`,{
                        method: "POST",
                        body: JSON.stringify({ pin })
                    })

                    if(!res.ok){
                        const { error } = await res.json()
                        throw new Error(error)
                        return;
                    }
                    
                    const { message } = await res.json()
                    if(!message){
                        throw new Error("An Unexpected Error Occurred")
                    }
        
                    dispatch(setShowAlert({
                        mssg: message,
                        severity: AlertSeverity.SUCCESS
                    }))

                    dispatch(setWalletPinStatus(AuthUserWalletPinStatus.HasPin))
                    router.back()
                }

                catch(err:any|unknown){
                    dispatch(setShowAlert({
                        mssg: err.message || "An Error Occurred Changing Pin",
                        severity: AlertSeverity.ERROR
                    }))
                }

                finally{
                    setCreatingPin(false)
                }
            },
            dispatch
        )
    }


    return(
        <Modal open id="walletPinSetpup">
            <div className="h-96 outline-none border-none overflow-y-auto bg-white shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                <IconButton aria-controls="walletPinSetpup" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-black">
                    <IoMdClose />
                </IconButton>
                <h4 className={` ${roboto_slab.className} my-4 text-2xl font-bold text-center`}>Wallet Pin Setup</h4>
                <p className="text-gray-500">Kindly enter your one-time wallet pin</p>

                <div>
                    <PinInput 
                        type={/^[0-9]*$/} 
                        inputType="password" 
                        mask={true}
                        error={error ? true : false}
                        className={inter.className}
                        placeholder="*"
                        inputMode="numeric" 
                        value={pin}
                        
                        onChange={handlePinInput}
                        classNames={{
                            root: PinInputStyles.root,
                            pinInput: PinInputStyles.pinInput,
                            input: PinInputStyles.input
                        }}
                    />
                    {
                        error &&
                        <p role="alert" className="w-full text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
                    }
                </div>

                <button 
                   onClick={handleCreatePin} 
                   className="relative bg-black h-16 flex justify-center items-center text-white w-full mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
                    {
                        creatingPin ?
                        <LoadingEllipse />
                        :
                        "Continue"
                    }
                </button>
            </div>  
        </Modal>
    )
}