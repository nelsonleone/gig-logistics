'use client'

import { usePathname } from "next/navigation";
import Logo from "../assets/Logo";
import MenuIcon from "../assets/MenuIcon";
import MainNav from "../MainNav";
import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from "react";
import { inter } from "@/app/fonts";
import { handleScrollIntoView } from "@/helperFns/handleScrollIntoView";
import { useAppSelector } from "@/redux/customHooks";

export default function Header({ authSessionToken, children }: { authSessionToken:string | undefined, children: ReactNode }){

    const pathName = usePathname()
    const { beenAuthenticated } = useAppSelector(store => store.authUser)

    return(
        !pathName.match(`/admin/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`) ?
        <header className="bg-slate-50 w-full py-4 px-6 h-20 fixed top-0 z-50 flex justify-between items-center xl:px-10 lg:py-12 drop-shadow-md">
            <MenuIcon />
            <Logo />
            <MainNav authSessionToken={authSessionToken} />
            <div className="flex gap-4">
                {
                    pathName === "/" ?
                        <button
                            onClick={handleScrollIntoView}
                            className={`${inter.className} hidden lg:block red-button-bright font-inter transition-opacity font-medium hover:shadow-inner hover:opacity-90 focus:border focus:border-red-600 focus:text-red-600 focus:bg-transparent h-[3.2em] text-sm text-white py-2 px-4 hover:bg-red-700`}
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