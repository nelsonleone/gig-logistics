"use client"

import { useAppDispatch } from "@/redux/customHooks"
import { SubmitHandler, useForm } from "react-hook-form"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/lib/firebase/firebase-client-config"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"

export default function ResetPasswordMC(){

    const dispatch = useAppDispatch()
    const { formState: { errors, isSubmitting }, handleSubmit, control } = useForm<{ email: string }>({
        defaultValues: {
            email: ""
        }
    })

    const handleResetRequest : SubmitHandler<{email:string}> = async(data) => {
        try{
            await sendPasswordResetEmail(auth,data.email)
            dispatch(setShowAlert({
                mssg: "Password reset email have been sent",
                severity: AlertSeverity.SUCCESS
            }))
        }

        catch(err:any|unknown){
            dispatch(setShowAlert({
                mssg: err.message || "Error Reseting Password, Try Again",
                severity: AlertSeverity.ERROR
            }))
        }
    }

    return(
        <form onSubmit={handleSubmit(handleResetRequest)} className="my-10 pt-24 lg:my-28 pb-8 text-[#374151] bg-white rounded-lg w-11/12 mx-auto md:w-[25em] shadow-lg shadow-slate-500 drop-shadow-sm">
            <h1>Reset Password</h1>
            <CustomTextInput error={errors.email?.message} placeholder="Enter your email" id="reset_password_input" label="Enter Email" control={control} name="email"  />
            <button disabled={isSubmitting} className="relative p-3 font-medium min-h-[3.5em] text-center rounded-md block my-4">
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Reset"
                }
            </button>
        </form>
    )
}