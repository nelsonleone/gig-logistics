import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import XpressDropOffSenderSection from "@/components/XpressDropOffSenderSection";
import BackBtn from "@/components/assets/BackBtn";

export default function CreateXpressDropOff(){
    return(
        <AppPanelMCContainer className="relative">
            <BackBtn />
            <h2>Select an option below and follow the prompt from the comfort of your home or at a GIGL center and proceed to Drop-Off shipments</h2>
            <XpressDropOffSenderSection />
        </AppPanelMCContainer>
    )
}