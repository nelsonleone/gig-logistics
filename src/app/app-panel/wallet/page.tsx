import MainWalletComponent from "@/components/wallet/MainWalletComponent";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Fund your wallet to enjoy seamless transactions from start to finish",
    description: "GIGL wallet Page"
}

export default function Wallet(){
    return(
        <MainWalletComponent />
    )
}