'use client'

import { nanoid } from "@reduxjs/toolkit";
import { primaryNavData } from "@/componentsData"
import { ClickAwayListener } from "@mui/base"
import { Breakpoints } from "@/enums";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from '@mui/material'
import { FaAngleDown } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setOpenNav } from "@/redux/slices/openNavSlice";
import DropDownLinks from "./DropdownLinks";

export default function MainNav(){

    const { openNav:showPrimaryNav } = useAppSelector(store => store.openNav)
    const dispatch = useAppDispatch()
    const [showDropdownMenu,setShowDropdownMenu] = useState(false)

    const handleClickAway = () => {
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

    return(
        <nav className="flex justify-between align-middle" id="main-nav">
            {
                showPrimaryNav &&
                <ClickAwayListener  
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={handleClickAway}>
                    <ul className={showPrimaryNav ? "primary_nav show_nav" : "primary_nav hide_nav"}>
                        {
                            primaryNavData.map((linkData,index) => {
                                return (
                                    <li 
                                        key={nanoid()} 
                                        className="my-6 text-[.95rem] relative font-medium"
                                        aria-haspopup={index === 0 ? "true" : "false"}
                                        aria-expanded={index === 0? "true" : "false"}
                                    >
                                        <Link 
                                        href={linkData.link} 
                                        onClick={() => index === 0 ? setShowDropdownMenu(prevState => prevState = !prevState) : {}}
                                        className={`${showDropdownMenu && linkData.dropDown ? "text-red-600" : "text-gray-900"} w-full inline-block`}
                                        >
                                        {linkData.text}
                                        </Link>

                                        {
                                            index === 0 &&
                                            <FaAngleDown aria-hidden="true" className={`absolute top-0 right-0 transition-all duration-300 ease-linear ${showDropdownMenu ? "rotate-180 text-red-600" : "rotate-0"}`} />
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
                        className="my-6 text-[.95rem] relative font-medium font-roboto text-white bg-red-600        border-2 rounded-md border-red-600 w-32 p-[.5rem] transition-all ease-linear duration-300 hover:text-red-600 hover:bg-white lg:hidden ">
                            <Link href="#track">Track & Find</Link>
                        </li>
                    </ul>
                </ClickAwayListener>
            }

            <ul className="flex align-middle self-center justify-end w-[13.5rem]">
                <li className="hidden">
                    <Button LinkComponent='a' href="#track">Track & Find</Button>
                </li>
                <li>
                    <Link 
                       className="bg-red-600 text-slate-50 transition-opacity duration-300 px-5 py-3 rounded text-sm font-normal hover:opacity-75"
                       href="/signin"
                        >
                       Sign In
                    </Link>
                </li>
            </ul>
        </nav>
    )
}