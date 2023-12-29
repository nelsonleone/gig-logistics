import CustomTextInput from "@/components/assets/inputs/CustomTextInput"
import { Metadata } from "next"
import { SubmitHandler, useForm } from "react-hook-form"
import { SignInFormData } from "../../../../types"
import CustomPasswordInput from "@/components/assets/inputs/CustomPasswordInput"
import Link from "next/link"
import LoadingEllipse from "@/components/assets/Loaders/LoadingEllipse"

export const metadata : Metadata = {
    title: "Login | GIGL"
}

export default function SignIn(){

    const { handleSubmit, formState: { isLoading, errors }, control } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSignIn : SubmitHandler<SignInFormData> = async(data) => {

    }

    return(
        <main>
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit(handleSignIn)}>
                <CustomTextInput 
                   name="email" 
                   control={control} 
                   placeholder="Email Address"
                   label=""
                   error={errors.email?.message}
                   required="Please Enter A Valid Email"
                />

                <CustomPasswordInput
                    name="password" 
                    control={control} 
                    placeholder="Password"
                    label=""
                    error={errors.email?.message}
                    required="Input Required"
                /> 

                <Link href="">Forgot Password</Link>

                <button>{isLoading ? <LoadingEllipse styles="" /> :"Log In"}</button>
                <p>Don't have an account? <Link href="/auth/create_account">Sign Up</Link></p>
            </form>
        </main>
    )
}