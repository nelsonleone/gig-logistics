import { SavedDropOffs } from "../../types"

export async function getUserDropOffs(authSessionToken:string){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/get_dropoffs`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`,
        },
        next: { tags: ['dropoffs'] }
    })
    
    const dropOffs : SavedDropOffs[] = await res.json() 

    return dropOffs;
}