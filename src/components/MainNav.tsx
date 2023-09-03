'use client';

import { nanoid } from "@reduxjs/toolkit";
import { primaryNavData } from "@/componentsData"
import { ClickAwayListener } from "@mui/base"
import { Breakpoints } from "@/enums";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, IconButton } from '@mui/material'
import { FaAngleDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setOpenNav } from "@/redux/slices/openNavSlice";
import DropDownLinks from "./DropdownLinks";
import { AiOutlineClose } from 'react-icons/ai'

export default function MainNav(){

    const { openNav } = useAppSelector(store => store.openNav)
    const [showPrimaryNav,setShowPrimaryNav] = useState(openNav)
    const dispatch = useAppDispatch()
    const [showDropdownMenu,setShowDropdownMenu] = useState(openNav)

    const handleClickAway = () => {
        if(window.innerWidth >= Breakpoints.Large)return;
        dispatch(setOpenNav(false))
    }

    const handleResize = () => {
        window.innerWidth >= Breakpoints.Large ? dispatch(setOpenNav(true)) : dispatch(setOpenNav(false))
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)
        dispatch(setOpenNav(window.innerWidth >= Breakpoints.Large))


        return () => window.removeEventListener('resize',handleResize)
    },[])

    useEffect(() => {
        setShowPrimaryNav(openNav)
        setShowDropdownMenu(window.innerWidth >= Breakpoints.Large)
    },[openNav])


    return(
        <nav className="flex justify-between items-center xl:basis-[80%]" id="main-nav">
            {
                showPrimaryNav &&
                <ClickAwayListener  
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchEnd"
                    onClickAway={handleClickAway}>
                    <ul 
                       id="primary-nav" 
                       className={showPrimaryNav ? "primary_nav show_nav" : "primary_nav hide_nav"}
                       >
                        <IconButton 
                           aria-label="close" 
                           onClick={() => dispatch(setOpenNav(false))}
                           className="absolute top-1 right-4 lg:hidden border border-red-800 hover:border-solid focus:border-solid"
                           >
                            <AiOutlineClose />
                        </IconButton>
                        {
                            primaryNavData.map((linkData,index) => {
                                return (
                                    <li 
                                        key={nanoid()} 
                                        className={`my-6 text-[.95rem] relative font-medium lg:inline-block me-12 first-of-type:me-20 ${index === 0 ? "group/dropdownContainer" : ""}`}
                                        aria-haspopup={index === 0 ? "true" : "false"}
                                        aria-expanded={index === 0? "true" : "false"}
                                        aria-controls="dropdown"
                                    >
                                        <Link 
                                            href={linkData.link} 
                                            onClick={() => index === 0 && window.innerWidth < Breakpoints.Large ? setShowDropdownMenu(prevState => prevState = !prevState) : {}}

                                            className={`${showDropdownMenu && linkData.dropDown && window.innerWidth < Breakpoints.Large ? "text-red-600" : "text-gray-800"} w-full inline-block transition duration-200 ease-linear hover:text-red-600`}
                                         >
                                         {linkData.text}
                                        </Link>

                                        {
                                            index === 0 &&
                                            <FaAngleDown aria-hidden="true" className={`absolute top-0 right-0 transition-all duration-300 ease-linear ${showDropdownMenu && window.innerWidth < Breakpoints.Large ? "rotate-180 text-red-600" : "rotate-0 text-gray-800"} lg:top-1/2 lg:bottom-1/2 lg:m-auto lg:-right-[2.4rem] ${window.innerWidth >= Breakpoints.Large ? "group-hover/dropdownContainer:rotate-180" : ""} group-hover/dropdownContainer:text-red-600`} />
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

                        <li 
                          className="red-button-bright lg:hidden w-[10em] p-3 font-bold"
                          >
                            <Link href="#track">Track & Find</Link>
                        </li>
                    </ul>
                </ClickAwayListener>
            }

            <ul 
              className={`absolute items-center self-center ${showPrimaryNav ? 'right-4' : 'right-16'} lg:static lg:right-0 lg:flex justify-between gap-4`}>
                <li 
                 className="hidden lg:block">
                    <Link
                       href="#track"
                       className="red-button-bright font-inter transition-opacity font-bold hover:opacity-80 focus:outline-dotted focus:outline-slate-400 text-white py-3 h-[3em] px-4 hover:bg-red-700" 
                     >Track & Find
                    </Link>
                </li>
                <li>
                    <Link 
                       className="red-button-bright transition-opacity h-[3em] py-3 px-6 font-bold hover:opacity-80 focus:outline-dotted focus:outline-slate-400"
                       href="/signin"
                        >
                       Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}