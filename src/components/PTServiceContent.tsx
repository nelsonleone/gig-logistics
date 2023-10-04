import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import DuoSkeleton from "./assets/Loaders/DuoSkeleton";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { PT_SanityServiceData } from "../../types";
import { customCPRTComponent, customDlRTComponent } from "@/componentsData/customRichTextComponentObj";
import { PT_ServiceName } from "@/enums";
import PTServiceContentLinkContainer from "./PTServiceContentLinkContainer";



export default async function PTServiceContent({ contentData, serviceName }: { contentData:PT_SanityServiceData, serviceName: PT_ServiceName }){

    return(
        contentData ?
        <div className={`${serviceName === PT_ServiceName.walletAndAddedServices ? "items-end" : "items-center"} flex flex-col justify-center lg:flex-row lg:justify-between gap-8`}>
            <div className="w-full flex justify-center lg:justify-start lg:w-[52%]">
                <Image 
                    src={contentData?.service?.repImage ? urlForImage(contentData.service.repImage).url() : ""} 
                    width={600} 
                    height={600}
                    alt={contentData?.service?.repImage?.alt || ""}
                    loading="lazy"
                    className={`${serviceName === PT_ServiceName.walletAndAddedServices ? "lg:w-[30em] lg:h-auto" : ""} rounded-sm`}
                    quality={95}
                />
            </div>

            <div className="lg:w-[48%]">
                <PortableText 
                    value={contentData?.service?.textContent} 
                    components={serviceName === PT_ServiceName.corporateLogistics ? customCPRTComponent : customDlRTComponent} 
                />
                
                <PTServiceContentLinkContainer serviceName={serviceName} />

                {
                    
                    serviceName === PT_ServiceName.ecommerceLogistics &&
                    <div className="flex gap-2 items-center flex-col md:flex-row">
                        <p>Already have an account?</p>
                        <Link href="" className="text-red-600 font-semibold">Login to your merchant account</Link>
                    </div>
                }
            </div>
        </div>
        :
        <DuoSkeleton />
    )
}