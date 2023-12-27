import { inter } from '@/app/fonts';
import React from 'react'
import LoadingEllipse from '../Loaders/LoadingEllipse';

interface IGetQuoteBtnProps {
    text: string,
    styles?: string,
    isLoading: boolean
}

function GetQuoteBtn({ text, styles, isLoading }:IGetQuoteBtnProps) {
  return (
    <button 
       disabled={isLoading}
       className={`${inter.className} max-h-[3em] h-12 my-12 bg-black text-white font-medium text-center p-3 rounded-md w-full relative block cursor-pointer lg:w-3/4 lg:mx-auto hover:drop-shadow-lg hover:opacity-90 transition-all duration-200 ease-in-out ${styles}`}>
        {
            !isLoading ? text || "Proceed"
            :
            <LoadingEllipse styles='' />
        }
    </button>
  )
}

export default GetQuoteBtn;