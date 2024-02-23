import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import ShippingDetailsTab from "@/components/assets/Tabs/ShippingDetailsTabContent";

export default function ShippingInformation(){

    return(
        <AppPanelMCContainer className="relative pt-12">
            <BackBtn className="top-12 z-30" />
            <ShippingDetailsTab />
        </AppPanelMCContainer>
    )
}