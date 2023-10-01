import PTServiceContent from "@/components/PTServiceContent"
import BackBtn from "@/components/assets/BackBtn"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { PT_ServiceName } from "@/enums"
import getPTservicesData from "@/helperFns/getPTServicesData"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: "Domestic Logistics | GIGL"
}

export default async function DomesticLogistics(){

    const dlContentData = await getPTservicesData(PT_ServiceName.domesticLogistics)

    return(
        <div className="page px-6 relative pt-5 text-[#374151] lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="DOMESTIC LOGISTICS" introText="Reliable, Affordable and Easily Accessible Logistics with Nationwide Coverage" />
            <PTServiceContent serviceName={PT_ServiceName.domesticLogistics} contentData={dlContentData} />
        </div>
    )
}