import { BillsPaymentIcon, CryptoWalletIcon, EwalletIcon } from "@/components/assets/SvgIconsComponent/WalletAndServicesSvgIcons";
import { AddedWalletServiceData } from "../../types";

export const addedWalletServicesData : AddedWalletServiceData[] = [
    {
        title: "Bills Payment",
        text: "The bills pop in non-stop, and it can be tough toggling from one app to the other. We know you have your GIGGo app on the move and thought it great to make managing bills a lot easier by infusing the ability to make payments for recurring bills like communication, electricity, entertainment, and much more, all from one app. Buy data and airtime, and pay utility bills on the move.",
        icon: BillsPaymentIcon
    },


    {
        title: "Crypto Wallet",
        text: "Ecommerce should be more than transporting goods. Now you have access to a crypto wallet, to help you buy, send, store and withdraw digital assets . Pay for transactions across the globe without restrictions and also change your cryptocurrency to Naira anytime you need to.",
        icon: CryptoWalletIcon
    },

    {
        title: "E-Wallet",
        text: "Most people want convenience and like paying for transactions without cash or card. We get it! That is why we provided the E-wallet feature, a flexible and convenient payment option for online and offline transactions.",
        icon: EwalletIcon
    }
]