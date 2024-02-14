"use client"

import { roboto_slab } from "@/app/fonts"
import { AuthUserWalletPinStatus } from "@/enums"
import { useAppSelector } from "@/redux/customHooks"
import { IconButton, Modal } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"

export default function CreateTransactionPinModalClient({ authUserPinStatus }: { authUserPinStatus:AuthUserWalletPinStatus }){

    const pathName = usePathname()
    const router = useRouter()
    const { beenAuthenticated, walletPinStatus } = useAppSelector(store => store.authUser)
    const [open,setOpen] = useState(
        walletPinStatus !== AuthUserWalletPinStatus.HasPin &&
        authUserPinStatus === AuthUserWalletPinStatus.NoPin && 
        beenAuthenticated && 
        pathName !== "/user/wallet_pin" &&
        pathName !== "/user/wallet_pin/change"
    )

    useEffect(() => {
        setOpen(
            walletPinStatus !== AuthUserWalletPinStatus.HasPin &&
            authUserPinStatus === AuthUserWalletPinStatus.NoPin && 
            beenAuthenticated && 
            pathName !== "/user/wallet_pin" &&
            pathName !== "/user/wallet_pin/change"
        )
    },[beenAuthenticated,authUserPinStatus,pathName,walletPinStatus])


    return(
        <Modal open={open} id="create_pin_modal">
            <div className="h-[29.3em] outline-none border-none overflow-hidden bg-white shadow-lg rounded-lg p-4 pt-7 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em] md:px-10 flex justify-center flex-col items-center">
                <IconButton aria-controls="create_pin_modal" onClick={() => setOpen(false)} aria-expanded={open ? "true" : "false"} className="absolute top-4 right-4 text-black">
                    <IoMdClose />
                </IconButton>
                <img src="/images/wallet-pin.png" className="w-36 aspect-square block mx-auto rounded-full" alt="" aria-hidden="true" />
                <h3 className={`${roboto_slab.className} mb-8 t-4 font-bold text-2xl md:text-3xl text-[#374151]`}>Create A Wallet Pin</h3>
                <p className="text-[#374151] text-sm">
                    Exciting News! We are thrilled to announce the introduction of a Wallet PIN feature for enhanced security on your GIGGo wallet. Your transactions on the app will now be safeguarded by your personalized PIN. Take control of your security and set up your Wallet PIN today to unlock this advanced feature!
                </p>

                <button onClick={() => router.push('/user/wallet_pin')} className="w-full bg-black font-medium text-center p-4 rounded my-4 block text-white mx-auto hover:opacity-90 focus:opacity-90 transition duration-200 ease-in-out">Set Up Wallet Pin</button>
            </div> 
        </Modal>
    )
}