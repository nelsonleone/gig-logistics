"use client"

import { inter, roboto_slab } from "@/app/fonts"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { IconButton, Modal } from "@mui/material"
import { useRouter } from "next/navigation"
import { memo, useState } from "react"
import { IoMdClose } from "react-icons/io"
import { BiSolidMessageAltError } from "react-icons/bi"
import LoadingEllipse from "../../Loaders/LoadingEllipse"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"
import { PinInput, MantineProvider } from "@mantine/core"
import PinInputStyles from "@/LibCSSModules/PinInput.module.css"

function ChangeWalletPinModal(){

    const router = useRouter()
    const [oldPinError,setOldPinError] = useState<string>('')
    const [newPinError,setNewPinError] = useState<string>('')
    const [oldPin,setOldPin] = useState<string|undefined>()
    const [newPin,setNewPin] = useState<string|undefined>()

    const [changingPin,setChangingPin] = useState(false)
    const dispatch = useAppDispatch()
    const { uid } = useAppSelector(store => store.authUser)

    const handleNewPinInput = (val:string) => {
        setNewPinError("")
        setNewPin(val)
    }

    const handleOldPinInput = (val:string) => {
        setOldPinError("")
        setOldPin(val)
    }

    const handleChangePin = async() => {
        try{

            if(oldPin?.trim().length !== 4){
                setOldPinError("Enter your valid 4 digits wallet pin")
                return;
            }

            if(newPin?.trim().length !== 4){
                setNewPinError("Enter a new valid 4 digits pin")
                return;
            }

            setChangingPin(true)

            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/change_pin?uid=${uid}`,{
                method: "POST",
                body: JSON.stringify({ newPin, oldPin })
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
    }

    return(
        <Modal open id="change_wallet_pin_modal" className="flex justify-center items-center">
            <div className="h-[30em] relative overflow-y-auto md:h-[35em] md:overflow-y-auto outline-none border-none overflow-hidden bg-base-color1 shadow-lg rounded-lg p-4 pt-9 w-[95%] md:w-[30em] md:px-20 flex justify-center flex-col items-center">
                <IconButton aria-controls="change_wallet_pin_modal" onClick={() => router.back()} aria-expanded="true" className="absolute top-4 right-4 text-base-color2">
                    <IoMdClose />
                </IconButton>

                <h4 className={`${roboto_slab.className} my-7 text-2xl font-bold text-center`}>Change Wallet Pin</h4>

                <MantineProvider>
                    <div>
                        <p className="my-4 text-gray-500 text-sm">Enter your old pin</p>
                            <PinInput 
                                type={/^[0-9]*$/} 
                                inputType="password" 
                                mask={true}
                                error={oldPinError ? true : false}
                                className={inter.className}
                                placeholder="*"
                                inputMode="numeric" 
                                value={oldPin}
                                onChange={handleOldPinInput}
                                classNames={{
                                    root: PinInputStyles.root,
                                    pinInput: PinInputStyles.pinInput,
                                    input: PinInputStyles.input
                                }}
                            />
                        {
                            oldPinError &&
                            <p role="alert" className="w-full text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{oldPinError}</p>
                        }
                    </div>


                    <div>
                        <p className="my-4 text-gray-500 text-sm">Enter your new pin</p>
                        <PinInput 
                            type={/^[0-9]*$/} 
                            inputType="password" 
                            mask={true}
                            error={newPinError ? true : false}
                            className={inter.className}
                            placeholder="*"
                            inputMode="numeric" 
                            value={newPin}
                            onChange={handleNewPinInput}
                            classNames={{
                                root: PinInputStyles.root,
                                pinInput: PinInputStyles.pinInput,
                                input: PinInputStyles.input
                            }}
                        />
                        {
                            newPinError &&
                            <p role="alert" className="w-full text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{newPinError}</p>
                        }
                    </div>

                </MantineProvider>
                <button 
                   onClick={handleChangePin} 
                   className="relative bg-base-color2 h-16 text-base-color1 w-full block mt-8 mb-4 rounded p-4 font-medium text-center mx-auto hover:opacity-90 focus:opacity-90 transition-opacity ease-linear duration-300">
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


export default memo(ChangeWalletPinModal)