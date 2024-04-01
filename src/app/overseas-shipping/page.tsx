import LocalOverseasShippingIntroMC from "@/components/LocalOverseasShippingIntroMC"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import { getLocalOverseasShippingIntroData } from "@/helperFns/getLocalOverseasShippingIntroData"
import { Suspense } from "react"

export default async function LocalOverseasShippingIntroPage(){

    const data = await getLocalOverseasShippingIntroData()

    return(
        <div className="page pt-12 px-0">
            <Suspense fallback={<DuoSkeleton />}>
                {
                    data ?
                    <LocalOverseasShippingIntroMC data={data} />
                    :
                    <DuoSkeleton />
                }
            </Suspense>
        </div>
    )
}