import { roboto_slab } from "@/app/fonts";
import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { cookies } from "next/headers";
import { Suspense } from "react";
import ReactLoader from 'react-loading'



const Loading = () => (
    <div className="w-full flex justify-center items-center">
        <ReactLoader type="spin" width={100} height={100} color="#383535" />
    </div>
)

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
        <AppPanelMCContainer className="relative">
            <BackBtn />
            <section>
                <h1 className={`${roboto_slab.className} font-bold`}>Shopping History</h1>
                <Suspense fallback={<Loading />}>
                    {
                        shoppingInfo.length ?
                        <p>Demo Text</p>
                        :

                        <p>No History Found</p>
                    }
                </Suspense>
            </section>
        </AppPanelMCContainer>
    )
}