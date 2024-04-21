"use client"

import { roboto_slab } from "@/app/fonts"
import { IconButton, Tooltip } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { MdClose } from "react-icons/md"
import { GoHomeFill } from "react-icons/go";
import { TbWindowMinimize } from "react-icons/tb"
import { PiMicrophoneFill } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs"

export default function SupportChat(){

    const [showChat,setShowChat] = useState(false)
    const [minimizeChat,setMinimizeChat] = useState(false)
    const [message,setMessage] = useState("")

    const handleClick = () => {
        if(minimizeChat){
            setMinimizeChat(false)
        }
        else{
            setShowChat(prev => prev = !prev)
        }
    }

    return(
        <>
            <div className="fixed bottom-3 md:bottom-5 right-3 md:right-12">
                <IconButton aria-label={showChat ? "close chat":"openChat"} onClick={handleClick} className="w-32 p-0 hover:scale-105 transition ease-in-out">
                    <Image src="/icons/chat.png" alt="chat icon" width={120} height={120} className="w-full h-auto" loading="eager" />
                </IconButton>
            </div>
            <AnimatePresence>
                {
                    showChat &&
                    <motion.div initial={{opacity:0, y: 200}} animate={{ y: 0, opacity: 1 }} exit={{y: 500, transition: { duration: .8, ease: "linear"} }} className={`${minimizeChat ? "invisible pointer-events-none -z-50" : "z-auto visible pointer-events-auto"} bg-base-color1 fixed z-[1000000000] overflow-y-auto shadow-gray-200 rounded-lg h-screen w-full md:w-[30em] top-0 right-0 md:top-4 md:right-4 md:rounded-2xl md:h-[80vh] md:my-auto`}>
                        <div className="bg-red-700 flex justify-between gap-8 relative p-5">
                            <h2 className={`${roboto_slab.className} text-2xl text-base-color1 font-bold uppercase text-center`}>GIG LOGISTICS</h2>
                            <div className="flex gap-2 text-base-color1">
                                <Tooltip title="Close Chat" style={{fontFamily: 'Inter, sans-serif'}}>
                                    <IconButton aria-label="minimize" className="text-base-color1" onClick={() => setMinimizeChat(true)}>
                                        <TbWindowMinimize />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Minimize Chat">
                                    <IconButton aria-label="close" className="text-base-color1" onClick={() => setShowChat(false)}>
                                        <MdClose />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>

                        <div className="bg-slate-100 shadow-lg border border-t-gray-100 py-3 px-2 bottom-0 absolute w-full left-0 right-0 mx-auto flex">
                            <IconButton aria-label="home" className="text-red-700">
                               <GoHomeFill />
                            </IconButton>
                            <input type="text" name="question" placeholder="Type your question here" className="rounded border border-l-gray-400 text-sm border-none outline-none w-3/4" id="supportChat-message=input" value={message} onChange={(e) => setMessage(e.target?.value)} />
                            <IconButton aria-label="record voice">
                              <PiMicrophoneFill />
                            </IconButton>
                            <IconButton aria-label="send message" disabled={true} className="text-base-color1 bg-accent-color p-2 disabled:opacity-75 disabled:cursor-not-allowed">
                               <BsSendFill />
                            </IconButton>
                        </div>

                        <div className="flex gap-4 justify-center my-20 items-center w-full">
                            <Image src="/icons/bot.svg" alt="" aria-hidden="true" width={80} height={80} loading="eager" />
                            <p role="alert" className="text-accent-color3 font-medium text-center">Ruby Is Offline At The Moment</p>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}