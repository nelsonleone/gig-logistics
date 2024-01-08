import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { AuthUser, SignUpFormData } from "../../../types"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput"
import CustomPasswordInput from "../assets/inputs/CustomPasswordInput"
import Link from "next/link"
import { AlertSeverity } from "@/enums"
import { asyncWrapper } from "@/helperFns/asyncWrapper"
import {  createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase/firebase-client-config"
import { useAppDispatch } from "@/redux/customHooks"
import { setShowAlert } from "@/redux/slices/alertSlice"
import customFirebaseError from "@/helperFns/CustomFirebaseAuthError"
import { handleSignInWithPopUp } from "@/helperFns/handleSignInWithPopUp"
import ContinueWithGoogleBtn from "./ContinueWithGoogleBtn"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/navigation"
import { setAuthUserData } from "@/redux/slices/authUser"


const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(7, 'Password length should be at least 7 characters')
    ,

    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(12, 'Password cannot exceed more than 12 characters')
      .oneOf([Yup.ref('password')], 'Passwords do not match')
    ,
    
    firstName: Yup.string().required('First Name is a required field'),
    lastName: Yup.string().required('Last Name is a required field'),
    phoneNumber: Yup.string().required('Phone Number is a required field'),
    email: Yup.string().required('Email is a required field').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
       'Invalid email format'
    )
})

export default function IndividualSignupSection({ returnTo }: { returnTo:string | string[] | undefined }){

    const { handleSubmit, formState: { isSubmitting, errors }, control,  } = useForm<SignUpFormData>({ resolver: yupResolver(formSchema) })
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleSignUp : SubmitHandler<SignUpFormData> = async(data) => {
        const { email, password, firstName, lastName, phoneNumber, confirmPassword } = data;

        await asyncWrapper(
            async() => {
                try{

                    if(password !== confirmPassword){
                        throw new Error("Passwords Do Not Match")
                    }

                    const userCred = await createUserWithEmailAndPassword(auth,email,password)
                    const picture = auth.currentUser?.photoURL;
                    const res = await fetch('/api/signup',{
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                        },
                        body: JSON.stringify({
                            firstName,
                            lastName,
                            phoneNumber,
                            picture,
                            email,
                            returnTo
                        })
                    })

                    const authUserData : AuthUser = await res.json()
        
                    dispatch(setShowAlert({
                        mssg: "Successfully Signed In",
                        severity: AlertSeverity.SUCCESS
                    }))

                    dispatch(setAuthUserData({ ...authUserData, beenAuthenticated: true }))

                    router.push(returnTo as string || "/")
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
        await handleSignInWithPopUp(returnTo,dispatch)
    }

    return(
        <form onSubmit={handleSubmit(handleSignUp)} className="w-[92%] mx-auto mt-8">
            <div className="md:flex justify-between gap-8">
                <CustomTextInput 
                    name="firstName"
                    id="signup-firstName" 
                    control={control} 
                    placeholder="First Name"
                    label=""
                    error={errors.firstName?.message}
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                    containerStyles="w-full"
                />
                <CustomTextInput 
                    name="lastName" 
                    id="signup-lastName" 
                    control={control} 
                    placeholder="Last Name"
                    label=""
                    error={errors.lastName?.message}
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                    containerStyles="w-full"
                />
            </div>

            <CustomTextInput 
                name="email" 
                id="signup-email" 
                control={control} 
                placeholder="Email Address"
                label=""
                inputType="email"
                error={errors.email?.message}
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                containerStyles="w-full"
            />

            <CustomPhoneInput id="signup-phoneInput" className="signup-phoneInput" control={control} error={errors.phoneNumber?.message} name="phoneNumber" />

            <CustomPasswordInput
                name="password" 
                control={control} 
                placeholder="Password"
                id="signup-password" 
                label=""
                error={errors.password?.message}
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                containerStyles="w-full"
            />

            <CustomPasswordInput
                name="confirmPassword" 
                placeholder="Confirm Password"
                label=""
                id="signup-cpassword" 
                error={errors.confirmPassword?.message}
                control={control}
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-cyan-500"
                containerStyles="w-full"
            />

            <button disabled={isSubmitting} className="h-[3.4em] bg-black text-[#FFFFFF] capitalize text-center block mt-6 mb-4 rounded-lg p-4 font-medium w-full relative hover:drop-shadow-lg transition duration-200 ease-linear focus:border focus:border-gray-300">{isSubmitting ? <LoadingEllipse styles="" /> :"Sign Up"}</button>
            <ContinueWithGoogleBtn handleClick={handleGoogleSignIn} className="" />
            <p className="text-sm text-center">Already have an account? <Link className="underline font-medium mx-2" href={`/auth/sign_in${returnTo ? `?returnTo=${returnTo}` : ""}`}>Log In</Link></p>
        </form>
    )
}