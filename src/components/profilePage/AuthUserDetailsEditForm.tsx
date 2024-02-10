"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { IProfileDetailsUpdateFormData } from "../../../types"
import AuthUserProfileImageUpdate from "../assets/inputs/Filepond/AuthUserProfileImageUpdate"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import { asyncWrapper } from "@/helperFns/asyncWrapper"


export default function AuthUserDetailsEditForm(){

    const { setValue, control, formState: { errors, isDirty, isSubmitting } } = useForm<IProfileDetailsUpdateFormData>()
    const { email, firstName, lastName, phoneNumber, uid } = useAppSelector(store => store.authUser)
    const dispatch = useAppDispatch()

    const handleFormEdit : SubmitHandler<IProfileDetailsUpdateFormData> = async(data) => {
        asyncWrapper(
            async() => {
                
            },
            dispatch
        )
    }

    return(
        <form className="bg-white rounded-xl py-8 px-3 my-8 md:p-5 lg:px-8">
            <AuthUserProfileImageUpdate setValue={setValue}  />
            <CustomTextInput 
                readOnly 
                defaultValue={email} 
                control={control} 
                id="profile-email-update" 
                name="updatedEmailAddress" 
                label="Email Address" 
                placeholder="" 
                containerStyles="w-full mb-2"
                labelStyles="mb-3 block self-start ms-1"
                inputStyles="focus:outline-0 w-full focus:outline-offset-0 focus:outline-none rounded-xl border-gray-300 bg-gray-50 h-[3.3em]"
            />
            <CustomTextInput 
                defaultValue={firstName} 
                control={control} 
                id="profile-firstName-update" 
                name="updatedfirstName" 
                label="First Name" 
                required="First Name field is required"
                error={errors?.updatedLastName?.message}
                placeholder="Enter First Name" 
                containerStyles="w-full mb-2"
                labelStyles="mb-3 block self-start ms-1"
                inputStyles="focus:outline-0 w-full focus:outline-offset-0 focus:outline-none rounded-xl border-gray-300 bg-gray-50 h-[3.3em]"
            />
            <CustomTextInput 
                defaultValue={lastName} 
                control={control} 
                id="profile-firstName-update" 
                name="updatedLastName" 
                required="Last Name field is required"
                error={errors?.updatedLastName?.message}
                label="Last Name" 
                placeholder="Enter Last Name" 
                containerStyles="w-full mb-2"
                labelStyles="mb-3 block self-start ms-1"
                inputStyles="focus:outline-0  w-full focus:outline-offset-0 focus:outline-none rounded-xl border-gray-300 bg-gray-50 h-[3.3em]"
            />
            
            <CustomPhoneInput 
                readOnly={true} 
                value={phoneNumber} 
                name="updatedPhoneNumber" 
                id="xpress-dropoff-phoneNumber" 
                label="Phone Number"
                labelStyles="mb-3 block self-start ms-1"
                className="phoneInput-xpressDropOff h-[3.8em]"
                control={control}
                containerStyles="w-[100%] mx-auto"
            />

            
            <button disabled={isDirty || isSubmitting ? true : false} className="relative block my-10 w-full text-center mx-auto font-medium text-white bg-black p-4 text-sm rounded lg:text-base disabled:opacity-80 disabled:cursor-not-allowed md:w-28">
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