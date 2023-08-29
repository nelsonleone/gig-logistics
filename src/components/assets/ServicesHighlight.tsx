import getHighlightedServicesData from "@/helperFns/getHighlightedServicesData";
import Image from "next/image";
import { Suspense } from 'react'
import CustomSkeleton from "./Loaders";
import formatLink from "@/helperFns/formatLink";
import Link from "next/link";

export default async function ServicesHighlight(){

    const servicesHighlightData = await getHighlightedServicesData()

    return (
        <section className="my-[8rem] px-3">
            <h2 className="font-roboto-slab text-[1.8rem] text-black text-center font-bold">Seamless Delivery Services</h2>

            <div className="flex justify-center items-center gap-4 flex-col mt-5">
                {
                    servicesHighlightData.map(val => (
                        <Suspense key={val._id} fallback={<CustomSkeleton width={600} height={500} variant="rectangular" />}>
                            <Link href={formatLink(val.slug)}>
                                <div 
                                   className="relative bg-white w-[20rem] flex gap-4 justify-center items-center text-center flex-col text-[#4b5563] m-auto border-[1.5px] px-6 py-10 border-gray-200 transition-all duration-300 ease-linear
                                   hover:scale-105 hover:bg-black hover:text-white group/serviceCard overflow-hidden
                                   "
                                   >
                                    <Image 
                                      className="transition-all duration-150 ease-in-out opacity-80 group/group-hover/serviceCard:filter group-hover/serviceCard:brightness-0 group-hover/serviceCard:invert-[1]" 
                                      src={val.serviceImageIcon} 
                                      alt={val.iconImageAlt}
                                      width={100}
                                      height={100} 
                                    />
                                    <h3 className="text-xl font-medium">{val.serviceHighlightHeading}</h3>
                                    <p className="text-[.9rem]">{val.serviceDescription}</p>

                                    {
                                        val.isNewService &&
                                        <p className="absolute p-2 text-center top-4 rotate-45 -right-10 w-1/2 bg-red-600 text-white text-sm">New</p>
                                    }
                                </div>
                            </Link>
                        </Suspense>
                    ))
                }
            </div>
        </section>
    )
}