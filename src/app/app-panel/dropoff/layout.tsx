import AppPanelPagesIntro from "@/components/AppPanelPagesIntro";
import { ReactNode } from "react";

export default function Layout({children}: { children:ReactNode }){
    return(
        <main>
            <section>
                <AppPanelPagesIntro introHeading="Xpress Drop-Off" introText="Want to avoid waiting for long periods at GIGL service centres while trying to ship items? Select our Xpress Drop-Off Service today." />
                {children}
            </section>
        </main>
    )
}