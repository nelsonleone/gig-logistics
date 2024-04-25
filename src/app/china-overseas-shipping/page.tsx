import ChinaOverseasShippingMC from "@/components/ChinaOverseasShippingMC"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import { getChinaOverseasShippingData } from "@/helperFns/getChinaOverseasShippingData"
import { Suspense } from "react"

export default async function ChinaOverseasShippingPage(){

    const data = await getChinaOverseasShippingData()

    return(
        <div className="page pt-12">
            <Suspense fallback={<DuoSkeleton />}>
                {
                    data ?
                    <ChinaOverseasShippingMC data={data} />
                    :
                    <DuoSkeleton />
                }
            </Suspense>
        </div>
    )
}