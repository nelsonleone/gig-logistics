"use client"

import { useForm } from "react-hook-form";
import CODWalletForm from "./CODWalletForm";
import { ICODWalletFormValues } from "../../../types";
import { memo } from "react";

function CODWalletFormHandler(){
    
    const { formState: { errors, isSubmitting }, control, handleSubmit } = useForm<ICODWalletFormValues>({
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
        <CODWalletForm errors={errors} isSubmitting={isSubmitting} handleSubmit={handleSubmit} control={control} />
    )
}


export default memo(CODWalletFormHandler)