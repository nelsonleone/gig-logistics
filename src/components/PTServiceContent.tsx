import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Suspense } from "react";
import DuoSkeleton from "./assets/Loaders/DuoSkeleton";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { CPDedicatedServices, domesticLogisticsDedicatedServices, ecommerceLogisticsDedicatedServices } from "@/componentsData/dedicated-services-card-data";
import { PT_SanityServiceData } from "../../types";
import { customCPRTComponent, customDlRTComponent } from "@/componentsData/customRichTextComponentObj";
import { PT_ServiceName } from "@/enums";
import PTdedicatedServicesCardsContainer from "./PT_DedicatedServicesCardContainer";



export default async function PTServiceContent({ contentData, serviceName }: { contentData:PT_SanityServiceData, serviceName: PT_ServiceName }){

    return(
        <main className="my-20">
            <Suspense fallback={<DuoSkeleton />}>
                <div className="items-center flex flex-col justify-center lg:flex-row lg:justify-between gap-8">
                    <div className="w-full flex justify-center lg:justify-start lg:w-[52%]">
                        <Image 
                            src={contentData?.service?.repImage ? urlForImage(contentData.service.repImage).url() : ""} 
                            width={600} 
                            height={600}
                            alt={contentData?.service?.repImage?.alt || ""}
                            loading="lazy"
                            className="rounded-sm"
                            quality={95}
                        />
                    </div>
                    <div className="lg:w-[48%]">
                        <PortableText 
                           value={contentData?.service?.textContent} 
                           components={serviceName === PT_ServiceName.corporateLogistics ? customCPRTComponent : customDlRTComponent} 
                        />
                        <div className="flex items-center gap-8 my-6 lg:my-8">
                            {
                                serviceName === PT_ServiceName.domesticLogistics ?
                                <>
                                    <Link href="/app-panel/ship-now" className="pt-service-cta bg-red-600 text-[#FFFFFF]">Ship Now</Link>
                                    <Link href="/app-panel/get-a-qoute/local" className="pt-service-cta bg-[#E5E7EB] text-red-600">Get A Quote</Link>
                                </>
                                :
                                serviceName === PT_ServiceName.corporateLogistics ?
                                <Link href="" className="pt-service-cta bg-red-600 text-[#FFFFFF] w-auto px-3">Sign up as a corporate</Link>
                                :
                                serviceName === PT_ServiceName.ecommerceLogistics ?
                                <Link href="" className="pt-service-cta bg-red-600 text-[#FFFFFF] w-auto px-3">Sign up as a merchant</Link>
                                :
                                null
                            }
                        </div>

                        {
                            serviceName === PT_ServiceName.ecommerceLogistics &&
                            <div className="flex gap-2 items-center flex-col md:flex-row">
                                <p>Already have an account?</p>
                                <Link href="" className="text-red-600 font-semibold">Login to your merchant account</Link>
                            </div>
                        }
                    </div>
                </div>
            </Suspense>
            <PTdedicatedServicesCardsContainer 
              domesticLogisticsDedicatedServices={
                serviceName === PT_ServiceName.domesticLogistics ?
                domesticLogisticsDedicatedServices :
                serviceName === PT_ServiceName.corporateLogistics ?
                CPDedicatedServices :
                serviceName === PT_ServiceName.ecommerceLogistics ?
                ecommerceLogisticsDedicatedServices :
                []
              } 
            />
        </main>
    )
}