import OverseasShippingTradeOpt from "@/components/OverseasShippingTradeOpt"
import PTServiceContent from "@/components/PTServiceContent"
import PTdedicatedServicesCardsContainer from "@/components/PT_DedicatedServicesCardContainer"
import BackBtn from "@/components/assets/BackBtn"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { PT_ServiceName } from "@/enums"
import getPTservicesData, { getOverseasShippingTradeOptData } from "@/helperFns/getPTServicesData"
import { Metadata } from "next"
import { Suspense } from 'react'

export const metadata : Metadata = {
    title: "Overseas Shipping | GIGL"
}

export default async function OverseasShipping(){

    const overseasShippingSanityData = await getPTservicesData(PT_ServiceName.overseasShipping)
    const overseasShippingTradeOptData = await getOverseasShippingTradeOptData()

    return(
        <div className="page px-6 relative pt-5 text-[#374151] lg:pt-8 xl:px-10 h-screen overflow-y-auto">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="OVERSEAS SHIPPING" introText="Connect the world to your doorstep. Ship anything, anywhere, anytime" />
            <main className="my-20">
                <Suspense fallback={<DuoSkeleton />}>
                  <PTServiceContent serviceName={PT_ServiceName.domesticLogistics} contentData={overseasShippingSanityData} />
                </Suspense>

                <PTdedicatedServicesCardsContainer serviceName={PT_ServiceName.overseasShipping} />
                <OverseasShippingTradeOpt overseasShippingTradeOptData={overseasShippingTradeOptData} />
            </main>
        </div>
    )
}