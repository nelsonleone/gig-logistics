"use client"

import { useState } from 'react'
import { BiSolidPaperPlane } from "react-icons/bi";
import { GiNigeria } from "react-icons/gi";
import { FaPlaneDeparture } from "react-icons/fa";

interface IProps {
    index: number,
    val: {
        title: string,
        text: string
    }
}

function OverseasShippingOptionsDiv({ val, index }:IProps) {

    const [showLocalOverseasShippingPromptMessage,setShowLocalOverseasShippingPromptMessage] = useState(false)
    const Icon = index === 0 ? GiNigeria : index === 1 ? FaPlaneDeparture : BiSolidPaperPlane;


    return (
        <div onClick={() => setShowLocalOverseasShippingPromptMessage(true)} tabIndex={0} key={val.title} className="cursor-pointer border border-gray-100 flex items-center mb-6 gap-4 bg-gray-50 px-4 pe-2 py-8 rounded-sm md:justify-start md:gap-8 md:p-8 hover:border hover:border-red-400 transition duration-200 ease-linear">
            <Icon className="text-red-400 text-4xl md:text-5xl" aria-hidden="true" />
            <div className="w-3/4">
                <h3 className="font-medium my-2 md:text-xl">{val.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{val.text}</p>
            </div>
        </div>
    )
}

export default OverseasShippingOptionsDiv;