'use client';

import { officeLocationDataObj } from '@/componentsData/officeLocationData';
import { useState } from 'react';
import { OfficeLocationDataObj } from '../../../../types';
import { VscTriangleDown } from 'react-icons/vsc'
import { MdLocationOn } from 'react-icons/md';
import { roboto_slab } from '@/app/fonts';

export default function OfficeLocationTabs(){

    const [activeTab,setActiveTab] = useState<number>(0)
    const [activeDropDown,setActiveDropdown] = useState<null|string>(null)
    const tabListData = Object.keys(officeLocationDataObj)


    const handleDropdownAddressDisplay = (val:string) => {
        setActiveDropdown(prevState => {
            return prevState === val ? null : val
        })
    }

    return(
        <div>
            <div role="tablist" className='mt-8 grid gap-4 r border-b drop-shadow-2xl lg:border-gray-300 pb-2 lg:mt-16 grid-cols-4 md:grid-cols-[repeat(5,19%)]'>
                {
                   tabListData.map((val,index) => {
                      const { countryName } =  Object.values(officeLocationDataObj)[index]
                      return(
                        <button 
                           className={`${roboto_slab.className} flex justify-between items-center font-medium  place-self-center  last-of-type:place-self-start md:last-of-type:place-self-center md:first:place-self-center  relative text-lg lg:text-xl ${activeTab === index ? "after:content-[''] after:w-full after:h-[3px] after:absolute after:block after:bg-primary2 after:-bottom-1 after:left-0 after:right-0 after:m-auto after:rounded-sm lg:after:-bottom-[.65rem]" : ''}`}
                           role="tab" 
                           key={`${index}-${val}`}
                           aria-selected={index === activeTab ? "true" : "false"} 
                           aria-controls={`panel-${activeTab}`}
                           onClick={() => setActiveTab(index)}
                           id={`tab-${activeTab}`}
                          >
                            {countryName === 'United States' ? "US" : countryName === "United Kingdom" ? "Uk" : countryName }
                            {
                                activeTab === index &&
                                <MdLocationOn className='text-slate-800' aria-hidden="true" />
                            }
                        </button>
                      )
                   })
                }
            </div>

            <div className="bg-gray-100 lg:w-1/2 lg:mx-auto py-3 my-3 drop-shadow-md text-[#111827]">
                {
                    Object.values(officeLocationDataObj)[activeTab].locations.map((val,index) => (
                        <div key={`${index}-${val}`} className='px-4 my-12' role="tabpanel" id={`panel-${activeTab}`}  aria-labelledby={`tab-${activeTab}`}>
                            <h5 className='cursor-pointer font-medium text-base flex items-center  w-full justify-between border-b border-gray-300 pb-3' onClick={() => handleDropdownAddressDisplay(val.state_capital)}>{val.state_capital} 
                            <VscTriangleDown aria-hidden="true" className={`transition-all duration-200 ease-linear ${activeDropDown === val.state_capital ? "rotate-180" : ""}`} />
                            </h5>
                            {
                                val.state_capital === activeDropDown ? val.address.map((addressVal,index) => (
                                    <div key={index} className='ps-4 my-5'>
                                        <h6 className='text-red-600 font-semibold my-2'>{addressVal.city}</h6>
                                        <p>{addressVal.addressLine}</p>
                                    </div>
                                ))
                                :
                                null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}