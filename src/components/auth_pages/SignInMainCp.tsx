"use client"

import CustomTextInput from "@/components/assets/inputs/CustomTextInput"
import { SubmitHandler, useForm } from "react-hook-form"
import CustomPasswordInput from "@/components/assets/inputs/CustomPasswordInput"
import Link from "next/link"
import LoadingEllipse from "@/components/assets/Loaders/LoadingEllipse"
import { SignInFormData } from "../../../types"
import { roboto_slab } from "@/app/fonts"
import ContinueWithGoogleBtn from "./ContinueWithGoogleBtn"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "@/lib/firebase/firebase-client-config"
import { useAppDispatch } from "@/redux/customHooks"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"
import { asyncWrapper } from "@/helperFns/asyncWrapper"

export default function SignInMainCP({ returnTo }: { returnTo:string | string[] | undefined }){

    const dispatch = useAppDispatch()
    const { handleSubmit, formState: { isLoading, errors }, control } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSignIn : SubmitHandler<SignInFormData> = async(data) => {
        const { email, password } = data;

        console.log(isLoading)

        await asyncWrapper(
            async() => {
                try{
                    const userCred = await signInWithEmailAndPassword(auth,email,password)
                    await fetch('/api/login',{
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                        },
                        body: JSON.stringify(returnTo)
                    })
        
                    dispatch(setShowAlert({
                        mssg: "Successfully Signed In",
                        severity: AlertSeverity.SUCCESS
                    }))
                }
        
                catch(error:any|unknown){
                    dispatch(setShowAlert({
                        mssg: error.message || "Error Occurred During Login",
                        severity: AlertSeverity.ERROR
                    }))
                }
            },
            dispatch
        )
    }

    const handleGoogleSignIn = async() => {
        asyncWrapper(
            async() => {
                try{
                    const userCred = await signInWithPopup(auth,provider)
                    await fetch('/api/login',{
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                        },
                        body: JSON.stringify(returnTo)
                    })
        
                    dispatch(setShowAlert({
                        mssg: "Successfully Signed In",
                        severity: AlertSeverity.SUCCESS
                    }))
                }
                catch(error:any|unknown){
                    dispatch(setShowAlert({
                        mssg: error.message || "Error Occurred During Login",
                        severity: AlertSeverity.ERROR
                    }))
                }
            },
            dispatch
        )
    }



    return(
        <main className="my-10 pt-24 pb-8 text-[#374151] bg-white rounded-lg w-11/12 mx-auto md:w-[25em] shadow-lg shadow-slate-500 drop-shadow-sm">
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
                   inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                />

                <CustomPasswordInput
                    name="password" 
                    control={control} 
                    placeholder="Password"
                    label=""
                    error={errors.password?.message}
                    required="Input Required"
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                /> 

                <Link href="" className="block underline ms-1 font-medium text-sm my-4">Forgot Password?</Link>

                <button className="h-[3.4em] bg-black text-[#FFFFFF] capitalize text-center block mt-6 mb-4 rounded-lg p-4 font-medium w-full hover:drop-shadow-lg transition duration-200 ease-linear focus:border focus:border-gray-300">{isLoading ? <LoadingEllipse styles="" /> :"Log In"}</button>
                <ContinueWithGoogleBtn handleClick={handleGoogleSignIn} className="" />
                <p className="text-sm text-center">Don't have an account? <Link className="underline font-medium mx-2" href="/auth/create_account">Sign Up</Link></p>
            </form>
        </main>
    )
}