"use client"

import Link from "next/link";
import AppPanelMCContainer from "./AppPanelPagesMCContainer";
import { getAQuoteChildLinksDetails } from "@/componentsData/getAQuoteChildLinksDetails";
import { usePathname } from "next/navigation";
import GetAQuoteLinksIcon from "./assets/SvgIconsComponent/GetAQuoteLinksIcon";

export default function GetAQuoteMainComponent(){

    const pathName = usePathname()

    return(
        <AppPanelMCContainer className="pt-12 md:h-[25em] md:flex md:justify-center md:gap-5 md:items-center">
            {
                getAQuoteChildLinksDetails.map(val => (
                    <Link key={val.link} href={`${pathName}${val.link}`} className="ap_page_cp_box_link">
                        <div className="ap_page_cp_box">
                            <GetAQuoteLinksIcon />
                            <p className="font-medium">{val.heading}</p>
                            <p className="text-xs">{val.text}</p>
                        </div>
                    </Link>
                ))
            }
        </AppPanelMCContainer>
    )
}