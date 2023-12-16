'use client'

import BackBtn from "@/components/assets/BackBtn";
import ShippingDetailsProgressLoader from "@/components/assets/Loaders/ShippingDetailsProgressBar";
import { useState } from "react";

export default function ShippingInformation(){

    const [currentStep,setCurrentStep] = useState(1)

    return(
        <div>
            <BackBtn />
            <ShippingDetailsProgressLoader className="" currentStep={1} />
        </div>
    )
}