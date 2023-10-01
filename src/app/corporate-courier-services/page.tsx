import PTServiceContent from "@/components/PTServiceContent";
import BackBtn from "@/components/assets/BackBtn";
import PortfolioSitesPageIntro from "@/components/assets/PortfolioSitesPageIntro";
import { PT_ServiceName } from "@/enums";
import getPTservicesData from "@/helperFns/getPTServicesData";

export default async function CorporateLogistics(){

    const cpPageSanityData = await getPTservicesData(PT_ServiceName.corporateLogistics)

    return(
        <div className="page px-6 relative pt-5 text-[#374151] lg:pt-8 xl:px-10">
            <BackBtn />
            <PortfolioSitesPageIntro introHeading="CORPORATE LOGISTICS" introText="Corporate logistics solutions in sync with your business goals" />
            <PTServiceContent serviceName={PT_ServiceName.corporateLogistics} contentData={cpPageSanityData} />
        </div>
    )
}