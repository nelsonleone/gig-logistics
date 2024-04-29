"use client"

import { useAppDispatch } from "@/redux/customHooks"
import { SubmitHandler, useForm } from "react-hook-form"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "@/lib/firebase/firebase-client-config"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"
import { roboto_slab } from "@/app/fonts"
import Link from "next/link"

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
        <form onSubmit={handleSubmit(handleResetRequest)} className="px-4 my-10 py-8 lg:my-28 pb-8 text-primary bg-base-color1 rounded-lg w-11/12 mx-auto md:w-[25em] shadow-lg shadow-slate-700 drop-shadow-sm">
            <h1 className={`${roboto_slab.className} font-bold  text-center text-2xl md:text-3xl mb-8`}>Reset Password</h1>
            <CustomTextInput 
                error={errors.email?.message} 
                placeholder="Enter your email" 
                id="reset_password_input" 
                label="Enter Email" 
                control={control} 
                name="email"  
                required="Please Enter A Valid Email"
                containerStyles="w-full"
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md my-3 p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
            />
            <button disabled={isSubmitting} className="w-36 bg-base-color2 hover:opacity-80 text-base-color1 focus:border focus:border-black focus:base-color1 transition duration-300 ease-linear relative p-3 font-medium min-h-[3.5em] text-center rounded-md block my-2">
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Reset"
                }
            </button>
            <Link href="/auth/sign_in" className="block my-4 underline capitalize">Return to Sign In</Link>
        </form>
    )
}