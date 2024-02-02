"use client"

import { setCancelDropOff } from "@/helperFns/setCancelDropOff"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { MouseEvent, useState } from "react"
import LoadingEllipse from "./assets/Loaders/LoadingEllipse"
import { useRouter } from "next/navigation"

export default async function CancelDropOffBtn({ dropOffID, text }:{ dropOffID:string, text:string }){

    const dispatch = useAppDispatch()
    const [isCancelling,setIsCancelling] = useState(false)
    const { uid } = useAppSelector(store => store.authUser)
    const router = useRouter()
    const DROP_OFF_MANAGE_PAGE = "/app-panel/dropoff/manage"

    const handleClick = async (e:MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        await setCancelDropOff(uid,dropOffID,dispatch,setIsCancelling)
        router.push(DROP_OFF_MANAGE_PAGE)
    }

    return(
        <button onClick={handleClick} className="relative bg-red-600 text-white rounded-md px-3 w-40 h-12 text-center block mx-auto my-6 hover:brightness-90 focus:bg-transparent focus:border focus:border-red-600 focus:text-red-600 transition duration-300 ease-in-out">
            {
                isCancelling ?
                <LoadingEllipse />
                :
                `${text || "Cancel Dropoff"}`

            }
        </button>
    )
}