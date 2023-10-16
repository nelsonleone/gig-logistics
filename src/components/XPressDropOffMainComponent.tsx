"use client"

import React from 'react'
import AppPanelMCContainer from './AppPanelPagesMCContainer';
import { xpressDropOffLinkData } from '@/componentsData/xpressDropOffDataLinkData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiBoxUnpacking } from 'react-icons/gi';

function XPressDropOffMainComponent() {

    const pathName = usePathname()

    return (
        <AppPanelMCContainer className="pt-12 md:h-[25em]">
            <h2 className='text-[#374151] text-lg font-semibold text-center capitalize'>Select an option below, follow the prompt then proceed to Drop-Off shipments</h2>
            <div className="mt-8 md:mt-12 md:flex md:justify-center md:gap-5 md:items-center">
                {
                    xpressDropOffLinkData.map(val => (
                        <Link key={val.link} href={`${pathName}${val.link}`} className="ap_page_cp_box_link">
                            <div className="ap_page_cp_box">
                                <div className="text-gray-100 rounded-full inline-flex justify-center items-center bg-gray-500 p-3 mb-3">
                                    <GiBoxUnpacking aria-hidden="true" className="text-[1.4rem]" />
                                </div>
                                <p className="font-medium">{val.title}</p>
                                <p className="text-xs">{val.text}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </AppPanelMCContainer>
    )
}

export default XPressDropOffMainComponent;