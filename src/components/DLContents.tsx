import { domesticLogisticsDedicatedServices } from "@/componentsData/domestic-logistics-dedicated-services";
import getDLpageData from "@/helperFns/getDLpageData";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Suspense } from "react";
import DuoSkeleton from "./assets/Loaders/DuoSkeleton";
import { PortableText } from "@portabletext/react";

export default async function DLContents(){

    const dlContentData = await getDLpageData()

    const customComponent = {
        block: {
            p: ({ props }: any) => (
              <p className="text-red-700">{props}</p>
            )
        }
    }

    return(
        <main>
            <Suspense fallback={<DuoSkeleton />}>
                <div>
                    <div>
                        <Image 
                            src={dlContentData?.repImage ? urlForImage(dlContentData?.repImage).url() : ""} 
                            width={600} 
                            height={600}
                            alt={dlContentData?.repImage?.alt || ""}
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <PortableText value={dlContentData?.textContent} components={customComponent} />
                    </div>
                </div>
            </Suspense>
            <section>
                <h2>Our dedicated offerings to you?</h2>
                <div>
                    {
                        domesticLogisticsDedicatedServices.map(details => (
                            <div key={details.title}>
                                <div className={`bg-[url("${details.icon}")`}></div>
                                <h3>{details.title}</h3>
                                <p>{details.text}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}