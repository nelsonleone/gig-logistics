import SignInMainCP from "@/components/auth_pages/SignInMainCp";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";
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

export default async function SignIn({ params, searchParams }:IPageProps){

    const { returnTo } = searchParams;
    const authSessionToken = cookies().get('authSessionToken')?.value;

    
    const shouldRedirect = async() => {
        const authUserData = await getPersistedAuthUser(authSessionToken)
        if(authUserData){
            if(returnTo){
                redirect(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/${returnTo}`)
            }
            else{
                redirect('/')
            }
        }
    }
    if(authSessionToken){
        await shouldRedirect()
    }

    return(
        <div className="page mt-14 bg-[url('/images/black-truck-bg.jpg')] relative flex justify-center items-center bg-no-repeat bg-center bg-cover">
            <SignInMainCP returnTo={returnTo} />
        </div>
    )
}