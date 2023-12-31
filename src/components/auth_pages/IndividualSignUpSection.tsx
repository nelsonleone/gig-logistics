import { SubmitHandler, useForm } from "react-hook-form"
import { SignUpFormData } from "../../../types"
import LoadingEllipse from "../assets/Loaders/LoadingEllipse"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import CustomPhoneInput from "../assets/inputs/CustomPhoneInput"
import CustomPasswordInput from "../assets/inputs/CustomPasswordInput"
import Link from "next/link"

export default function IndividualSignupSection(){

    const { control, handleSubmit, formState: { isLoading, errors }} = useForm<SignUpFormData>()

    const handleSignUp : SubmitHandler<SignUpFormData> = async() => {

    }

    return(
        <form onSubmit={handleSubmit(handleSignUp)} className="w-[94%] mx-auto mt-8">
            <div className="md:flex justify-between gap-8">
                <CustomTextInput 
                    name="firstName" 
                    control={control} 
                    placeholder="First Name"
                    label=""
                    error={errors.firstName?.message}
                    required="First Name is required field"
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                    containerStyles="w-full"
                />
                <CustomTextInput 
                    name="lastName" 
                    control={control} 
                    placeholder="Last Name"
                    label=""
                    error={errors.lastName?.message}
                    required="Last Name is required field"
                    inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                    containerStyles="w-full"
                />
            </div>

            <CustomTextInput 
                name="email" 
                control={control} 
                placeholder="Email Address"
                label=""
                error={errors.email?.message}
                required="Email is a required field"
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                containerStyles="w-full"
            />

            <CustomPhoneInput control={control} error={errors.phoneNumber?.message} name="phoneNumber" />

            <CustomPasswordInput
                name="password" 
                control={control} 
                placeholder="Password"
                label=""
                error={errors.password?.message}
                required="Password must be at least 6 characters"
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                containerStyles="w-full"
            />

            <CustomPasswordInput
                name="password" 
                placeholder="Confirm Password"
                label=""
                error={errors.confirmPassword?.message}
                required="Password confirmation is required"
                control={control}
                inputStyles="w-full z-20 border z-20 border-gray-400 rounded-md p-3 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-red-500"
                containerStyles="w-full"
            />
            <button className="bg-black text-[#FFFFFF] capitalize text-center block mt-6 mb-4 rounded-lg p-4 font-medium w-full hover:drop-shadow-lg transition duration-200 ease-linear focus:border focus:border-gray-300">{isLoading ? <LoadingEllipse styles="" /> :"Sign Up"}</button>
            <p className="text-sm text-center">Already have an account? <Link className="underline font-medium mx-2" href="/auth/sign_in">Log In</Link></p>
        </form>
    )
}