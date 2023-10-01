import PTServiceContent from "@/components/PTServiceContent"
import BackBtn from "@/components/assets/BackBtn"
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro"
import { PT_ServiceName } from "@/enums"
import getPTservicesData from "@/helperFns/getPTServicesData"

export default async function EcommerceLogistics(){

    const ecommerceContentData = await getPTservicesData(PT_ServiceName.ecommerceLogistics)

    return(
        <div className="page px-6 relative pt-5 text-[#374151] lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="ECOMMERCE LOGISTICS" introText="Empowering small businesses with innovative logistics support" />
            <PTServiceContent serviceName={PT_ServiceName.ecommerceLogistics} contentData={ecommerceContentData} />
        </div>
    )
}