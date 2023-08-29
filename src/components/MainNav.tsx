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
        <nav className="flex justify-between align-middle lg:basis-[75%]" id="main-nav">
            {
                showPrimaryNav &&
                <ClickAwayListener  
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchEnd"
                    onClickAway={handleClickAway}>
                    <ul className={showPrimaryNav ? "primary_nav show_nav" : "primary_nav hide_nav"}>
                        <IconButton 
                           aria-label="close" 
                           onClick={() => dispatch(setOpenNav(false))}
                           className="absolute top-0 right-4 lg:hidden"
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
                                            <FaAngleDown aria-hidden="true" className={`absolute top-0 right-0 transition-all duration-300 ease-linear ${showDropdownMenu && window.innerWidth < Breakpoints.Large ? "rotate-180 text-red-600" : "rotate-0 text-gray-800"} lg:top-1/2 lg:bottom-1/2 lg:m-auto -right-[2.25rem] group-hover/dropdownContainer:rotate-180 group-hover/dropdownContainer:text-red-600`} />
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
                          className="red-button lg:hidden"
                          >
                            <Link href="#track">Track & Find</Link>
                        </li>
                    </ul>
                </ClickAwayListener>
            }

            <ul 
              className={`absolute align-middle self-center ${showPrimaryNav ? 'right-4' : 'right-16'} lg:static right-0`}>
                <li className="hidden">
                    <Button LinkComponent='a' href="#track">Track & Find</Button>
                </li>
                <li>
                    <Link 
                       className="red-button"
                       href="/signin"
                        >
                       Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}