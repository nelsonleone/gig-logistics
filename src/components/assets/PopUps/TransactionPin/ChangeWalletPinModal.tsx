"use client"

import { roboto_slab } from "@/app/fonts"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { PinInput } from "@mantine/core"
import { IconButton, Modal } from "@mui/material"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import * as pinInput from "@zag-js/pin-input"
import { BiSolidMessageAltError } from "react-icons/bi"
import LoadingEllipse from "../../Loaders/LoadingEllipse"
import { asyncWrapper } from "@/helperFns/asyncWrapper"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"

export default function ChangeWalletPinModal(){

    const router = useRouter()
    const [oldPinError,setOldPinError] = useState<string>('')
    const [newPinError,setNewPinError] = useState<string>('')
    const [state, send] = useMachine(pinInput.machine({ 
        id: "1", 
        mask: true,
        type: "numeric", 
        blurOnComplete: true, 
        placeholder: '*',

        onValueInvalid(){
            setOldPinError('Input should be numbers only')
        },
        onValueChange(){
            setOldPinError('')
        }
    }))

    const [state2, send2] = useMachine(pinInput.machine({ 
        id: "2", 
        mask: true,
        type: "numeric", 
        blurOnComplete: true, 
        placeholder: '*',

        onValueInvalid(){
            setNewPinError('Input should be numbers only')
        },
        onValueChange(){
            setNewPinError('')
        }
    }))
    
    const api1 = pinInput.connect(state, send, normalizeProps)
    const api2 = pinInput.connect(state2, send2, normalizeProps)
    const [changingPin,setChangingPin] = useState(false)
    const dispatch = useAppDispatch()
    const { uid } = useAppSelector(store => store.authUser)

    const handleChangePin = async() => {
        await asyncWrapper(
            async() => {
                try{
                    const oldPinIsComplete = api1.isValueComplete;
                    const newPinIsComplete = api2.isValueComplete;
    
                    if(!oldPinIsComplete){
                        setOldPinError('Please enter a valid 4-Digits Pin')
                        return;
                    }
    
                    if(!newPinIsComplete){
                        setNewPinError('Please enter a valid 4-Digits Pin')
                        return;
                    }
    
                    setChangingPin(true)
    
                    const oldPin = api1.valueAsString.trim()
                    const newPin = api2.valueAsString.trim()
    
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/change_pin?uid=${uid}`,{
                        method: "POST",
                        body: JSON.stringify({ newPin, oldPin })
                    })

                    const { message } = await res.json()

                    if(!message){
                        throw new Error("An Unexpected Error Occurred")
                    }

                    dispatch(setShowAlert({
                        mssg: message,
                        severity: AlertSeverity.SUCCESS
                    }))

                    router.back()
    
                }

                catch(err:any|unknown){
                    dispatch(setShowAlert({
                        mssg: err.message || "An Error Occurred Changing Pin",
                        severity: AlertSeverity.ERROR
                    }))
                }
                finally{
                    setChangingPin(false)
                }
            },
            dispatch
        )
    }

    return(
        <Modal open id="change_wallet_pin_modal">
            <div className="h-[35em] overflow-y-scroll md:overflow-y-auto outline-none border-none overflow-hidden bg-white shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                <IconButton aria-s="change_wallet_pin_modal" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-black">
                    <IoMdClose />
                </IconButton>

                <h4 className={` ${roboto_slab.className} my-7 text-2xl font-bold text-center`}>Change Wallet Pin</h4>

                <div>
                    <p className="my-4 text-gray-500 text-sm">Enter your old pin</p>
                    <div {...api1.rootProps} className="flex flex-wrap gap-4 justify-between my-8">
                        <input {...api1.getInputProps({ index: 0 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api1.getInputProps({ index: 1 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api1.getInputProps({ index: 2 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api1.getInputProps({ index: 3 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        {
                            oldPinError &&
                            <p role="alert" className="w-full text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{oldPinError}</p>
                        }
                    </div>
                </div>


                <div>
                    <p className="my-4 text-gray-500 text-sm">Enter your new pin</p>
                    <div {...api2.rootProps} className="flex flex-wrap gap-4 justify-between my-8">
                        <input {...api2.getInputProps({ index: 0 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api2.getInputProps({ index: 1 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api2.getInputProps({ index: 2 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        <input {...api2.getInputProps({ index: 3 })} className="w-[18%] bg-slate-100 text-center text-2xl focus:outline focus:outline-2 focus:outline-offset-0 focus:border-none focus:outline-black text-black rounded-sm p-3" />
                        {
                            newPinError &&
                            <p role="alert" className="w-full text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{newPinError}</p>
                        }
                    </div>
                </div>

                <button 
                   onClick={handleChangePin} 
                   className="relative bg-black h-16 text-white w-full block mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
                    {
                        changingPin ?
                        <LoadingEllipse />
                        :
                        "Change"
                    }
                </button>
            </div>
        </Modal>
    )
}