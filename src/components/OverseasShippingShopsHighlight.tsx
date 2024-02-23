"use client"

import { overseasShippingCompaniesBoxData } from "@/componentsData/overseasShippingCompaniesBoxData";
import OverseasShippingCompaniesBox from "./assets/OverseasShippingCompaniesBox";
import { useState } from "react";

export default function OverseasShippingShopsHighlight(){

    const [storesToShow, setStoresToShow] = useState(0)
    const [showViewMoreBtn,setShowViewMoreBtn] = useState(true)

    const handleViewMoreClick = () => {
        const endIndex = Math.min(storesToShow + 8, overseasShippingCompaniesBoxData.filter(val => val.nameText).length)
        setStoresToShow(endIndex)
        
        if (endIndex >= overseasShippingCompaniesBoxData.filter(val => val.nameText).length) {
            setShowViewMoreBtn(false)
        }
    }

    return(
        <div className="mt-14">
            <p>
               Shop from your preferred store or any of the stores listed below, input the GIGL address displayed above during checkout and we will help deliver item(s) securely.
            </p>

            <div className="mt-8">
                <div className="md:grid grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        overseasShippingCompaniesBoxData.filter(val => val.imgSrc).map((val,index) => (
                            <OverseasShippingCompaniesBox key={index} {...val} />
                        ))
                    }
                </div>

                <div className="md:grid grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        storesToShow !== 0 &&
                        overseasShippingCompaniesBoxData.filter(val => val.nameText).slice(0,storesToShow).map((val,index) => (
                            <OverseasShippingCompaniesBox key={index} {...val} />
                        ))
                    }
                </div>
                {
                    showViewMoreBtn &&
                    <button onClick={handleViewMoreClick} className="text-cyan-700 underline text-center mx-auto block my-3">View More</button>
                }
            </div>
        </div>
    )
}