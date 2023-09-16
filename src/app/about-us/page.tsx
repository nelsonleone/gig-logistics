import MainAboutUsPageContent from "@/components/MainAboutUsPageContent"
import CustomSkeleton from "@/components/assets/Loaders"
import getAboutUsPageContent from "@/helperFns/getAboutUsPageContent"
import { Suspense } from 'react'

export default async function About(){

    const aboutPageContentData = await getAboutUsPageContent()

    const dmArr = []
    dmArr.push(aboutPageContentData?.aboutUsContent2,aboutPageContentData?.aboutUsContent3)

    return(
        aboutPageContentData ?
        <main className="min-h-screen pt-24">
            <Suspense fallback={<CustomSkeleton variant="rectangular" className="" />}>
                <h1 className="text-center mt-8 mb-4 font-roboto-slab text-bold text-3xl text-[#374151]">{aboutPageContentData?.introHeading}</h1>
                <p>{aboutPageContentData?.introText}</p>
            </Suspense>
            <MainAboutUsPageContent aboutPageContentData={aboutPageContentData} className="" />
            <section>
                {
                    dmArr.map((val,index) => (
                        <div key={`${val}_${index}`}>
                            <h2>{val.heading}</h2>
                            <p>{val.text}</p>
                        </div>
                    ))
                }
            </section>
        </main>
        :
        null
    )
}