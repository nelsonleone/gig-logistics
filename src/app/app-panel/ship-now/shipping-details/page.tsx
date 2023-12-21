'use client'

import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import ShippingDetailsTab from "@/components/assets/Tabs/ShippingDetailsTabContent";
import { useState } from "react";

export default function ShippingInformation(){

    const [currentStep,setCurrentStep] = useState(1)

    return(
        <AppPanelMCContainer className="relative pt-12">
            <BackBtn className="top-12" />
            <ShippingDetailsTab currentStep={currentStep} />
        </AppPanelMCContainer>
    )
}