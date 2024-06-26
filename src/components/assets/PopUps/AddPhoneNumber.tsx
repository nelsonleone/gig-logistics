"use client"

import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { Modal } from "@mui/material"
import { useEffect, useState } from "react"
import CustomPhoneInput from "../inputs/CustomPhoneInput"
import { useForm, useWatch } from "react-hook-form"
import LoadingEllipse from "../Loaders/LoadingEllipse"
import CustomPinInput from "./TransactionPin/CustomPinInput"
import { handleAddPhoneNumber } from "@/helperFns/handleAddPhoneNumber"

export default function AddPhoneNumber(){

    const [open,setOpen] = useState(false)
    const { beenAuthenticated, phoneNumber, uid } = useAppSelector(store => store.authUser)
    const { handleSubmit, control, formState: { errors } } = useForm<{ phoneNumber: string}>()
    const dispatch = useAppDispatch()
    const inputedPhoneNumber = useWatch({ control, name: 'phoneNumber'})
    const [openConfirmPinModal,setOpenConfirmPinModal] = useState(false)
    const [pin,setPin] = useState<string|undefined>("")
    const [addingPhoneNumber,setAddingPhoneNumber] = useState(false)

    useEffect(() => {
        if(beenAuthenticated && !phoneNumber){
            setOpen(true)
        }
    },[beenAuthenticated,phoneNumber])

    return(
        <Modal open={open}>
            <div className="max-h-fit h-80 text-primary bg-base-color1 border-none outline-none shadow-lg rounded-lg p-4 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em]">
                <h2 className="text-center my-4 font-bold text-2xl md:text-3xl">Enter Your Phone Number</h2>
                <p className="mt-6 mb-4 italic text-sm font-medium">Your phone number helps us serve you and deliver seamless services</p>
                <CustomPhoneInput className="mt-4" error={errors.phoneNumber?.message} id="add_phoneNumber_popup_input" control={control} name="phoneNumber" placeholder="Phone Number" />
                <button onClick={handleSubmit(() => setOpenConfirmPinModal(true))} className="relative bg-base-color2 text-base-color1 w-24 rounded-md h-12 px-3 text-center hover:opacity-80 focus:border focus:border-accent-color2 focus:opacity-100 focus:outline-non transition duration-200 ease-in-out">
                    {
                        addingPhoneNumber ?
                        <LoadingEllipse />
                        :                                                                                                                                                                                                                                                                                                                                                                                                                   
                        "Add"
                    }
                </button>
                <CustomPinInput setAddingPhoneNumber={setAddingPhoneNumber} text="Kindly enter OTP sent to your number" heading="Confirm Phone Number" handleAddPhoneNumber={() => handleAddPhoneNumber(inputedPhoneNumber,dispatch,uid,setOpen,pin,setAddingPhoneNumber)} setPin={setPin} for="confirmPhone" open={openConfirmPinModal} />
            </div>

        </Modal>
    )
}