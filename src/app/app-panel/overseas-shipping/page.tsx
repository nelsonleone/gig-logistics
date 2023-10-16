import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { overseasShippingOptionsData } from "@/componentsData/overseasShippingOptionsData";
import { BiSolidPaperPlane } from "react-icons/bi";

export default function AppPanelOverseasShipping(){
    return(
        <main>
            <h1 className="AT_only">Ship Your Good Overseas</h1>
            <AppPanelMCContainer className="text-[#374151] relative md:pt-8 md:px-16">
                <BackBtn className="lg:top-20" />
                <h2 className="font-semibold text-2xl my-16 md:text-center md:mt-20">How would you like to ship</h2>

                <div>
                    {
                        overseasShippingOptionsData.map(val => {
                            const Icon = val?.icon || BiSolidPaperPlane;
                            return(
                                <div tabIndex={0} key={val.title} className="cursor-pointer flex items-center mb-6 gap-4 justify-between bg-gray-50 px-4 py-8 rounded-sm md:justify-start md:gap-8">
                                    <Icon className="text-red-400 text-3xl" aria-hidden="true" />
                                    <div className="w-3/4">
                                        <h3 className="font-medium my-2">{val.title}</h3>
                                        <p className="text-gray-500 text-xs">{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </AppPanelMCContainer>
        </main>
    )
}