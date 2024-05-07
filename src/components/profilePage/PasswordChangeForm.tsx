"use client"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomPasswordInput from '../assets/inputs/CustomPasswordInput';
import { ProfilePasswordChangeForm } from '../../../types';
import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase-client-config';
import { setShowAlert } from '@/redux/slices/alertSlice';
import { AlertSeverity } from '@/enums';
import LoadingEllipse from '../assets/Loaders/LoadingEllipse';
import customFirebaseError from '@/helperFns/CustomFirebaseAuthError';


const formSchema = Yup.object().shape({

    currentPassword: Yup.string()
      .required('Password is required')
    ,

    newPassword: Yup.string()
      .required('Password is required')
      .min(7, 'Password length should be at least 7 characters')
    ,

    confirmNewPassword: Yup.string()
      .required('Confirm Password is required')
      .min(4, 'Password length should be at least 7 characters')
      .max(12, 'Password cannot exceed more than 12 characters')
      .oneOf([Yup.ref('newPassword')], 'Passwords do not match')
    ,
})

export default function PasswordChangeForm(){

    const { control, formState: { errors, isSubmitting, isDirty }, handleSubmit, setError } = useForm<ProfilePasswordChangeForm>({ resolver: yupResolver(formSchema) })
    const { email } = useAppSelector(store => store.authUser)
    const dispatch = useAppDispatch()

    const handleUpdatePassword : SubmitHandler<ProfilePasswordChangeForm> = async(data) => {
        try{
                
            // second level checking
            if(data.newPassword !== data.confirmNewPassword){
                setError('confirmNewPassword',{ message: "Passwords should match"})
                return;
            }

            if(!auth.currentUser){
                throw new Error("Unauthourized account, please login again")
            }

            // this code throws a "Too many attempts error too early"
            // await reauthenticateWithCredential(auth.currentUser!,credential)

            await signInWithEmailAndPassword(auth, email, data.currentPassword)

            await updatePassword(auth.currentUser, data.newPassword)


            dispatch(setShowAlert({
                mssg: "Password Is Successfully Updated",
                severity: AlertSeverity.SUCCESS
            }))
        }
        catch(err:any|unknown){
            dispatch(setShowAlert({
                mssg: err.code === 'auth/invalid-credential' ? "Wrong Password" : customFirebaseError(err.code) || "Error Occurred Completing Request",
                severity: AlertSeverity.ERROR
            }))
        }  
    }

    return(
        <form onSubmit={handleSubmit(handleUpdatePassword)} className="bg-base-color1 rounded-xl py-8 px-3 my-8 md:p-5 lg:px-8">

           <CustomPasswordInput
                name="currentPassword"
                control={control}
                labelStyles='mb-3'   
                placeholder="Enter Current Password"
                id="profile-update-currentPassword" 
                label="Current Password"
                error=""
                inputStyles="w-full z-20 border z-20 border-gray-300 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-accent-color1"
                containerStyles="w-full"
            />

            <CustomPasswordInput
                name="newPassword" 
                control={control}
                labelStyles='mb-3' 
                placeholder="Enter New Password"
                id="profile-update-password" 
                label="New Password"
                error={errors?.newPassword?.message}
                inputStyles="w-full z-20 border z-20 border-gray-300 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-accent-color1"
                containerStyles="w-full"
            />

            <CustomPasswordInput
                name="confirmNewPassword" 
                labelStyles='mb-3'
                placeholder="Confirm Password"
                label="Confirm Password"
                id="profile-update-cpassword" 
                error={errors.confirmNewPassword?.message}
                control={control}
                inputStyles="w-full z-20 border z-20 border-gray-300 rounded-lg p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-accent-color1"
                containerStyles="w-full"
            /> 

                        
            <button disabled={!isDirty || isSubmitting ? true : false} className="relative my-10 w-full text-center mx-auto font-medium text-base-color1 bg-base-color2 p-4 text-sm rounded lg:text-base disabled:opacity-80 disabled:cursor-not-allowed md:w-36 md:h-12 flex justify-center items-center hover:scale-105 transition duration-200 ease-in focus:outline focus:outline-accent-color1">
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Save"
                }
            </button>
        </form>
    )
}