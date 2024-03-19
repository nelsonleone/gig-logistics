import { ReactNode } from "react";
import AppPanelMCContainer from "./AppPanelPagesMCContainer";
import ShippingDetailsProgressLoader from "./assets/Loaders/ShippingDetailsProgressBar";
import OverseasShippingPromptModal from "./assets/PopUps/OverseasShippingPromptModal";

function OverseasShippingDetailsFormSectionMC({children}: { children:ReactNode }) {

    return (
        <AppPanelMCContainer className="py-12 relative pt-10 md:pt-16">
            <div className="lg:w-3/5 lg:mx-auto">
                <OverseasShippingPromptModal />
                <ShippingDetailsProgressLoader stepLabel={["Shipping address","Shipment Item","Process Shipping"]} className="mb-4 md:w-[30em] mx-auto" />
                {children}
            </div>
        </AppPanelMCContainer>
    )
}

export default OverseasShippingDetailsFormSectionMC;