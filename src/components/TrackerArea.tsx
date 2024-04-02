'use client';

import { FormEvent, useState } from 'react'


export default function TrackerArea(){

    const [alphaCode, setAlphaCode] = useState<string>("")
    const [errorInput,setErrorInput] = useState<null|string>(null)

    const handleAlphaCodeSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!alphaCode){
            setErrorInput("Please enter a valid product or shipment AlphaCode")
            return;
        }
    }

    return(
        <form id="#track" onSubmit={handleAlphaCodeSubmit} className="w-full mt-16 bg-base-color2 p-4 py-8 rounded-md text-slate-50 flex flex-col justify-center align-middle lg:my-32 lg:py-20">
            {
                errorInput &&
                <p className='text-center my-3 text-red-700 text-sm' role="alert">{errorInput}</p>
            }
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
                    className="placeholder:font-inter placeholder:text-base text-[#030304] w-full md:w-1/2 lg:w-full h-12 lg:absolute top-0 left-0 m-auto block outline-none rounded-md border border-solid focus:border-red-900 font-inter font-medium text-lg p-2 lg:px-4 lg:h-full"
                />
                <button className='red-button-bright mt-4 block w-full md:w-1/2 md:mx-auto p-2  bg-[#d5343a] transition duration-200 ease-in-out hover:opacity-80 lg:w-28 lg:absolute lg:bottom-0 lg:right-2 lg:my-auto lg:top-0 z-20 h-10'>Search</button>
            </div>
        </form>
    )
}