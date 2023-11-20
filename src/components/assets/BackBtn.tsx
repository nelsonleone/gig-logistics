"use client";

import { useRouter } from "next/navigation"
import { BsArrowLeft } from "react-icons/bs";

interface IProps {
    className?: string
}

export default function BackBtn({ className }:IProps){

    const router = useRouter()

    return(
        <button onClick={() => router.back()} aria-label="back" className={`mb-12 flex justify-between items-center gap-1 lg:absolute top-12 left-7 hover:drop-shadow-md hover:scale-105 transition duration-300 ease-in ${className}`}>
            <BsArrowLeft aria-hidden="true" className="text-2xl" />
            <span className="font-medium">Back</span>
        </button>
    )
}