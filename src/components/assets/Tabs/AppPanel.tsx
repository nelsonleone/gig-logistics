"use client"

import appPanelNavData from "@/componentsData/app-panel-nav-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppPanel(){

    const pathName = usePathname()

    return(
        <div className="bg-slate-50 rounded-lg shadow-2xl overflow-hidden md:w-72 lg:absolute lg:top-28 lg:w-64">
            <nav>
                {
                    appPanelNavData.map(val => {
                        const Icon = val.icon;

                        return(
                            <Link
                                key={val.link}
                                href={`/app-panel/${val.link}`}  
                                className={`${pathName === `/app-panel/${val.link}` ? "bg-[rgba(10,10,10,1)] text-white" : "bg-transparent hover:bg-gray-300 focus:bg-gray-300"} px-4 py-3 flex gap-3 text-sm font-medium focus:outline-none`}
                                >
                                <Icon className="text-[1.4rem] text-inherit" ariaLabel={val.text} />
                                <p>{val.text}</p>
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}