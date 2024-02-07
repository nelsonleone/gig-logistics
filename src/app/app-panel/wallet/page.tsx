import MainWalletComponent from "@/components/wallet/MainWalletComponent";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Fund your wallet to enjoy seamless transactions from start to finish",
    description: "GIGL wallet Page"
}

// Note: No Api Or Functionality Build For Transactions

export default function Page(){
    return(
        <MainWalletComponent />
    )
}