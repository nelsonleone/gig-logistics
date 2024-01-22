import { cookies } from "next/headers"
import { SavedDropOffs } from "../../../../../../../types";

export default async function DropOff({ params }: { params: { id: string } }){

    const authSessionToken = cookies().get('authSessionToken')?.value || "";
    const res = await fetch(`/api/getSingleDropoff?id=${params.id}`,{
        cache: 'no-store',
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`
        }
    })

    const dropOff : SavedDropOffs = await res.json()

    return(
        <div>

        </div>
    )
}