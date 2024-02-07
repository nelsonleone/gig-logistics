"use client"

import { useForm } from "react-hook-form"
import { IProfileDetailsUpdateFormData } from "../../../types"
import AuthUserProfileImageUpdate from "../assets/inputs/Filepond/AuthUserProfileImageUpdate"


export default function AuthUserDetailsEditForm(){

    const { setValue } = useForm<IProfileDetailsUpdateFormData>()

    return(
        <form>
            <AuthUserProfileImageUpdate setValue={setValue}  />
        </form>
    )
}