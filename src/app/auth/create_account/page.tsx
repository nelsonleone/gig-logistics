import SignUpMainCP from "@/components/auth_pages/SignUpMainCP";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SignUpPageBG from "/images/red-truck-bg.jpg";

interface IPageProps {
    searchParams: { [key: string]: string | string[] | undefined },
    params: { slug: string }
}

export default async function SignUp({ params, searchParams }:IPageProps){

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
        <div className={`page relative mt-14 bg-[url(${SignUpPageBG})] flex justify-center items-center bg-no-repeat bg-center bg-cover`}>
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <SignUpMainCP returnTo={returnTo} />
        </div>
    )
}