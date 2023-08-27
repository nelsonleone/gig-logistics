'use client'

import { nanoid } from "@reduxjs/toolkit";
import { primaryNavData } from "@/componentsData"
import { ClickAwayListener } from "@mui/base"
import { Breakpoints } from "@/enums";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from '@mui/material'
import { usePathname } from "next/navigation";
import { FaAngleDown } from 'react-icons/fa';

export default function MainNav(){

    const [showPrimaryNav,setShowPrimaryNav] = useState<boolean>(true)
    const [showDropdownMenu,setShowDropdownMenu] = useState(true)
    const pathName = usePathname()

    const handleClickAway = () => {
        setShowPrimaryNav(false)
    }

    const handleResize = () => {
        window.innerWidth >= Breakpoints.Large ? setShowPrimaryNav(true) : setShowPrimaryNav(false)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)

        return () => window.removeEventListener('resize',handleResize)
    },[])

    return(
        <nav className="flex justify-between align-middle" id="main-nav">
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
                                    className="my-6 text-[.9rem] relative font-medium border-b-red-600"
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
                                        <FaAngleDown aria-hidden="true" className={`absolute top-0 right-0 transition-transform linear ${showDropdownMenu ? "rotate-180 text-red-600" : "rotate-0"}`} />
                                    }

                                    {
                                        linkData.dropDown &&
                                        <ul 
                                          className={`${showDropdownMenu ? "block" : "hidden"} bg-slate-100 p-4 mt-1`}
                                          >
                                            {
                                                linkData.dropDown.map(dropDownData => (
                                                    <li key={nanoid()} className="my-3">
                                                        <Link className={pathName === dropDownData.link ? "text-red-600" : "text-gray-900"} href={dropDownData.link}>{dropDownData.text}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </ClickAwayListener>

            <ul>
                <li>
                    <Button LinkComponent='a' href="#track">Track & Find</Button>
                </li>
                <li>
                    <Button LinkComponent='a' href="/signin">Sign In/Sign Up</Button>
                </li>
            </ul>
        </nav>
    )
}