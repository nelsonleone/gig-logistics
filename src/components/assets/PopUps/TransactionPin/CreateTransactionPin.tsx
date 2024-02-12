import { AuthUserWalletPinStatus } from "@/enums";
import { cookies } from "next/headers";
import CreateTransactionPinModalClient from "./CreateTransactionPinModalClient";

export default async function CreateTransactionPin(){

    const authSessionToken = cookies().get('authSessionToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/checkForPin`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`
        }
    })

    const { status } = await res.json()
    const authUserPinStatus : AuthUserWalletPinStatus = status;

    return(
        <CreateTransactionPinModalClient authUserPinStatus={authUserPinStatus} />
    )
}