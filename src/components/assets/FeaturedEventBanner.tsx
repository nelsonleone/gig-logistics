import getFeaturedEventData from "@/helperFns/getFeaturedEventData"
import Link from "next/link"
import Image from 'next/image'

export default async function FeaturedEventBanner(){
    
    const featuredEventData = await getFeaturedEventData()

    return(
        <div className="p-1 py-2 w-full gap-1 md:gap-3 absolute z-20 top-[5rem] flex flex-wrap justify-between align-middle bg-black text-white md:justify-center md:px-4 lg:top-[6rem]">
            <Image className="w-16 h-9" src={featuredEventData?.bannerIcon || ""} width={100} height={40} alt={featuredEventData?.bannerIconAltText || "Shipping Icon"} />
            <p className="basis-[80%] md:basis-auto text-[.85rem] md:text-center">{featuredEventData?.textContent}</p>
            <Link className="basis-[40%] md:basis-[auto] red-button py-[.5rem!important] px-[0!important] text-center  text-[.8rem] p-0 w-[50%]  m-auto text-sm md:w-[6rem] md:m-0 md:ml-6"  href={featuredEventData?.eventPageLink || ""}>
                Learn More
            </Link>
        </div>
    )
}