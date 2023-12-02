"use client"

import { useForm } from "react-hook-form";
import CODWalletForm from "./CODWalletForm";
import { ICODWalletFormValues } from "../../../types";

export default function CODWalletFormHandler(){
    
    const { formState: { errors }, control, handleSubmit } = useForm<ICODWalletFormValues>({
        defaultValues: {
            firstName: "",
            lastName: "",
            bvn: null,
            email: "",
            phoneNumber: "",
            gender: "",
            dateOfBirth: ""
        }
    })

    return(
        <CODWalletForm errors={errors} handleSubmit={handleSubmit} control={control} />
    )
}