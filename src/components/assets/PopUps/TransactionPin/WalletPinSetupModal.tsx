"use client"

import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import * as pinInput from "@zag-js/pin-input"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useState } from "react";
import { asyncWrapper } from "@/helperFns/asyncWrapper";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import LoadingEllipse from "../../Loaders/LoadingEllipse";
import { BiSolidMessageAltError } from "react-icons/bi";
import { roboto_slab } from "@/app/fonts";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity, AuthUserWalletPinStatus } from "@/enums";
import { setWalletPinStatus } from "@/redux/slices/authUser";

export default function WalletPinSetupModal(){

    const router = useRouter()
    const [error,setError] = useState<string>('')
    const [state, send] = useMachine(pinInput.machine({ 
        id: "1", 
        mask: true,
        type: "numeric", 
        blurOnComplete: true, 
        placeholder: '*',

        onValueInvalid(){
            setError('Input should be numbers only')
        },
        onValueChange(){
            setError('')
        }
    }))
    
    const api = pinInput.connect(state, send, normalizeProps)
    const [creatingPin,setCreatingPin] = useState(false)
    const dispatch = useAppDispatch()
    const { uid } = useAppSelector(store => store.authUser)

    const handleCreatePin = async() => {
        await asyncWrapper(
            async() => {
                try{
                    const isComplete = api.isValueComplete;

                    if(!isComplete){
                        setError('Please enter a valid 4-Digits Pin')
                        return;
                    }
                    setCreatingPin(true)

                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/create_pin?uid=${uid}`,{
                        method: "POST",
                        body: JSON.stringify({ pin: api.valueAsString.trim() })
                    })

                    const { message } = await res.json()

                    if(!message){
                        throw new Error("Unexpected Error While Creating Pin")
                    }

                    dispatch(setShowAlert({
                        mssg: message,
                        severity: AlertSeverity.SUCCESS
                    }))

                    dispatch(setWalletPinStatus(AuthUserWalletPinStatus.HasPin))
                    router.back()
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
            <div className="h-96 outline-none border-none overflow-hidden bg-white shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                <IconButton aria-controls="walletPinSetpup" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-black">
                    <IoMdClose />
                </IconButton>
                <h4 className={` ${roboto_slab.className} my-4 text-2xl font-bold text-center`}>Wallet Pin Setup</h4>
                <p className="text-gray-500">Kindly enter your one-time wallet pin</p>

                <div {...api.rootProps} className="flex flex-wrap gap-4 justify-between my-8">
                    <input {...api.getInputProps({ index: 0 })} className="w-1/5 bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                    <input {...api.getInputProps({ index: 1 })} className="w-1/5 bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                    <input {...api.getInputProps({ index: 2 })} className="w-1/5 bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                    <input {...api.getInputProps({ index: 3 })} className="w-1/5 bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                    {
                        error &&
                        <p role="alert" className="w-full text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
                    }
                </div>

                <button 
                   onClick={handleCreatePin} 
                   className="relative bg-black h-16 text-white w-full block mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
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