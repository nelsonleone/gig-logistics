import contactCenterArray from "../../componentsData/contactDetailsData";
import OfficeLocationTabs from "@/components/assets/Tabs/OfficeLocationsTab";
import { FaLocationArrow } from "react-icons/fa";
import { roboto_slab } from "../fonts";
import { Metadata } from "next";
import OfficeContactDetails from "@/components/OfficeContactDetails";

export const metadata : Metadata = {
    title: "Contact | GIG Logistics"
}

export default function OurOffices(){
    
    return(
        <main className="page px-0 bg-[url('/images/offices_bg.svg')] overflow-x-hidden">
            <section className="mt-10 px-8  pt-16 pb-10">
                <h1 className={`${roboto_slab.className} text-3xl text-[#374151] text-center font-bold my-6 lg:text-[2.5rem] `}>Our Offices</h1>
                <h2 className="text-xl text-[#374151] font-semibold underline lg:text-center lg:mt-20">Contact Centers</h2>
                <div className="lg:flex lg:justify-between lg:items-baseline lg:mt-4">
                    {
                        contactCenterArray.map(val => {
                            return(
                                <OfficeContactDetails val={val} />
                            )
                        })
                    }
                </div>
            </section>

            <section className="pt-6 px-8 text-[#374151] lg:py-12">
                <div className="flex items-center justify-center gap-2">
                    <h2 className="text-xl font-semibold capitalize underline">Office Locations</h2>
                    <FaLocationArrow aria-hidden="true" />
                </div>
                <OfficeLocationTabs />
            </section>
        </main>
    )
}