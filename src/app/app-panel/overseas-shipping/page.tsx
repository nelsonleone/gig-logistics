import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import OverseasShippingOptionsDiv from "@/components/OverseasShippingOptionsDiv";
import BackBtn from "@/components/assets/BackBtn";
import { overseasShippingOptionsData } from "@/componentsData/overseasShippingOptionsData";
import { BiSolidPaperPlane } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export default function AppPanelOverseasShipping(){
    return(
        <main>
            <h1 className="AT_only">Ship Your Good Overseas</h1>
            <AppPanelMCContainer className="text-[rgb(55,65,81)] relative md:pt-8 md:px-16 lg:px-28">
                <BackBtn className="font-semibold lg:left-28" />
                <h2 className="font-semibold text-2xl my-16 md:text-center md:mt-20">How would you like to ship</h2>

                <div>
                    {
                        overseasShippingOptionsData.map(val => {
                            const Icon = val?.icon || BiSolidPaperPlane;
                            return(
                                <OverseasShippingOptionsDiv Icon={Icon as IconType} val={val} />
                            )
                        })
                    }
                </div>
            </AppPanelMCContainer>
        </main>
    )
}