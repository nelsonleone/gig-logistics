"use client"

import CustomTextInput from "@/components/assets/inputs/CustomTextInput"
import { SubmitHandler, useForm } from "react-hook-form"
import CustomPasswordInput from "@/components/assets/inputs/CustomPasswordInput"
import Link from "next/link"
import LoadingEllipse from "@/components/assets/Loaders/LoadingEllipse"
import { SignInFormData } from "../../../types"
import { roboto_slab } from "@/app/fonts"

export default function SignInMainCP(){

    const { handleSubmit, formState: { isLoading, errors }, control } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSignIn : SubmitHandler<SignInFormData> = async(data) => {

    }

    return(
        <main className="my-10 pt-24 pb-8 text-[#374151] bg-white rounded-lg w-11/12 mx-auto md:w-[25em] shadow-lg drop-shadow-md">
            <h1 className={`${roboto_slab.className} text-center text-3xl font-bold mb-8`}>Sign In</h1>

            <form onSubmit={handleSubmit(handleSignIn)} className="w-[94%] mx-auto">
                <CustomTextInput 
                   name="email" 
                   control={control} 
                   placeholder="Email Address"
                   label=""
                   error={errors.email?.message}
                   required="Please Enter A Valid Email"
                   containerStyles="w-full"
                   inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                />

                <CustomPasswordInput
                    name="password" 
                    control={control} 
                    placeholder="Password"
                    label=""
                    error={errors.email?.message}
                    required="Input Required"
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                /> 

                <Link href="" className="block underline ms-1 font-medium text-sm my-4">Forgot Password?</Link>

                <button className="bg-black text-[#FFFFFF] capitalize text-center block mt-6 mb-4 rounded-lg p-4 font-medium w-full hover:drop-shadow-lg transition duration-200 ease-linear focus:border focus:border-gray-300">{isLoading ? <LoadingEllipse styles="" /> :"Log In"}</button>
                <p className="text-sm text-center">Don't have an account? <Link className="underline font-medium mx-2" href="/auth/create_account">Sign Up</Link></p>
            </form>
        </main>
    )
}