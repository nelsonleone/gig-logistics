"use client"

import { personalShoppingMCLinkData } from "@/componentsData/personalshoppingMCLinkData";
import AppPanelMCContainer from "./AppPanelPagesMCContainer";
import BackBtn from "./assets/BackBtn";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"
import { useState, MouseEvent } from "react";

interface IAnimateArrowObj {
    index: number,
    start: boolean
}


const smoothAnimation = {
    translateX: [0, 23,0],
    transition: { repeat: Infinity, ease: 'linear', duration: 1.15 },
}

export default function PersonalShoppingMainContent(){

    const pathName = usePathname()


    // Arrow Indicator Animation State and Mutation Helper Fns
    const [animateArrowObj,setAnimateArrowObj] = useState<IAnimateArrowObj[]>([
        {
            index: 0,
            start: false
        },
        {
            index: 1,
            start: false
        }
    ])

    const handleSetAnimateArrowObj = (e:MouseEvent<HTMLDivElement>,index: number) => {
        setAnimateArrowObj(prevVal => {
            return prevVal.map(val => ({
                ...val,
                start: val.index === index,
            }))
        })
    }
    
    const handleDefaultAnimateArrow = () => {
        setAnimateArrowObj(prevVal => {
            return prevVal.map(val => ({
                ...val,
                start: false,
            }))
        })
    }



    return(
        <AppPanelMCContainer className="relative pt-26 lg:pt-28 md:pb-10 md:px-24">
            <BackBtn className="font-semibold left-24" />

           <h2 className='text-primary text-lg font-semibold text-center capitalize lg:text-left md:text-2xl'>What would you like to do ?</h2>
           <div className="my-8 flex flex-col gap-4 lg:gap-6 justify-center">
                {
                    personalShoppingMCLinkData.map((val,index) => {
                        const Icon = val.icon;

                        return(
                            <Link href={val.link} key={`${val.title}-${index}`} className="group/personalShoppingMCLink">
                                <div 
                                    onMouseOver={(e) => handleSetAnimateArrowObj(e,index)}
                                    onMouseLeave={handleDefaultAnimateArrow} 
                                    className="text-primary relative border border-gray-300 rounded p-4 pe-10 flex gap-4 items-center md:py-10 lg:py-14 lg:w-4/5 lg:pe-14 xl:pe-6"
                                    >
                                    <div className="w-14 rounded-full aspect-square bg-slate-100 flex justify-center items-center">
                                        <Icon className="text-[#C3302E] w-6 md:text-2xl" />
                                    </div>

                                    <div>
                                        <h4 className="mb-3 text-sm font-medium md:text-lg">{val.title}</h4>
                                        <p className="text-xs text-[#6b7280] md:text-sm">{val.text}</p>
                                    </div>

                                    <motion.span className="flex justify-center items-center absolute top-0 bottom-0 my-auto right-4 lg:right-8 xl:right-12" animate={animateArrowObj[index].start ? smoothAnimation : {}}>
                                        <FaAngleRight className="md:text-2xl"/>
                                    </motion.span>
                                </div>
                            </Link>
                        )
                    })
                }
           </div>
        </AppPanelMCContainer>
    )
}