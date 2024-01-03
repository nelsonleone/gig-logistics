import { signInWithPopup } from "firebase/auth"
import { asyncWrapper } from "./asyncWrapper"
import { provider, auth } from "@/lib/firebase/firebase-client-config"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { Dispatch } from "@reduxjs/toolkit"
import { AlertSeverity } from "@/enums"

export async function handleSignInWithPopUp(returnTo:string | string[] |undefined,dispatch:Dispatch){
    await asyncWrapper(
        async() => {
            try{
                const userCred = await signInWithPopup(auth,provider)
                await fetch('/api/login',{
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${await userCred.user.getIdToken()}`,
                    },
                    body: JSON.stringify(returnTo)
                })
    
                dispatch(setShowAlert({
                    mssg: "Successfully Signed In",
                    severity: AlertSeverity.SUCCESS
                }))
            }
            catch(error:any|unknown){
                dispatch(setShowAlert({
                    mssg: error.message || "Error Occurred During Login",
                    severity: AlertSeverity.ERROR
                }))
            }
        },
        dispatch
    )
}