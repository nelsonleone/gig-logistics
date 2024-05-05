import CustomPinInput from "@/components/assets/PopUps/TransactionPin/CustomPinInput";
import { AuthUserWalletPinStatus } from "@/enums";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CreateWalletPin(){

    const authSessionToken = cookies().get('authSessionToken')?.value;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/checkForPin`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`
        }
    })
    const { status } = await res.json()
    const authUserPinStatus : AuthUserWalletPinStatus = status;

    if(typeof authUserPinStatus === "string" && authUserPinStatus && authUserPinStatus === AuthUserWalletPinStatus.HasPin){
        redirect('/user/wallet_pin/change')
    }


    return(
        <CustomPinInput for="createWalletPin" heading="Wallet Pin Setup" open={true} text="Kindly enter your one-time wallet pin" />
    )
}