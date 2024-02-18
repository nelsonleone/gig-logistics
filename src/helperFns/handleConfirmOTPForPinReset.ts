import { Dispatch } from "@reduxjs/toolkit";
import { Dispatch as ReactDispatch } from "react";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity } from "@/enums";
import { SetStateAction } from "react";

export async function handleConfirmOTPForPinReset(setVerified:ReactDispatch<SetStateAction<boolean>>,phoneNumber:string,otp:string,dispatch:Dispatch){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/reset`,{
            method: "GET",
            body: JSON.stringify({ phoneNumber, otp })
        })

        if(!res.ok){
            const { error } = await res.json()
            throw new Error(error)
        }

        setVerified(true)
    }

    catch(err:any|unknown){
        dispatch(setShowAlert({
            mssg: err.message || 'Error Verifying OTP',
            severity: AlertSeverity.ERROR
        }))
    }
}