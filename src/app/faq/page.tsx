import getFaqData from "@/helperFns/getFaqData"
import FaqAccordion from "@/components/FaqAccordion"
import { roboto_slab } from "../fonts"

export default async function FaqPage(){

    const faqData = await getFaqData()

    return(
        <div className="min-h-screen pt-20 mb-8">
            <div className="bg-[url('/images/offices_bg.svg')] py-14 px-4 w-full h-[45vh]">
                <h1 className={`${roboto_slab.className} font-bold text-[2.2rem] text-[#374151]`}>Frequently Asked Questions</h1>
            </div>

            <div>
                {
                    faqData.map(val => {
                        return(
                            <div className="px-4 bg-gray-100 bg-blend-darken pt-8 text-[#111827]" key={val._id}>
                                <h2 className="font-semibold my-5 text-2xl capitalize w-10/12">{val.faqSection.faqSectionTitle}</h2>
                                <FaqAccordion val={val} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}