import { SavedDropOffs } from "../../types"

export async function getUserDropOffs(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/get_dropoffs`,{
        method: "GET"
    })
    const dropOffs : SavedDropOffs[] = await res.json() 

    return dropOffs;
}