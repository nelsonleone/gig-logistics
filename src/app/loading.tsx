'use client';

import { AnimatePresence, motion } from "framer-motion";

export default function Loading(){

    return(
        <div className="h-screen w-screen fixed bg-base-color1 z-[1000] top-0 left-0 py-8 flex justify-center items-center gap-1">
            <AnimatePresence>
                <motion.img 
                    src="/images/truck-loader.svg" 
                    alt="loading" 
                    className="w-[12em] aspect-auto drop-shadow-2xl"
                    animate={{ y: [0,-30,0], transition:{ repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
                    exit={{ x: "100vw", transition: { duration: 1.5, ease: "linear" }}}
                />
            </AnimatePresence>
        </div>
    )
}