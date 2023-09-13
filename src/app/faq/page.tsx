import getFaqData from "@/helperFns/getFaqData"
import FaqAccordion from "@/components/FaqAccordion"

export default async function FaqPage(){

    const faqData = await getFaqData()

    return(
        <div className="min-h-screen pt-20">
            <div className="p-8 bg-[url('/images/offices_bg.svg')] ">
                <h1 className="font-bold text-[2.2rem]  my-8 text-[#374151] font-roboto-slab">Frequently Asked Questions</h1>
            </div>

            <div>
                {
                    faqData.map(val => {
                        return(
                            <div key={val._id}>
                                <h2>{val.faqSection.faqSectionTitle}</h2>
                                <FaqAccordion val={val} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}