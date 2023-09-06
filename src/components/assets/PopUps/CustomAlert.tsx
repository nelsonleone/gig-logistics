'use client'

import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import { setHideAlert } from "@/redux/slices/alertSlice";
import { Alert } from "@mui/material";
import { useEffect } from 'react'

export default function CustomAlert(){

    const { showAlert, alertMssg, severity } = useAppSelector(store => store.alert)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!showAlert)return;

        const timer = setTimeout(() => {
            dispatch(setHideAlert())
        }, 4000)

        return () => clearTimeout(timer)
    },[showAlert])

    return(
        <Alert severity={severity ? severity : undefined} variant="filled" className="font-inter font-semibold">
            {alertMssg}
        </Alert>
    )
}