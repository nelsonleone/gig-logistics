import setRevalidateDropOffs from "@/app/actions";
import { AlertSeverity } from "@/enums";
import { updatedDropOffsAfterCancel } from "@/redux/slices/authUser";
import { setShowSnackbar } from "@/redux/slices/snackbarSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { SetStateAction, Dispatch as ReactDispatch } from "react";

export async function setCancelDropOff(uid:string,dropOffID:string,dispatch:Dispatch,setIsCancelling:ReactDispatch<SetStateAction<boolean>>){
    try{
        setIsCancelling(true)
        await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/cancel_dropoff?uid=${uid}&dropOffID=${dropOffID}`,{
            method: "DELETE"
        })

        setRevalidateDropOffs()

        dispatch(updatedDropOffsAfterCancel({ dropOffID }))

        dispatch(setShowSnackbar({
            mssg: "Drop-Off Have Been Cancelled",
            severity: AlertSeverity.SUCCESS
        }))
    }
    catch(err:any|unknown){
        dispatch(setShowSnackbar({
            mssg: `Error Occurred: ${err.message || "drop-off cancellation failed"}`,
            severity: AlertSeverity.SUCCESS
        }))
    }
    finally{
        setIsCancelling(false)
    }
}