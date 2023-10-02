"use client";

import { useRouter } from "next/navigation"
import { BsArrowLeft } from "react-icons/bs";

export default function BackBtn(){

    const router = useRouter()

    return(
        <button onClick={() => router.back()} aria-label="back" className="mb-12 flex justify-between items-center gap-1 lg:absolute top-12 left-7 hover:drop-shadow-md hover:scale-105 transition duration-300 ease-in">
            <BsArrowLeft aria-hidden="true" className="text-2xl" />
            <span>Back</span>
        </button>
    )
}