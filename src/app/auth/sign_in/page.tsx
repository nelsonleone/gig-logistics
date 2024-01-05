import SignInMainCP from "@/components/auth_pages/SignInMainCp";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IPageProps {
    searchParams: { [key: string]: string | string[] | undefined },
    params: { slug: string }
}

export const metadata : Metadata = {
    title: "Login | GIGL"
}

export default function SignIn({ params, searchParams }:IPageProps){

    const { returnTo } = searchParams;
    const authSessionToken = cookies().get('authSessionToken')?.value;

    console.log(authSessionToken)

    if(authSessionToken){
        redirect('/')
    }

    return(
        <div className="mt-14 bg-[url('/images/black-truck-bg.jpg')] relative flex justify-center items-center bg-no-repeat bg-center bg-cover">
            <SignInMainCP returnTo={returnTo} />
        </div>
    )
}