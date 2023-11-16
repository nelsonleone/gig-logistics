import MainAboutUsPageContent from "@/components/MainAboutUsPageContent"
import CustomSkeleton from "@/components/assets/Loaders"
import { Suspense } from 'react'
import { roboto_slab } from '../fonts'
import AboutPageCards from "@/components/AboutPageCards"
import { Metadata } from "next"
import getAboutUsPageContent from "@/helperFns/getAboutUsPageContent"

export const metadata : Metadata = {
    title: "Who Are We | GIG Logistics"
}

export default async function About(){

    const aboutPageContentData = await getAboutUsPageContent()

    const dmArr = []
    if(aboutPageContentData){
        dmArr.push(aboutPageContentData.aboutUsContent2,aboutPageContentData.aboutUsContent3)
    }

    return(
        <main className="page text-[#374151] px-6 xl:px-10">
            <Suspense fallback={<CustomSkeleton variant="rectangular" className="w-full h-28 lg:w-1/2 lg:mx-auto" />}>
                <h1 className={`${roboto_slab.className} text-center mb-4 mt-36 font-bold text-3xl  capitalize`}>{aboutPageContentData?.introHeading}</h1>
                <p className="text-center font-base">{aboutPageContentData?.introText}</p>
            </Suspense>

            <MainAboutUsPageContent
               aboutPageContentData={aboutPageContentData} 
               className="flex flex-col gap-8 mt-8 lg:mt-20 lg:flex-row lg:justify-between lg:items-start lg:gap-16" 
            />

            <section className="lg:flex gap-8 justify-between items-center md:my-10">
                {
                    dmArr.map((val,index) => (
                        <div key={`${val}_${index}`} className="text-center my-10 lg:w-1/2">
                            <h2 className={`${roboto_slab.className} text-2xl md:text-3xl font-bold mb-2 capitalize`}>{val.heading}</h2>
                            <p className="font-medium text-lg md:w-4/5 md:mx-auto">{val.text}</p>
                        </div>
                    ))
                }
            </section>

            <AboutPageCards aboutUsServiceHighlightCards={aboutPageContentData.aboutUsServiceHighlightCards} />
        </main>
    )
}