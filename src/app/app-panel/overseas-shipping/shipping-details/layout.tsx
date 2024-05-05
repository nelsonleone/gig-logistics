import { roboto_slab } from "@/app/fonts";
import OverseasShippingDetailsFormSectionMC from "@/components/OverseasShippingDetailsFormSectionMC";
import { ReactNode } from "react";

export default function Layout({children}: { children:ReactNode }){
    return(
        <main>
            <section className="text-primary">
                <h1 className={`${roboto_slab.className} font-bold mt-14 mb-8 capitalize text-2xl md:text-3xl text-center lg:px-3`}>Shipping your Items is seamless with GIG Logistics.</h1>
                <p className="lg:px-3">
                Simply use details in the format below as your shipping address when shopping from any store (physical or online). In cases where you required to input a phone number, use your personal number please. This will enable GIG Logistics receive item(s) on your behalf for onward delivery.
                </p>
                <OverseasShippingDetailsFormSectionMC>
                    {children}
                </OverseasShippingDetailsFormSectionMC>
            </section>
        </main>
    )
}