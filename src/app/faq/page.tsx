import { getFaqData } from "@/helperFns/getFaqData"
import FaqAccordion from "@/components/FaqAccordion"
import { roboto_slab } from "../fonts"
import { Metadata } from "next"

export const metadata : Metadata = {
    title: "FAQ | GIG Logistics"
}

export default async function FaqPage(){

    const faqData = await getFaqData()

    return(
        <div className="page px-0 py-5 mt-16 mb-12 lg:overflow-y-auto lg:min-h-0 lg:h-screen scroll-mx-2 lg:me-1">
            <div className="bg-[url('/images/offices_bg.svg')] py-14 px-4 w-full h-[45vh] md:pt-20 md:flex md:justify-center lg:items-center">
                <h1 className={`${roboto_slab.className} font-bold text-[2.2rem] text-primary`}>Frequently Asked Questions</h1>
            </div>

            <div className="px-4 lg:px-6 bg-base-color1 rounded-lg my-8 md:w-11/12 md:mx-auto">
                {
                    faqData?.map(val => {
                        return(
                            <div className="px-6 bg-gray-100 bg-blend-darken pt-8 text-[#111827] xl:px-10" key={val._id}>
                                <h2 className="font-semibold my-5 text-2xl capitalize w-10/12 ps-2">{val.faqSection.faqSectionTitle}</h2>
                                <div className=" lg:w-2/3 mx-auto">
                                  <FaqAccordion val={val} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}