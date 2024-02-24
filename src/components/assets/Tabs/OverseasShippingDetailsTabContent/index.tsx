import { Dispatch, SetStateAction } from "react";
import OverseasShipmentAddress from "./OverseasShipmentAddress";
import ItemInfo from "./ItemInfo";

export default function OverseasShippingDetailsTabContent({ currentStep, setCurrentStep }: { setCurrentStep: Dispatch<SetStateAction<number>>, currentStep: number }){
    return(
        <div>
            {
                currentStep === 0 ?
                <OverseasShipmentAddress setCurrentStep={setCurrentStep} />
                :
                currentStep === 1 ?
                <ItemInfo setCurrentStep={setCurrentStep} />
                :
                null
            }
        </div>
    )
}