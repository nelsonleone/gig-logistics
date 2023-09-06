'use client';

import { useState } from 'react'


export default function TrackerArea(){

    const [alphaCode, setAlphaCode] = useState<string>("")

    return(
        <form id="#track" className="w-full mt-16 bg-black p-4 py-8 rounded-sm text-slate-50 flex flex-col justify-center align-middle lg:my-32 lg:py-20">
            <label 
               className="order-2 text-center my-3 text-[.9rem] lg:text-base" 
               htmlFor="alpha-code-input"
               >
                Track shipment / Find and ship a product using Alphacode
            </label>
            <div className="w-full mx-auto relative lg:h-14 lg:w-[40%]">
                <input 
                    type="text" 
                    id="alpha-code-input"
                    value={alphaCode} 
                    name="alphaCodeInput"
                    placeholder='Input Tracking ID / AlphaCode'
                    onChange={(e) => setAlphaCode(e.target.value)} 
                    className="placeholder:font-inter placeholder:text-base text-[#030304] w-full h-12 lg:absolute top-0 left-0 m-auto block outline-none rounded-md border border-solid focus:border-red-900 font-inter font-medium text-lg p-2 lg:px-4 lg:h-full"
                />
                <button className='red-button-bright mt-4  w-full p-2  bg-red-400 transition duration-200 ease-in-out hover:opacity-80 lg:w-28 lg:absolute lg:bottom-0 lg:right-2 lg:my-auto lg:top-0 z-20 h-10'>Search</button>
            </div>
        </form>
    )
}