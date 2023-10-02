import getFeaturedEventData from "@/helperFns/getFeaturedEventData"
import Link from "next/link"
import Image from 'next/image'
import { Suspense } from "react"
import CustomSkeleton from "./assets/Loaders"

export default async function FeaturedEventBanner(){
    
    const featuredEventData = await getFeaturedEventData()

    return(
        <Suspense fallback={<CustomSkeleton variant="rectangular" className="rounded-md w-full h-14 absolute z-20 top-[5rem] lg:top-[6rem]" />}>
            {/* <div className="p-1 py-2 w-full gap-1 md:gap-3 absolute z-20 top-[5rem] flex flex-wrap justify-between items-center bg-black text-white md:justify-center md:px-4 lg:top-[6rem] lg:py-2">
                <Image className="w-16 h-9 lg:w-28 lg:h-[3rem]" src={featuredEventData?.bannerIcon || ""} width={100} height={40} alt={featuredEventData?.bannerIconAltText || "Shipping Icon"} />
                <p className="basis-[80%] md:basis-auto text-[.85rem] md:text-center lg:text-[1rem] lg:font-medium">{featuredEventData?.textContent}</p>
                <Link className="basis-[40%] md:basis-[auto] red-button-dark bg-[#d5343a] p-[.6rem] text-center  text-[.8rem]  w-[50%]  m-auto text-sm md:w-[6rem] md:m-0 md:ml-6 lg:px-6 lg:w-auto hover:brightness-[90%] font-medium focus:outline focus:outline-gray-100"  href={featuredEventData?.eventPageLink || ""}>
                    Learn More
                </Link>
            </div> */}
            <CustomSkeleton variant="rectangular"  className="bg-gray-500 w-full h-16 absolute z-20 top-[10rem] lg:top-[6rem]" />
        </Suspense>
    )
}