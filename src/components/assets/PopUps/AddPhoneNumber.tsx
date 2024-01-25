"use client"

import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { Modal } from "@mui/material"
import { useEffect, useState } from "react"
import CustomPhoneInput from "../inputs/CustomPhoneInput"
import { SubmitHandler, useForm } from "react-hook-form"
import { setUserPhoneNumber } from "@/helperFns/setUserPhoneNumber"
import LoadingEllipse from "../Loaders/LoadingEllipse"
import { setAuthUserData } from "@/redux/slices/authUser"
import { setShowSnackbar } from "@/redux/slices/snackbarSlice"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"

export default function AddPhoneNumber(){

    const [open,setOpen] = useState(false)
    const { beenAuthenticated, phoneNumber, uid } = useAppSelector(store => store.authUser)
    const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm<{ phoneNumber: string}>()
    const dispatch = useAppDispatch()

    const handleAddPhoneNumber : SubmitHandler<{ phoneNumber: string }> = async({ phoneNumber:inputedPhoneNumber }) => {
        try{
            const updatedAuthUserData = await setUserPhoneNumber(uid,inputedPhoneNumber)
            setOpen(false)

            dispatch(setAuthUserData({...updatedAuthUserData}))

            dispatch(setShowSnackbar({
                mssg: "Phone Number Added Successfully",
                severity: AlertSeverity.SUCCESS
            }))
        }
        catch(err:any|unknown){
            dispatch(setShowAlert({
                mssg: err.message || "Error Updating Phone Number",
                severity: AlertSeverity.ERROR
            }))
        }
    }

    useEffect(() => {
        if(beenAuthenticated && !phoneNumber){
            setOpen(true)
        }
    },[beenAuthenticated,phoneNumber])

    return(
        <Modal open={open}>
            <form onSubmit={handleSubmit(handleAddPhoneNumber)} className="max-h-fit h-80 text-[#374151] bg-white shadow-lg rounded-lg p-4 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em]">
                <h2 className="text-center my-4 font-bold text-2xl md:text-3xl">Enter Your Phone Number</h2>
                <p className="mt-6 mb-4 italic text-sm font-medium">Your phone number helps us serve you and deliver seamless services</p>
                <CustomPhoneInput className="mt-4" error={errors.phoneNumber?.message} id="add_phoneNumber_popup_input" control={control} name="phoneNumber" placeholder="Phone Number" />
                <button className="relative bg-black text-white w-24 rounded-md h-12 px-3 text-center hover:opacity-80 focus:border focus:border-cyan-600 focus:opacity-100 focus:outline-non transition duration-200 ease-in-out">
                    {
                        isSubmitting ?
                        <LoadingEllipse />
                        :
                        "Add"
                    }
                </button>
            </form>
        </Modal>
    )
}