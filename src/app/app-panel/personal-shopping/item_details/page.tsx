import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import PersonalShoppingItemDetailsMC from "@/components/PersonalShoppingItemDetailsMC";
import BackBtn from "@/components/assets/BackBtn";

export default function PersonalShoppingItemDetails(){
    return(
        <AppPanelMCContainer className="relative text-[#374151]">
            <BackBtn />
            <h2 className="my-8 font-bold text-xl text-center md:my-12 lg:mt-24">Personal Shopping</h2>
            <PersonalShoppingItemDetailsMC />
        </AppPanelMCContainer>
    )
}