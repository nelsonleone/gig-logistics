"use client"

import { useState } from 'react'
import { IconType } from 'react-icons/lib'

interface IProps {
    Icon: IconType,
    val: {
        title: string,
        text: string
    }
}

function OverseasShippingOptionsDiv({ val, Icon }:IProps) {

    const [showLocalOverseasShippingPromptMessage,setShowLocalOverseasShippingPromptMessage] = useState(false)

    return (
        <div onClick={() => setShowLocalOverseasShippingPromptMessage(true)} tabIndex={0} key={val.title} className="cursor-pointer border border-gray-100 flex items-center mb-6 gap-4 justify-between bg-gray-50 px-4 py-8 rounded-sm md:justify-start md:gap-8 md:p-8 hover:border hover:border-red-600 transition duration-200 ease-linear">
            <Icon className="text-red-400 text-3xl md:text-5xl" aria-hidden="true" />
            <div className="w-3/4">
                <h3 className="font-medium my-2 md:text-xl">{val.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{val.text}</p>
            </div>
        </div>
    )
}

export default OverseasShippingOptionsDiv;