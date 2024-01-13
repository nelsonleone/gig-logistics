"use client"

import { useAppSelector } from "@/redux/customHooks";
import { Modal } from "@mui/material";
import Image from "next/image";

export default function RingLoader(){

    const { showRingLoader } = useAppSelector(store => store.ringLoader)

    return(
        <Modal open={showRingLoader}>
           <div className="bg-[#dedede] shadow-md border-none outline-none absolute w-[18em] rounded-lg flex justify-center items-center aspect-square top-0 bottom-0 left-0 right-0 m-auto">
                <Image className="" src="/icons/loading-ring.svg" alt="loading" aria-label="loading" loading="eager" priority width={200} height={200} />
            </div>
        </Modal>
    )
}