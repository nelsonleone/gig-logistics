import ShipNowPageMainContent from "@/components/ShipNowPageMainContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `We are Excited To Serve You | GIG Logistics`,
}

export default function ShipNow(){
    return(
        <ShipNowPageMainContent />
    )
}