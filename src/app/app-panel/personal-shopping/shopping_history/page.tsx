import { roboto_slab } from "@/app/fonts";
import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { MiniRingLoader } from "@/components/assets/Loaders/RingLoader";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function PersonalShoppingHistory(){

    const authSessionToken = cookies().get('authSessionToken')?.value || "";
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/getShoppingHistory`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`,
        }
    }) 

    // no database for shopping info, just adding content

    const shoppingInfo = await res.json()

    if(!shoppingInfo){
        throw new Error("An Error Occurred Fetching Page Data, shoppingInfo is null")
    }

    return(
        <AppPanelMCContainer className="relative lg:pt-20">
            <BackBtn />
            <section>
                <h1 className={`${roboto_slab.className} font-bold text-center text-2xl mb-8`}>Shopping History</h1>
                <Suspense fallback={<MiniRingLoader className="relative" width={80} height={100} color="#374151" />}>
                    {
                        shoppingInfo.length ?
                        <p>Demo Text</p>
                        :
                        <p className="text-gray-400 capitalize text-center text-lg font-medium">No History</p>
                    }
                </Suspense>
            </section>
        </AppPanelMCContainer>
    )
}