'use client'

import { usePathname } from "next/navigation";
import Logo from "../assets/Logo";
import MenuIcon from "../assets/MenuIcon";
import MainNav from "../MainNav";

export default function Header(){

    const pathName = usePathname()

    return(
       !pathName.match(`/admin/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`) ?
        <header className="bg-slate-50 w-full py-4 px-6 h-20 fixed top-0 z-50 flex justify-between items-center xl:px-10 lg:py-12 drop-shadow-md">
            <MenuIcon />
            <Logo />
            <MainNav />
        </header>
        :
        null
    )
}