import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import XpressDropOffFormContainer from "@/components/XpressDropOffFormContainer";
import BackBtn from "@/components/assets/BackBtn";

export default function CreateXpressDropOff(){
    return( 
        <AppPanelMCContainer className="relative px-[0.7em] mb-12 text-[#374151] md:px-10 md:py-24">
            <BackBtn className="md:absolute md:top-10" />
            <h2 className="font-semibold mb-8 text-center mx-auto md:w-1/2">Select an option below and follow the prompt from the comfort of your home or at a GIGL center and proceed to Drop-Off shipments</h2>
            <XpressDropOffFormContainer />
        </AppPanelMCContainer>
    )
} 