import getServicesPortfolioData from "@/helperFns/getServicesPortfolioData"
import { roboto_slab } from "../fonts"
import Image from "next/image"
import DuoSkeleton from "@/components/assets/Loaders/DuoSkeleton"
import { Suspense } from "react"
import { FcShipped } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link"

export default async function ServicesPortfolioPage(){

    const servicePortfolioData = await getServicesPortfolioData()

    return(
        <main className="page pt-16">
            <section className="text-primary">
                <h1 className={`${roboto_slab.className} text-3xl md:text-4xl my-8 relative font-bold after:content-[""] after:w-20 after:block after:absolute after:-bottom-2 after:left-0 after:bg-primary after:h-1 after:rounded-md`}>Services Portfolio</h1>
            
                <Suspense fallback={<DuoSkeleton />}>
                    <div className="lg:flex justify-between gap-8 items-center">
                        {
                            servicePortfolioData ?
                            <>
                                <div>
                                    <Image src={servicePortfolioData?.repImage} alt={servicePortfolioData?.repImageAlt} width={700} height={700} loading="eager" priority />
                                </div>
                                <div className="md:flex flex-wrap justify-between lg:w-[48%]">
                                    {
                                        servicePortfolioData.servicesPortfolioContents && servicePortfolioData.servicesPortfolioContents.length ? servicePortfolioData.servicesPortfolioContents.map(data => (
                                            <div className="md:w-[45%] gap-4 bg-base-color2 relative text-base-color1 rounded-2xl my-8 px-4 min-h-[9em] py-6">
                                                <FcShipped className="absolute -left-3 -top-3 block text-3xl" aria-hidden="true" />
                                                <h2 className="text-lg font-semibold uppercase my-4">{data.serviceName}</h2>
                                                <p className="text-xs">{data.serviceDesc}</p>
                                                <Link className="inline-flex text-sm items-center gap-2 mt-4 transition ease-in-out duration-300 relative ms-2 hover:text-accent-color3 hover:scale-105" href={`${process.env.NEXT_PUBLIC_BASE_APP_URL}${data.serviceLink.current}`}>
                                                    <span>Read</span> 
                                                    <FaArrowRightLong aria-hidden="true" />
                                                </Link>
                                            </div>
                                        ))
                                        :
                                        null
                                    }
                                </div>
                            </> 
                            :
                            <DuoSkeleton />
                        }
                    </div>
                </Suspense>
            </section>
        </main>
    )
}