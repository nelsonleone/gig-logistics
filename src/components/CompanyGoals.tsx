"use client";

import { roboto_slab } from "@/app/fonts";
import { companyGoalsData } from "@/componentsData";
import { motion } from 'framer-motion';

const companyGoalsAnimationVariant = {
    initial: {
        y: 200,
        opacity: .3
    },
    animate: {
        y: 0,
        opacity: 1,

        transition: {
            ease: "linear",
            duration: .5,
            type: "twean"
        }
    }
}

export default function CompanyGoals(){
    return(
        <section className="mt-20 mb-16 lg:mt-[6rem]">
            <motion.h3 
              initial={{ x:-200, opacity:0 }}
              whileInView={{ x: 0, opacity:1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: .3 }}
              className={`${roboto_slab.className} text-center text-2xl font-bold lg:text-[2rem] lg:text-left lg:leading-10`}
              >
                We take the <span className="block text-red-600">burden of logistics off you.</span>
            </motion.h3>

            <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 lg:mt-[6rem]">
                {
                    companyGoalsData.map((val,index) => {
                        return(
                            <motion.div 
                              key={`${val.title}-${index}`} 
                              className="flex flex-col justify-between gap-4 mb-12"
                              variants={companyGoalsAnimationVariant}
                              initial="initial"
                              viewport={{ once: true }}
                              whileInView="animate"
                              >
                                <img 
                                  src={`/${val.iconImage}`} 
                                  alt="" 
                                  aria-hidden="true" 
                                  className="w-8 block"
                                />
                                <h4 className="font-bold text-[hsl(0,0%,4%)] mt-1 mb-3 text-lg">{val.title}</h4>
                                <p className="text-[hsl(0,0%,4%)] text-base leading-7">{val.body}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
        </section>
    )
}