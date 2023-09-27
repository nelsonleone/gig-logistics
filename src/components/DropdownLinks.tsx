'use client'

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

export default function DropDownLinks({ dropDown, showDropdownMenu }:IProps){

    const pathName = usePathname()

    return(
        <ul 
            id="dropdown"
            className={`${showDropdownMenu ? "block" : "hidden"} w-[16em] bg-slate-100 mt-1 lg:absolute lg:top-4 lg:left-0 lg:w-[15em] lg:bg-gray-50 lg:drop-shadow-xl lg:rounded-md lg:group-hover/dropdownContainer:flex lg:justify-center lg:px-4 lg:flex-col lg:hidden`}
            >
            {
                dropDown.map(dropDownData => (
                    <li key={nanoid()} className={`${pathName === dropDownData.link ? "text-red-600" : "text-gray-900"} my-3  border-b-[1px] border-b-gray-200 p-[.7rem] flex align-middle  last:border-0 lg:border-0 lg:my-1 hover:text-red-600 capitalize`}>
                        <Link href={dropDownData.link}>{dropDownData.text}</Link>
                    </li>
                ))
            }
        </ul>
    )
}