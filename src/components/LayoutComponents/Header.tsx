'use client'

import { usePathname } from "next/navigation";
import Logo from "../assets/Logo";
import MenuIcon from "../assets/MenuIcon";
import MainNav from "../MainNav";
import { ReactNode, useEffect, useState } from "react";
import { inter } from "@/app/fonts";
import { handleScrollIntoView } from "@/helperFns/handleScrollIntoView";

export default function Header({ children }:{ children: ReactNode }){

    const pathName = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return(
        !pathName.match(`/admin/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`) ?
        <header className={`fixed top-0 w-full transition-all duration-300 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'} bg-slate-50 w-full py-4 px-6 h-20 fixed top-0 z-[59] flex justify-between items-center xl:px-10 lg:py-12 drop-shadow-md`}>
            <MenuIcon />
            <Logo />
            <MainNav />
            <div className="flex gap-4">
                {
                    pathName === "/" ?
                        <button
                            onClick={handleScrollIntoView}
                            className={`${inter.className} hidden lg:block red-button-bright font-inter transition-opacity font-medium hover:shadow-inner hover:opacity-90 focus:border focus:border-red-600 focus:text-red-600 focus:bg-transparent h-[3.2em] text-sm text-base-color1 py-2 px-4 hover:bg-red-700`}
                            >Track & Find
                        </button>
                    :
                    null
                }
                {children}        
            </div>
        </header>
        :
        null
    )
}