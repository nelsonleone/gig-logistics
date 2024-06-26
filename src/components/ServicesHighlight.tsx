import { getHighlightedServicesData } from "@/helperFns/getHighlightedServicesData";
import Image from "next/image";
import { Suspense } from 'react'
import CustomSkeleton from "./assets/Loaders";
import Link from "next/link";
import { roboto_slab } from "@/app/fonts";

export default async function ServicesHighlight(){

    const servicesHighlightData = await getHighlightedServicesData()
    const emptyArray = [1,2,3]

    return (
        <section className="mt-[15em] lg:mt-72 mb-[6.5em] px-3">
            <h2 className={`${roboto_slab.className} text-[1.8rem] text-base-color2 text-center font-bold`}>Seamless Delivery Services</h2>

            <div className="flex justify-center items-center gap-4 flex-col mt-5 md:flex-wrap md:flex-row md:justify-between lg:flex-nowrap lg:flex-row lg:mt-10 lg:justify-between">
                {
                    servicesHighlightData.map(val => (
                        <Suspense key={val._id} fallback={<CustomSkeleton className="w-full h-[18em] md:w-[48%] lg:w-full" variant="rectangular" />}>
                            <Link href={val.slug} className="focus:outline focus:outline-base-color2 block w-full md:w-[48%] lg:w-full">
                                <div 
                                   className="relative drop-shadow-sm bg-base-color1  flex gap-4 justify-center items-center text-center flex-col text-[#4b5563] m-auto border-[1.5px] px-6  border-gray-200 transition-all duration-200 ease-linear
                                   hover:scale-105 hover:bg-base-color2 hover:text-base-color1 group/serviceCard overflow-hidden py-10  h-[18em] lg:text-left lg:justify-start lg:items-start
                                   "
                                   >
                                    <Image 
                                      className="w-16 transition-all duration-150 ease-in-out opacity-80 group/group-hover/serviceCard:filter group-hover/serviceCard:brightness-0 group-hover/serviceCard:invert-[1]" 
                                      src={val.serviceImageIcon} 
                                      alt={val.iconImageAlt}
                                      width={100}
                                      height={100} 
                                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAYAAABRorhPAAAAAXNSR0IArs4c6QAAAqVJREFUeF7t0kENADAMA7GVP8DC2aRhuKcDII+TZ3fvMQXCAgNVWNPVLwAVCHkBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC8AVZ7UIVQM5AWgypM6hIqBvABUeVKHUDGQF4AqT+oQKgbyAlDlSR1CxUBeAKo8qUOoGMgLQJUndQgVA3kBqPKkDqFiIC/wAKrxDIh9Dgr7AAAAAElFTkSuQmCC"
                                    />
                                    <h3 className="text-lg font-semibold">{val.serviceHighlightHeading}</h3>
                                    <p className="text-[.9rem]">{val.serviceDescription}</p>

                                    {
                                        val.isNewService &&
                                        <p className="font-bold absolute p-2 text-center top-4 rotate-45 -right-10 w-1/2 bg-red-600 text-base-color1 text-sm">New</p>
                                    }
                                </div>
                            </Link>
                        </Suspense>
                    ))
                }
                {
                    !servicesHighlightData.length || servicesHighlightData.length < 1 ? 
                    <div className="flex flex-col gap-4 md:flex-row justify-center h-20em w-full lg:gap-8">
                        {
                            emptyArray.map((val) =>{
                                return(
                                   <CustomSkeleton key={val} variant="rectangular" className="w-full h-[18em] md:w-[30%]" />
                                )
                            })
                        }
                    </div>
                    :
                    null
                }
            </div>
        </section>
    )
}