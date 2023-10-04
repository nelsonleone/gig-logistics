"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { roboto_slab } from "@/app/fonts";
import Link from "next/link";
import { PT_ServiceName } from "@/enums";
import renderServiceCardsData from "@/helperFns/renderServiceCardsData";

interface IProps {
    serviceName: PT_ServiceName
}

const dlCardAnimationObj = {
    initialOdd:{
        x: -200,
        opacity: 0
    },
    initialEven:{
        x: 200,
        opacity: 0
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        }
    }
}

export default function PTdedicatedServicesCardsContainer({ serviceName }:IProps){
    return(
        <section className="mt-24 lg:mt-28 md:mb-24 overflow-x-hidden">
            <h2 className={`${roboto_slab.className} text-center font-bold capitalize text-[1.7rem]`}>Our dedicated offerings to you?</h2>
            <div className="flex gap-7 flex-col justify-center mt-10 md:flex-row flex-wrap md:gap-16">
                {
                    renderServiceCardsData(serviceName).sort((a,b) => a.title.localeCompare(b.title)).map((details,index) => {
                        const linkText = "The GIGL Class Plan";
                        const startIndex = details.text.indexOf(linkText)
                        const afterLink = details.text.slice(startIndex + linkText.length)

                        return (
                            <motion.div 
                                variants={dlCardAnimationObj}
                                initial={index % 2 === 0 ? "initialEven" : "initialOdd"}
                                whileInView="animate"
                                key={details.title} 
                                viewport={{ once: true, margin: "-30px" }}
                                className="drop-shadow-md rounded-lg bg-white flex flex-col items-center p-4 py-6 md:basis-[40%] lg:basis-[25%]"
                            >
                                <Image 
                                    src={details?.icon as string}
                                    width={100}
                                    height={100}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    className="block my-4 w-[3.6rem] h-auto"
                                />
                                <h3 className="font-semibold text-lg text-center my-3">{details.title}</h3>
                                {
                                    details.title === linkText ?
                                    <p className="text-[.83rem] leading-4 text-center">
                                        <Link href="" className="underline hover:text-red-600 transition-colors duration-300 ease-in-out">{linkText}</Link>
                                        {afterLink}
                                    </p>
                                    :
                                    <p className="text-[.83rem] leading-4 text-center">{details.text}</p>
                                }
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}