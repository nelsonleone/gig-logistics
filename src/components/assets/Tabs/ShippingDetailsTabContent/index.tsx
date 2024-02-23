"use client"

import { useState } from "react";
import ShippingDetailsProgressLoader from "../../Loaders/ShippingDetailsProgressBar";
import PickUpLocationSection from "./PickUpLocationSection";

export default function ShippingDetailsTab(){

    const [currentStep,setCurrentStep] = useState(0)

    return(
        <div className="relative">
            <ShippingDetailsProgressLoader stepLabel={["Pick up location","Shipment details","Upload item"]} className="w-full lg:w-1/2 mx-auto" currentStep={currentStep} />
            {
                currentStep === 1 ? 
                <PickUpLocationSection />
                :
                currentStep === 2 ? 
                null
                :
                null
            }
        </div>
    )
}