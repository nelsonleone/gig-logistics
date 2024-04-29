"use client"

import { IconButton, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import LoadingEllipse from "../../Loaders/LoadingEllipse";
import { BiSolidMessageAltError } from "react-icons/bi";
import { inter, roboto_slab } from "@/app/fonts";
import { PinInput, MantineProvider } from "@mantine/core";
import PinInputStyles from "@/LibCSSModules/PinInput.module.css"
import { handleCreatePin } from "@/helperFns/handleCreateWalletPin";

interface IProps {
    for:  "createWalletPin" | "confirmPhone",
    open: boolean,
    handleAddPhoneNumber?: () => Promise<void>,
    text: string,
    heading: string,
    setPin?: Dispatch<SetStateAction<string|undefined>>,
    setAddingPhoneNumber?: Dispatch<SetStateAction<boolean>>
}

export default function CustomPinInput(props:IProps){

    const router = useRouter()
    const [error,setError] = useState<string>('')
    const [pin,setPin] = useState<string|undefined>()
    const [processing,setProcessing] = useState(false)
    const dispatch = useAppDispatch()
    const [creatingPin,setCreatingPin] = useState(false)
    const { uid } = useAppSelector(store => store.authUser)

    const handlePinInput = (val:string) => {
        setError('')
        setPin(val)
    }

    const handleAction = async() => {
        if(props.for === "createWalletPin"){
           await handleCreatePin(router,uid,dispatch,pin,setCreatingPin,setError)
        }
        else if(props.for === "confirmPhone" && props.handleAddPhoneNumber && props.setAddingPhoneNumber){
            props.setAddingPhoneNumber(true)
            setProcessing(true)
            await props.handleAddPhoneNumber()
            setProcessing(false)
        }
    }

    useEffect(() => {
        if(props.setPin){
            props.setPin(pin)
        }
    },[pin])

    return(
        <Modal open={props.open} id="walletPinSetpup">
            <div className="h-[26em] outline-none border-none overflow-y-auto bg-base-color1 shadow-lg rounded-lg p-4 pt-9 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                {
                    props.for === "createWalletPin" &&
                    <IconButton aria-controls="walletPinSetpup" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-base-color2">
                        <IoMdClose />
                    </IconButton>
                }
                <h4 className={` ${roboto_slab.className} my-4 text-2xl font-bold text-center`}>{props.heading}</h4>
                <p className="text-gray-500">{props.text}</p>
                {
                    props.for !== "createWalletPin" &&
                    <p className="text-red-500 font-bold text-center my-4 text-sm">Our OTP service needs funding, use the last four digit of your number to confirm</p>
                }

                <div className="my-8 relative w-full">
                    <MantineProvider>
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
                    </MantineProvider>
                    {
                        error &&
                        <p role="alert" className="w-full text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
                    }
                </div>

                <button 
                   onClick={handleAction} 
                   className="relative bg-base-color2 h-14 block justify-center items-center text-base-color1 w-full mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
                    {
                        processing || creatingPin ?
                        <LoadingEllipse />
                        :
                        "Continue"
                    }
                </button>
            </div>  
        </Modal>
    )
}