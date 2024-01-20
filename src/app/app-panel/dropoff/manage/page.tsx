import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import ManageXpressDropOffsMC from "@/components/ManageXpressDropOffsMC";
import BackBtn from "@/components/assets/BackBtn";
import { getUserDropOffs } from "@/helperFns/getUserDropOffs";

export default async function ManageDropOffs(){

    const authUserDropOffs = await getUserDropOffs()

    return(
        <AppPanelMCContainer className="relative px-[0.7em] mb-12 text-[#374151] md:px-10 md:py-24">
            <BackBtn className="md:absolute md:top-10" />

            <ManageXpressDropOffsMC dropOffs={authUserDropOffs} />
        </AppPanelMCContainer>
    )

}