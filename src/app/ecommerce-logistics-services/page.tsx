import PTServiceContent from "@/components/PTServiceContent"
import PTdedicatedServicesCardsContainer from "@/components/PT_DedicatedServicesCardContainer"
import BackBtn from "@/components/assets/BackBtn"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { PT_ServiceName } from "@/enums"
import { getPTservicesData } from "@/helperFns/getPTServicesData"
import { Metadata } from "next"
import { Suspense } from 'react'

export const metadata : Metadata = {
    title: "E-Commerce Logistics | GIGL"
}

export default async function EcommerceLogistics(){

    const ecommerceContentData = await getPTservicesData(PT_ServiceName.ecommerceLogistics)

    return(
        <div className="page px-6 relative pt-5 text-primary lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="ECOMMERCE LOGISTICS" introText="Empowering small businesses with innovative logistics support" />
            <main className="my-20">
                <Suspense fallback={<DuoSkeleton />}>
                  <PTServiceContent serviceName={PT_ServiceName.domesticLogistics} contentData={ecommerceContentData} />
                </Suspense>

                <PTdedicatedServicesCardsContainer serviceName={PT_ServiceName.ecommerceLogistics} />
            </main>
        </div>
    )
}