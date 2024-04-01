import PTServiceContent from "@/components/PTServiceContent";
import PTdedicatedServicesCardsContainer from "@/components/PT_DedicatedServicesCardContainer";
import BackBtn from "@/components/assets/BackBtn";
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton";
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro";
import { PT_ServiceName } from "@/enums";
import { getPTservicesData } from "@/helperFns/getPTServicesData";
import { Metadata } from "next"
import { Suspense } from 'react'

export const metadata : Metadata = {
    title: "Corporate Logistics | GIGL"
}

export default async function CorporateLogistics(){

    const cpPageSanityData = await getPTservicesData(PT_ServiceName.corporateLogistics)

    return(
        <div className="page px-6 relative pt-5 text-[#374151] md:px-8 lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="CORPORATE LOGISTICS" introText="Corporate logistics solutions in sync with your business goals" />
            <main className="my-20">
                <Suspense fallback={<DuoSkeleton />}>
                  <PTServiceContent serviceName={PT_ServiceName.domesticLogistics} contentData={cpPageSanityData} />
                </Suspense>

                <PTdedicatedServicesCardsContainer serviceName={PT_ServiceName.corporateLogistics} />
            </main>        
        </div>
    )
}