import DLContents from "@/components/DLContents"
import BackBtn from "@/components/assets/BackBtn"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Domestic Logistics | GIGL"
}

export default async function DomesticLogistics(){

    return(
        <div className="page px-4 relative pt-5 text-[#374151] lg:px-6 lg:pt-8">
            <BackBtn />
            <div className="text-center">
                <h1 className="text-3xl font-roboto-slab my-4 font-bold lg:tracking-wide lg:mt-8">DOMESTIC LOGISTICS</h1>
                <p className="text-base">Reliable, Affordable and Easily Accessible Logistics with Nationwide Coverage</p>
            </div>
            <DLContents />
        </div>
    )
}