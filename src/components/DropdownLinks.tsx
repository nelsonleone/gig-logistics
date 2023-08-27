'use client'

import { ClickAwayListener } from "@mui/base"
import { nanoid } from "@reduxjs/toolkit"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction, useState } from 'react'

interface IProps{
    dropDown: {
        link: string,
        text: string
    }[],
    setShowDropdownMenu: Dispatch<SetStateAction<boolean>>,
    showDropdownMenu: boolean
}

export default function DropDownLinks({ dropDown, setShowDropdownMenu, showDropdownMenu }:IProps){

    const pathName = usePathname()

    return(
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={() => setShowDropdownMenu(false)} 
            >
            <ul 
              className={`${showDropdownMenu ? "block" : "hidden"} bg-slate-100 mt-1 `}
             >
                {
                    dropDown.map(dropDownData => (
                        <li key={nanoid()} className="my-3  border-b-[1px] border-b-gray-200 p-[.7rem] flex align-middle  last:border-0">
                            <Link className={pathName === dropDownData.link ? "text-red-600" : "text-gray-900"} href={dropDownData.link}>{dropDownData.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </ClickAwayListener>
    )
}