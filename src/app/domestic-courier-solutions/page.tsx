import DLContents from "@/components/DLContents"
import BackBtn from "@/components/assets/BackBtn"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Domestic Logistics | GIGL"
}

export default async function DomesticLogistics(){

    return(
        <div className="page px-4 relative pt-5 text-[#374151] lg:px-6 lg:pt-8">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="DOMESTIC LOGISTICS" introText="Reliable, Affordable and Easily Accessible Logistics with Nationwide Coverage" />
            <DLContents />
        </div>
    )
}