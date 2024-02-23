import { Dispatch, SetStateAction } from "react";
import OverseasShipmentAddress from "./OverseasShipmentAddress";

export default function OverseasShippingDetailsTabContent({ currentStep, setCurrentStep }: { setCurrentStep: Dispatch<SetStateAction<number>>, currentStep: number }){
    return(
        <div>
            {
                currentStep === 0 &&
                <OverseasShipmentAddress />
            }
        </div>
    )
}