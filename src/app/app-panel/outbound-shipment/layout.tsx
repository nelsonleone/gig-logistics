import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { ReactNode } from "react";

export default function Layout({children}: { children:ReactNode }){
    return(
        <main>
            <AppPanelMCContainer className="relative lg:pt-28">
                <BackBtn className="" />
                {children}
            </AppPanelMCContainer>
        </main>
    )
}