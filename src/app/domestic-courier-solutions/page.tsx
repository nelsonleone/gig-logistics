import DLContents from "@/components/DLContents"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Domestic Logistics | GIGL"
}

export default async function DomesticLogistics(){
    return(
        <div className="page">
            <h1>DOMESTIC LOGISTICS</h1>
            <p>Reliable, Affordable and Easily Accessible Logistics with Nationwide Coverage</p>
            <DLContents />
        </div>
    )
}