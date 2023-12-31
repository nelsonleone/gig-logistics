import SignInMainCP from "@/components/auth_pages/SignInMainCp";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Login | GIGL"
}

export default function SignIn(){
    return(
        <div className="mt-14 bg-[url('/images/black-truck-bg.jpg')] relative flex justify-center items-center bg-no-repeat bg-center bg-cover">
            <SignInMainCP />
        </div>
    )
}