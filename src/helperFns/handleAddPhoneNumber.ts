import { Dispatch as ReduxDispatch } from "@reduxjs/toolkit"
import { setUserPhoneNumber } from "./setUserPhoneNumber"
import { setShowSnackbar } from "@/redux/slices/snackbarSlice"
import { setAuthUserData } from "@/redux/slices/authUser"
import { AlertSeverity } from "@/enums"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { Dispatch, SetStateAction } from "react"

export const handleAddPhoneNumber = async(phoneNumber:string,dispatch:ReduxDispatch,uid:string, setOpen:Dispatch<SetStateAction<boolean>>,pin:string|undefined,setAddingPhoneNumber:Dispatch<SetStateAction<boolean>>) => {
    try{

        if(pin?.toString() !== phoneNumber.slice(-4)){
            throw new Error("OTP is incorrect")
            return;
        }
        const updatedAuthUserData = await setUserPhoneNumber(uid,phoneNumber)
        
        setAddingPhoneNumber(false)
        
        dispatch(setAuthUserData({...updatedAuthUserData}))
        
        dispatch(setShowSnackbar({
            mssg: "Phone Number Added Successfully",
            severity: AlertSeverity.SUCCESS
        }))
        setOpen(false)
        
    }
    catch(err:any|unknown){
        dispatch(setShowAlert({
            mssg: err.message || "Error Updating Phone Number",
            severity: AlertSeverity.ERROR
        }))
    }
}