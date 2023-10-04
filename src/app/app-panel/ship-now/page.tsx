import AppPanelPagesIntro from "@/components/AppPanelPagesIntro";
import ShipNowPageMainContent from "@/components/ShipNowPageMainContent";

export default function ShopNow(){
    return(
        <main>
            <section>
                <AppPanelPagesIntro introHeading="We are honoured to serve you!" introText="The GIGGo is your on-demand delivery companion. It is specially built for fast and reliable pick-up/delivery service. GIGGo is your most convenient means of sending items within and across cities. GIGGo eliminates the need to leave your home or comfort zone, trying to dispatch items for delivery." />
                <ShipNowPageMainContent />
            </section>
        </main>
    )
}