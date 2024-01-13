import { signInWithPopup } from "firebase/auth"
import { asyncWrapper } from "./asyncWrapper"
import { provider, auth } from "@/lib/firebase/firebase-client-config"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { Dispatch } from "@reduxjs/toolkit"
import { AlertSeverity } from "@/enums"
import customFirebaseError from "./CustomFirebaseAuthError"
import { setShowRingLoader } from "@/redux/slices/ringLoaderSlice"

export async function handleSignInWithPopUp(returnTo:string | string[] |undefined,dispatch:Dispatch){
    await asyncWrapper(
        async() => {
            try{
                dispatch(setShowRingLoader(true))
                const { user: { getIdToken,email, displayName, phoneNumber, photoURL}} = await signInWithPopup(auth,provider)
                await fetch('/api/signup',{
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${await getIdToken()}`,
                    },
                    body: JSON.stringify({
                        firstName: displayName?.split(" ")[0],
                        lastName: displayName?.split(" ")[1],
                        phoneNumber,
                        picture: photoURL,
                        email,
                        returnTo
                    })
                })
    
                dispatch(setShowAlert({
                    mssg: "Successfully Signed In",
                    severity: AlertSeverity.SUCCESS
                }))
            }
            catch(error:any|unknown){
                console.log(error)
                dispatch(setShowAlert({
                    mssg: customFirebaseError(error.code) || "Error Occurred During Login",
                    severity: AlertSeverity.ERROR
                }))
            }

            finally{
                dispatch(setShowRingLoader(false))
            }
        },
        dispatch
    )
}