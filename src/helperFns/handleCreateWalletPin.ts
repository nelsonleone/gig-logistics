import { Dispatch, SetStateAction } from "react";
import { asyncWrapper } from "./asyncWrapper";
import { Dispatch as ReduxDispatch } from '@reduxjs/toolkit'
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity, AuthUserWalletPinStatus } from "@/enums";
import { setWalletPinStatus } from "@/redux/slices/authUser";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleCreatePin = async(router:AppRouterInstance, uid: string, phoneNumber:string, dispatch:ReduxDispatch, pin:string | undefined, setCreatingPin:Dispatch<SetStateAction<boolean>>,setError:Dispatch<SetStateAction<string>>) => {
    await asyncWrapper(
        async() => {
            try{
                if(pin?.trim().length !== 4){
                    setError('Please enter a valid 4-Digits Pin')
                    return;
                }
                setCreatingPin(true)

                if(pin !== phoneNumber.slice(-4)){
                    throw new Error("OTP is incorrect")
                    return;
                }

                const message = "Transaction pin created successfully"

                // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/wallet/create_pin?uid=${uid}`,{
                //     method: "POST",
                //     body: JSON.stringify({ pin })
                // })

                // if(!res.ok){
                //     const { error } = await res.json()
                //     throw new Error(error)
                //     return;
                // }
                
                // const { message } = await res.json()
                // if(!message){
                //     throw new Error("An Unexpected Error Occurred")
                // }
    
                dispatch(setShowAlert({
                    mssg: message,
                    severity: AlertSeverity.SUCCESS
                }))

                dispatch(setWalletPinStatus(AuthUserWalletPinStatus.HasPin))
                router.back()
            }

            catch(err:any|unknown){
                dispatch(setShowAlert({
                    mssg: err.message || "An Error Occurred Changing Pin",
                    severity: AlertSeverity.ERROR
                }))
            }

            finally{
                setCreatingPin(false)
            }
        },
        dispatch
    )
}