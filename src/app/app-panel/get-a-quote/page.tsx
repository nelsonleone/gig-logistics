import AppPanelPagesIntro from "@/components/AppPanelPagesIntro";
import GetAQuoteMainComponent from "@/components/GetAQuotePageMainComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Get A Quick Quote | GIG Logistics`,
    description: 'Get An estimated quote on shipments',
}


export default function GetAQuote(){
    return(
        <GetAQuoteMainComponent />
    )
}