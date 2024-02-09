import { roboto_slab } from "@/app/fonts";
import { FirebaseProvideIds } from "@/enums";
import { cookies } from "next/headers";
import PasswordChangeForm from "./PasswordChangeForm";

export default async function PasswordUpdateSection(){

    
    const authSessionToken = cookies().get('authSessionToken')?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/auth/getProvider`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`,
        }
    }) 
    
    const { provider } : { provider:FirebaseProvideIds } = await res.json()

    return(
        provider === FirebaseProvideIds.Google ? 
        <div className="my-8">
            <h4 className={`${roboto_slab.className} my-4 font-bold text-2xl`}>Change Password</h4>
            <PasswordChangeForm />
        </div>
        :
        null
    )
}