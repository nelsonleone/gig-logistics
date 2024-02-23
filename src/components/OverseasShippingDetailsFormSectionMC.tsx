"use client"

import { useState } from "react";
import AppPanelMCContainer from "./AppPanelPagesMCContainer";
import ShippingDetailsProgressLoader from "./assets/Loaders/ShippingDetailsProgressBar";
import OverseasShippingDetailsTabContent from "./assets/Tabs/OverseasShippingDetailsTabContent";

function OverseasShippingDetailsFormSectionMC() {

    const [currentStep,setCurrentStep] = useState(0)

    return (
        <AppPanelMCContainer className="py-12 relative lg:pt-16">
            <div className="lg:w-3/5 lg:mx-auto">
                <ShippingDetailsProgressLoader stepLabel={["Shipping address","Shipment Item","Process Shipping"]} className="md:w-[30em] mx-auto" currentStep={currentStep} />
                <OverseasShippingDetailsTabContent setCurrentStep={setCurrentStep} currentStep={currentStep} />
            </div>
        </AppPanelMCContainer>
    )
}

export default OverseasShippingDetailsFormSectionMC;