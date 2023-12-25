import BackBtn from "../../BackBtn";
import ShippingDetailsProgressLoader from "../../Loaders/ShippingDetailsProgressBar";
import PickUpLocationSection from "./PickUpLocationSection";

export default function ShippingDetailsTab({ currentStep }: { currentStep: number }){
    return(
        <div className="relative">
            <ShippingDetailsProgressLoader className="w-full lg:w-1/2 mx-auto" currentStep={1} />
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