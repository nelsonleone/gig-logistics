import AddedServices from "@/components/AddedServices"
import PTServiceContent from "@/components/PTServiceContent"
import BackBtn from "@/components/assets/BackBtn"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { PT_ServiceName } from "@/enums"
import getPTservicesData from "@/helperFns/getPTServicesData"
import { Metadata } from "next"
import { Suspense } from "react";

export const metadata : Metadata = {
    title: "Wallet And Added Services | GIGL"
}

export default async function WalletNAddedServices(){

    const walletNAddedServicesSanityData = await getPTservicesData(PT_ServiceName.walletAndAddedServices)

    return(
        <div className="page px-6 relative pt-5 text-[#374151] lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="WALLET AND ADDED SERVICES" introText="Beyond Shipments to Crypto Banking and More" />
            <main className="my-20">
                <Suspense fallback={<DuoSkeleton />}>
                    <PTServiceContent serviceName={PT_ServiceName.domesticLogistics} contentData={walletNAddedServicesSanityData} />
                </Suspense>
                <AddedServices />
            </main>
        </div>
    )
}