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
        <form onSubmit={handleSubmit(handleSignUp)}>
            <div>
                <CustomTextInput 
                    name="firstName" 
                    control={control} 
                    placeholder="First Name"
                    label=""
                    error={errors.firstName?.message}
                    required="First Name is required field"
                />
                <CustomTextInput 
                    name="lastName" 
                    control={control} 
                    placeholder="Last Name"
                    label=""
                    error={errors.lastName?.message}
                    required="Last Name is required field"
                />
            </div>

            <CustomTextInput 
                name="email" 
                control={control} 
                placeholder="Email Address"
                label=""
                error={errors.email?.message}
                required="Email is a required field"
            />

            <CustomPhoneInput control={control} error={errors.phoneNumber?.message} name="phoneNumber" />

            <CustomPasswordInput
                name="password" 
                control={control} 
                placeholder="Password"
                label=""
                error={errors.password?.message}
                required="Password must be at least 6 characters"
            />

            <CustomPasswordInput
                name="password" 
                placeholder="Confirm Password"
                label=""
                error={errors.confirmPassword?.message}
                required="Password confirmation is required"
                control={control}
            />
            <button>{isLoading ? <LoadingEllipse styles="" /> : "Sign Up"}</button>

            <p>Already have an account? <Link href="/auth/sign_in">Sign In</Link></p>
        </form>
    )
}