import AppPanelPagesIntro from "@/components/AppPanelPagesIntro";
import { ReactNode } from "react";

export default function Layout({children}: { children:ReactNode }){
    return(
        <main>
            <section>
                <AppPanelPagesIntro introHeading="Get Quick Quote" introText="This is just an estimated cost for your shipment. Actual price may vary after creating a shipment" />
                {children}
            </section>
        </main>
    )
}