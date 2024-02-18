import WalletPinResetModal from "@/components/assets/PopUps/TransactionPin/WalletPinResetModal";
import { AuthUserWalletPinStatus } from "@/enums";
import { cookies } from "next/headers";


export default async function ResetWalletPin(){

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
        <WalletPinResetModal authUserPinStatus={authUserPinStatus} />
    )
}