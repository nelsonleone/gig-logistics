import { AlertSeverity } from "@/enums";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { Dispatch } from "@reduxjs/toolkit";

export async function asyncWrapper(fn: () => Promise<any>,dispatch:Dispatch){
    try{
        await fn()
    }
    catch(err:any){
        dispatch(setShowAlert({
            mssg: err.message,
            severity: AlertSeverity.ERROR
        }))
    }
}