"use client"

import appPanelNavData from "@/componentsData/app-panel-nav-data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppPanel(){

    const pathName = usePathname()

    return(
        <div className="bg-slate-50 rounded-lg shadow-2xl overflow-hidden">
            <nav>
                <ul>
                    {
                        appPanelNavData.map(val => {
                            const Icon = val.icon;

                            return(
                                <li 
                                   key={val.link} 
                                   className={`${pathName === `/app-panel/${val.link}` ? "bg-[rgba(10,10,10,1)] text-white" : "bg-transparent"} px-4 py-3 flex gap-3 text-sm font-medium`}
                                   >
                                    <Icon className="text-[1.4rem] text-inherit" ariaLabel={val.text} />
                                    <Link href={`${pathName}/${val.link}`}>{val.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}