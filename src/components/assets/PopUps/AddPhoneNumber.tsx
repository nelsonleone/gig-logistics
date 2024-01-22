"use client"

import { useAppSelector } from "@/redux/customHooks"
import { Modal } from "@mui/material"
import { useEffect, useState } from "react"
import CustomPhoneInput from "../inputs/CustomPhoneInput"
import { SubmitHandler, useForm } from "react-hook-form"

export default function AddPhoneNumber(){

    const [open,setOpen] = useState(false)
    const { beenAuthenticated, phoneNumber } = useAppSelector(store => store.authUser)
    const { handleSubmit, control } = useForm<{ phoneNumber: string}>()

    const handleAddPhoneNumber : SubmitHandler<{ phoneNumber: string }> = async(data) => {

    }

    useEffect(() => {
        if(beenAuthenticated && !phoneNumber){
            setOpen(true)
        }
    },[beenAuthenticated,phoneNumber])

    return(
        <Modal open={open}>
            <form onSubmit={handleSubmit(handleAddPhoneNumber)} className="text-[#374151] bg-white shadow-lg rounded-md p-4 absolute top-0 bottom-0 left-0 right-0 mx-auto w-[95%] md:w-[30em]">
                <h2 className="text-center my-4 font-bold text-2xl md:text-3xl">Enter Your Phone Number</h2>
                <CustomPhoneInput className="" id="add_phoneNumber_popup_input" control={control} name="phoneNumber" placeholder="Phone Number" />
                <button className="bg-black text-white w-24 rounded-sm p-3 h-9 text-center hover:opacity-80 focus:border focus:border-black focus:outline-none focus:text-black focus:bg-transparent transition duration-300 ease-in-out">Add</button>
            </form>
        </Modal>
    )
}