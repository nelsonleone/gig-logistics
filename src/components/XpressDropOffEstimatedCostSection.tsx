import { roboto_slab } from "@/app/fonts";
import { estimateTotalDropOffCost } from "@/helperFns/getEstimatedDropOffCost";
import { DeliveryItems } from "../../types";

export default function XpressDropOffEstimatedCostSection({ deliveryItems }:{ deliveryItems: DeliveryItems[] }){
    return(
        <div className="shadow-lg bg-base-color1 border drop-shadow-md rounded-md mt-12 w-full py-6 px-3 md:px-10 border-gray-50">
            <h4 className="font-medium md:text-sm mb-2">Estimated Cost</h4>
            <strong className="font-bold text-3xl lg:text-4xl">
             <span className={roboto_slab.className}>{new Intl.NumberFormat('en-US', {style: 'currency',currency: 'NGN',}).format(estimateTotalDropOffCost(deliveryItems))}</span>
            </strong>
        </div>
    )
}