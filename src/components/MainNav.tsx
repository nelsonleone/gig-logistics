'use client';

import { nanoid } from "@reduxjs/toolkit";
import { primaryNavData } from "@/componentsData"
import { ClickAwayListener } from "@mui/base"
import { Breakpoints } from "@/enums";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconButton } from '@mui/material'
import { FaAngleDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setOpenNav } from "@/redux/slices/openNavSlice";
import DropDownLinks from "./DropdownLinks";
import { AiOutlineClose } from 'react-icons/ai'
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { handleScrollIntoView } from "@/helperFns/handleScrollIntoView";

export default function MainNav(){

    const { openNav } = useAppSelector(store => store.openNav)
    const pathName = usePathname()
    const [showPrimaryNav,setShowPrimaryNav] = useState(openNav)
    const dispatch = useAppDispatch()
    const [showDropdownMenu,setShowDropdownMenu] = useState(openNav)
    const [innerWidth,setInnerWidth] = useState<number>(0)


    const handleClickAway = () => {
        if(window.innerWidth >= Breakpoints.Large)return;
        dispatch(setOpenNav(false))
    }

    const handleResize = () => {
        setInnerWidth(window.innerWidth)
        window.innerWidth >= Breakpoints.Large ? dispatch(setOpenNav(true)) : dispatch(setOpenNav(false))
    }


    const handleTrackButtonClick = () => {
        handleScrollIntoView()
        if(window.innerWidth < Breakpoints.Large){
            dispatch(setOpenNav(false))
        }
    }



    useEffect(() => {
        window.addEventListener('resize',handleResize)
        setInnerWidth(window.innerWidth)
        dispatch(setOpenNav(window.innerWidth >= Breakpoints.Large))
        return () => window.removeEventListener('resize',handleResize)
    },[])
    

    useEffect(() => {
        setShowPrimaryNav(openNav)
        setShowDropdownMenu(window.innerWidth >= Breakpoints.Large)
    },[openNav])

    

    useEffect(() => {
        if(window.innerWidth < Breakpoints.Large){
            dispatch(setOpenNav(false))
        }
    },[pathName])


    return(
        <nav className="flex justify-between items-center lg:w-[65%] xl:w-[50%]" id="main-nav">
            <AnimatePresence>
            {
                showPrimaryNav &&
                <ClickAwayListener  
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchEnd"
                    onClickAway={handleClickAway}>
                    <motion.ul
                       exit={{ x: -400, transition: { duration: .5, ease: "linear" } }}
                       id="primary-nav" 
                       className={showPrimaryNav ? "primary_nav show_nav" : "primary_nav hide_nav"}
                       >
                        <IconButton 
                           aria-label="close" 
                           onClick={() => dispatch(setOpenNav(false))}
                           className="absolute top-12 right-4 lg:hidden border-b border-red-800 transition ease-in-out duration-200 hover:border-solid focus:border-solid"
                           >
                            <AiOutlineClose />
                        </IconButton>
                        {
                            primaryNavData.map((linkData,index) => {
                                return (
                                    <li 
                                        key={nanoid()} 
                                        className={`my-6 text-[.95rem] relative font-medium lg:inline-block me-12 w-[70%] first-of-type:me-20 ${index === 0 ? "group/dropdownContainer w-[90%]" : ""} lg:w-auto hover:text-red-600`}
                                        aria-haspopup={index === 0 ? "true" : "false"}
                                        aria-expanded={index === 0? "true" : "false"}
                                        aria-controls="dropdown"
                                    >
                                        {
                                            !linkData.dropDown ?
                                            <Link 
                                                href={linkData.link} 
                                                className={`${pathName === linkData.link ? "text-red-600" : "text-primary"} w-full inline-block transition duration-200 pointer-events-auto ease-linear hover:text-red-600`}
                                              >
                                             {linkData.text}
                                            </Link>
                                            :
                                            <button   
                                              className={`${showDropdownMenu && innerWidth < Breakpoints.Large ? "text-red-600" : "text-primary"} w-full text-left inline-block transition duration-200 ease-linear hover:text-red-600`}                                             
                                              onClick={() => innerWidth < Breakpoints.Large ? setShowDropdownMenu(prevState => prevState = !prevState) : {}}
                                              >
                                                {linkData.text}
                                            </button>
                                        }

                                        {
                                            index === 0 &&
                                            <FaAngleDown aria-hidden="true" className={`absolute top-1 right-2 transition-all duration-300 ease-linear ${showDropdownMenu && innerWidth < Breakpoints.Large ? "rotate-180 text-red-600" : "rotate-0 text-gray-800"} lg:top-1/2 lg:bottom-1/2 lg:m-auto lg:-right-[2.4rem] ${innerWidth >= Breakpoints.Large ? "group-hover/dropdownContainer:rotate-180" : ""} group-hover/dropdownContainer:text-red-600`} />
                                        }

                                        {
                                            linkData.dropDown &&
                                            <DropDownLinks 
                                              dropDown={linkData.dropDown} 
                                              setShowDropdownMenu={setShowDropdownMenu} 
                                              showDropdownMenu={showDropdownMenu} 
                                            />
                                        }
                                    </li>
                                )
                            })
                        }

                        {
                           pathName === "/" ?
                           <li 
                            onClick={handleTrackButtonClick}
                            >
                                <button className="red-button-bright lg:hidden w-[10em] p-3">Track & Find</button>
                            </li>
                            :
                            null
                        }
                    </motion.ul>
                </ClickAwayListener>
            }
            </AnimatePresence>
        </nav>
    )
}