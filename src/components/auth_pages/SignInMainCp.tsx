"use client"

import CustomTextInput from "@/components/assets/inputs/CustomTextInput"
import { SubmitHandler, useForm } from "react-hook-form"
import CustomPasswordInput from "@/components/assets/inputs/CustomPasswordInput"
import Link from "next/link"
import LoadingEllipse from "@/components/assets/Loaders/LoadingEllipse"
import { AuthUser, SignInFormData } from "../../../types"
import { roboto_slab } from "@/app/fonts"
import ContinueWithGoogleBtn from "./ContinueWithGoogleBtn"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "@/lib/firebase/firebase-client-config"
import { useAppDispatch } from "@/redux/customHooks"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { AlertSeverity } from "@/enums"
import { asyncWrapper } from "@/helperFns/asyncWrapper"
import customFirebaseError from "@/helperFns/CustomFirebaseAuthError"
import { handleSignInWithPopUp } from "@/helperFns/handleSignInWithPopUp"
import { useRouter } from "next/navigation"
import { setAuthUserData } from "@/redux/slices/authUser"

export default function SignInMainCP({ returnTo }: { returnTo:string | string[] | undefined }){

    const dispatch = useAppDispatch()
    const router = useRouter()
    const { handleSubmit, formState: { isSubmitting, errors }, control } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    })



    const handleSignIn : SubmitHandler<SignInFormData> = async(data) => {
        const { email, password } = data;

        await asyncWrapper(
            async() => {
                try{
                    const userCred = await signInWithEmailAndPassword(auth,email,password)
                    const idToken = await userCred.user.getIdToken()

                    if(!idToken && !userCred){
                        throw new Error("Authentication Failed")
                        return;
                    }

                    const res = await fetch('/api/auth/login',{
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${idToken}`,
                        },
                        body: JSON.stringify(returnTo)
                    })

                    const authUserData : AuthUser = await res.json()

                    dispatch(setAuthUserData({ ...authUserData, beenAuthenticated: true }))
        
                    dispatch(setShowAlert({
                        mssg: "Successfully Signed In",
                        severity: AlertSeverity.SUCCESS
                    }))

                    if(returnTo){
                        router.push(returnTo as string)
                    }
                    else{
                        router.push("/")
                    }
                }
        
                catch(error:any|unknown){
                    dispatch(setShowAlert({
                        mssg: customFirebaseError(error.code) || "Authentication Failed",
                        severity: AlertSeverity.ERROR
                    }))
                }
            },
            dispatch
        )
    }

    const handleGoogleSignIn = async() => {
        await handleSignInWithPopUp(returnTo,dispatch,router)
    }



    return(
        <main className="my-10 pt-24 lg:my-28 pb-8 text-[#374151] bg-white rounded-lg w-full mx-auto md:w-[25em] shadow-lg shadow-slate-500 drop-shadow-sm">
            <h1 className={`${roboto_slab.className} text-center text-3xl font-bold mb-8`}>Sign In</h1>

            <form onSubmit={handleSubmit(handleSignIn)} className="w-[94%] md:w-11/12 mx-auto">
                <CustomTextInput 
                   name="email" 
                   control={control} 
                   placeholder="Email Address"
                   label=""
                   id="signin-email" 
                   error={errors.email?.message}
                   required="Please Enter A Valid Email"
                   containerStyles="w-full"
                   inputStyles="w-full z-20 border z-20 border-gray-400 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                />

                <CustomPasswordInput
                    name="password" 
                    control={control} 
                    id="signin-password" 
                    placeholder="Password"
                    required="Password field is required"
                    label=""
                    error={errors.password?.message}
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black"
                /> 

                <Link href="/auth/reset_password" className="block underline ms-1 font-medium text-sm my-4">Forgot Password?</Link>

                <button disabled={isSubmitting} className="h-[3.4em] bg-black relative text-[#FFFFFF] capitalize text-center block mt-6 mb-4 rounded-lg p-4 font-medium w-full hover:drop-shadow-lg transition duration-200 ease-linear focus:border focus:border-gray-300">{isSubmitting ? <LoadingEllipse styles="" /> :"Log In"}</button>
                <ContinueWithGoogleBtn disabled={isSubmitting} handleClick={handleGoogleSignIn} className="" />
                <p className="text-sm text-center">Don't have an account? <Link className="underline font-medium mx-2" href={`/auth/create_account${returnTo ? `?returnTo=${returnTo}` : ""}`}>Sign Up</Link></p>
            </form>
        </main>
    )
}