"use client"

import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { AuthUser, IProfileDetailsUpdateFormData } from "../../../types"
import AuthUserProfileImageUpdate from "../assets/inputs/Filepond/AuthUserProfileImageUpdate"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import { asyncWrapper } from "@/helperFns/asyncWrapper"
import { setAuthUserData } from "@/redux/slices/authUser"
import { setShowSnackbar } from "@/redux/slices/snackbarSlice"
import { AlertSeverity } from "@/enums"
import { useCallback } from "react"


export default function AuthUserDetailsEditForm(){

    const { email, firstName, lastName, phoneNumber, uid } = useAppSelector(store => store.authUser)
    const { setValue, control, formState: { errors, isSubmitting }, handleSubmit, reset } = useForm<IProfileDetailsUpdateFormData>({
        defaultValues: {
            updatedfirstName: firstName,
            updatedLastName: lastName,
            updatedProfileImage: null
        }
    })
    const dispatch = useAppDispatch()
    const updatedProfileImage = useWatch({ control, name: 'updatedProfileImage' })
    const updatedLastName = useWatch({ control, name: 'updatedLastName' })
    const updatedfirstName = useWatch({ control, name: 'updatedfirstName' })

    const hasFormChanged = useCallback(() => {
        if (updatedProfileImage || updatedLastName !== lastName || updatedfirstName !== firstName) {
            return true;
        } else {
            return false;
        }
    }, [updatedLastName, updatedfirstName, firstName, lastName,updatedProfileImage])


    const handleFormEdit : SubmitHandler<IProfileDetailsUpdateFormData> = async(data) => {
       await asyncWrapper(
            async() => {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/edit_profile?uid=${uid}`,{
                    method: "POST",
                    body: JSON.stringify({
                        updatedFirstName: data.updatedfirstName,
                        updatedLastName: data.updatedLastName,
                        updatedProfilePicture: data.updatedProfileImage
                    })
                })

                const updatedAuthUserProfileDetails : AuthUser = await res.json()

                if(!updatedAuthUserProfileDetails){
                    throw new Error("An Error Occurred Fetching Updated User")
                }

                dispatch(setAuthUserData({...updatedAuthUserProfileDetails}))

                dispatch(setShowSnackbar({
                    mssg: "Profile Updated Successfully",
                    severity: AlertSeverity.SUCCESS
                }))

                reset()
            },
            dispatch
        )
    }

    return(
        <form onSubmit={handleSubmit(handleFormEdit)} className="bg-base-color1 rounded-xl py-8 px-3 my-8 md:p-5 lg:px-8">
            <AuthUserProfileImageUpdate setValue={setValue}  />
            <CustomTextInput 
                readOnly 
                defaultValue={email} 
                control={control} 
                id="profile-email-update" 
                name="updatedEmailAddress" 
                label="Email Address"
                inputType="email"
                placeholder="" 
                containerStyles="w-full mb-2"
                labelStyles="mb-3 block self-start ms-1"
                inputStyles="w-full border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.3em]"
            />
            <CustomTextInput 
                defaultValue={firstName} 
                control={control} 
                id="profile-firstName-update" 
                name="updatedfirstName" 
                label="First Name" 
                required="First Name field is required"
                error={errors?.updatedfirstName?.message}
                placeholder="Enter First Name" 
                containerStyles="w-full mb-2"
                labelStyles="mb-3 block self-start ms-1"
                inputStyles="w-full border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.3em]"
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
                inputStyles="w-full border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.3em]"
            />
            
            <CustomPhoneInput 
                readOnly={true} 
                value={phoneNumber} 
                name="updatedPhoneNumber"
                id="xpress-dropoff-phoneNumber" 
                label="Phone Number"
                labelStyles="mb-3 block self-start ms-1"
                className="phoneInput-xpressDropOff h-[2.8em]"
                control={control}
                containerStyles="w-[100%] mx-auto"
            />

            
            <button disabled={!updatedProfileImage || !hasFormChanged() || isSubmitting} className="relative my-10 w-full text-center mx-auto font-medium base-color1 bg-base-color2 p-4 text-sm rounded lg:text-base disabled:opacity-80 disabled:cursor-not-allowed md:w-36 md:h-12 flex justify-center items-center hover:scale-105 transition duration-200 ease-in focus:outline focus:outline-accent-color1">
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