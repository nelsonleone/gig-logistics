"use client"

import { motion } from "framer-motion";
import { DLDedicatedServices } from "../../types";
import Image from "next/image";

interface IProps {
    domesticLogisticsDedicatedServices: DLDedicatedServices
}

const dlCardAnimationObj = {
    initial:{
        x: -200,
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

export default function DLCardsContainer({ domesticLogisticsDedicatedServices }:IProps){
    return(
        <section className="mt-16 lg:mt-24 md:mb-24">
        <h2 className="text-center font-bold capitalize text-[1.7rem]">Our dedicated offerings to you?</h2>
        <div className="flex gap-7 flex-col justify-center mt-10 md:flex-row flex-wrap md:gap-16">
            {
                domesticLogisticsDedicatedServices.map(details => (
                    <motion.div 
                       variants={dlCardAnimationObj}
                       initial="initial"
                       whileInView="animate"
                       key={details.title} 
                       viewport={{ once: true }}
                       className="drop-shadow-md rounded-md bg-white flex gap-2 flex-col justify-between items-center p-4 py-6 md:basis-[40%] lg:basis-[25%]"
                       >
                        <Image 
                          src={details?.icon as string}
                          width={60}
                          height={60}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          className="block my-4 w-[3.7rem] h-auto"
                          />
                        <h3 className="font-semibold text-lg text-center">{details.title}</h3>
                        <p className="text-sm text-center">{details.text}</p>
                    </motion.div>
                ))
            }
        </div>
    </section>
    )
}