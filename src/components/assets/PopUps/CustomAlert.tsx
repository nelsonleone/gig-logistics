'use client'

import { inter } from "@/app/fonts";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setHideAlert } from "@/redux/slices/alertSlice";
import { Alert } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from 'react'

export default function CustomAlert(){

    const { showAlert, alertMssg, severity } = useAppSelector(store => store.alert)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setHideAlert())
        }, 3500)

        return () => clearTimeout(timer)
    },[showAlert])

    return(
        <AnimatePresence>
            {
                showAlert &&
                <motion.div exit={{ y: -300, transition: { duration: .5, ease: "linear"} }} className="relative z-[999]">
                    <Alert severity={severity || undefined} variant="filled" className={`${inter.className} top-8 font-medium z-[100000] fixed left-4 lg:left-12`}>
                        {alertMssg}
                    </Alert>
                </motion.div>
            }
        </AnimatePresence>
    )
}