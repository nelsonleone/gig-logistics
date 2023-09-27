import getDLpageData from "@/helperFns/getDLpageData";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Suspense } from "react";
import DuoSkeleton from "./assets/Loaders/DuoSkeleton";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import DLCardsContainer from "./DLCardsContainer";
import { domesticLogisticsDedicatedServices } from "@/componentsData/domestic-logistics-dedicated-services";



export default async function DLContents(){

    const dlContentData = await getDLpageData()

    const customComponent = {
        block: {
            normal({ children }: any){
                return <p className="my-4 lg:my-7">{children}</p>
            }
        }
    }


    return(
        <main className="my-20">
            <Suspense fallback={<DuoSkeleton />}>
                <div className="lg:flex lg:justify-between lg:items-start">
                    <div className="lg:w-[55%]">
                        <Image 
                            src={dlContentData?.repImage ? urlForImage(dlContentData?.repImage).url() : ""} 
                            width={600} 
                            height={600}
                            alt={dlContentData?.repImage?.alt || ""}
                            loading="lazy"
                        />
                    </div>
                    <div className="lg:w-[48%]">
                        <PortableText value={dlContentData?.textContent} components={customComponent} />
                        <div className="flex items-center gap-8 mt-6 lg:mt-12">
                            <Link href="/app-panel/ship-now" className="dlContentBtn bg-[rgba(213,52,58,var(--tw-bg-opacity))] text-[#FFFFFF]">Ship Now</Link>
                            <Link href="/app-panel/get-a-qoute/local" className="dlContentBtn bg-[#E5E7EB] text-[rgba(213,52,58,var(--tw-bg-opacity))]">Get A Quote</Link>
                        </div>
                    </div>
                </div>
            </Suspense>
            <DLCardsContainer domesticLogisticsDedicatedServices={domesticLogisticsDedicatedServices} />
        </main>
    )
}