import SignUpMainCP from "@/components/auth_pages/SignUpMainCP";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface IPageProps {
    searchParams: { [key: string]: string | string[] | undefined },
    params: { slug: string }
}

export default function SignUp({ params, searchParams }:IPageProps){

    const { returnTo } = searchParams;
    const authSessionToken = cookies().get('authSessionToken')?.value;

    if(authSessionToken){
        redirect('/')
    }

    return(
        <div className="page relative mt-14 bg-[url('/images/red-truck-bg.jpg')] flex justify-center items-center bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <SignUpMainCP returnTo={returnTo} />
        </div>
    )
}