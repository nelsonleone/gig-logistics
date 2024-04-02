import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import ShippingDetailsTab from "@/components/assets/Tabs/ShippingDetailsTabContent";

export default function ShippingInformation(){

    return(
        <AppPanelMCContainer className="relative pt-12">
            <BackBtn className="top-12 z-30" />
            {/* <ShippingDetailsTab /> */}
            <h2 className="mt-10 mb-4 text-center font-semibold text-2xl capitalize text-primary2">This Page Is Under Maintenance</h2>
            <p className="text-center">Please check back later</p>
        </AppPanelMCContainer>
    )
}