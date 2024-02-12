"use client"

import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import * as pinInput from "@zag-js/pin-input"
import { useMachine, normalizeProps } from "@zag-js/react"
import { useState } from "react";
import { asyncWrapper } from "@/helperFns/asyncWrapper";
import { useAppDispatch } from "@/redux/customHooks";
import LoadingEllipse from "../../Loaders/LoadingEllipse";
import { BiSolidMessageAltError } from "react-icons/bi";
import { roboto_slab } from "@/app/fonts";

export default function WalletPinSetupModal(){

    const router = useRouter()
    const [error,setError] = useState<string>('')
    const [state, send] = useMachine(pinInput.machine({ 
        id: "1", 
        mask: true,
        dir: "rtl", 
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

    const handleCreatePin = async() => {
        await asyncWrapper(
            async() => {
                try{
                    setCreatingPin(true)
                    const isComplete = api.isValueComplete;

                    if(!isComplete){
                        setError('Please enter a valid 4-Digits Pin')
                        return;
                    }
                }

                finally{
                    setCreatingPin(false)
                }
            },
            dispatch
        )
    }


    return(
        <Modal open id="wallet_pin_setup_modal">
            <div className="h-96 outline-none border-none overflow-hidden bg-white shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                <IconButton aria-control="wallet_pin_setup_modal" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-black">
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
                        <p role="alert" className="w-full self-start text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
                    }
                </div>

                <button 
                   onClick={handleCreatePin} 
                   className="relative bg-black text-white w-full block mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
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