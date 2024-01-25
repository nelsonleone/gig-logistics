import { AuthUser } from "../../types";

export async function setUserPhoneNumber(uid:string,phoneNumber:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/setPhoneNumber?uid=${uid}`,{
        method: "POST",
        body: JSON.stringify({ phoneNumber })
    })

    const updatedAuthUserData : Partial<AuthUser> = await res.json()
    
    return updatedAuthUserData;
}