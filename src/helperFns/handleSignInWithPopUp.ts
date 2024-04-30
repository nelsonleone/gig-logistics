import { signInWithPopup } from "firebase/auth"
import { asyncWrapper } from "./asyncWrapper"
import { provider, auth } from "@/lib/firebase/firebase-client-config"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { Dispatch } from "@reduxjs/toolkit"
import { AlertSeverity } from "@/enums"
import customFirebaseError from "./CustomFirebaseAuthError"
import { setShowRingLoader } from "@/redux/slices/ringLoaderSlice"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { setAuthUserData } from "@/redux/slices/authUser"

export async function handleSignInWithPopUp(returnTo: string | string[] | undefined, dispatch: Dispatch,router:AppRouterInstance) {
    await asyncWrapper(async () => {
      try {
        dispatch(setShowRingLoader(true))
  
        const userCredential = await signInWithPopup(auth, provider)
        const idToken = await userCredential.user.getIdToken()
  
        if (userCredential && userCredential.user && idToken) {
          const { email, displayName, phoneNumber, photoURL } = userCredential.user;
  
          const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify({
              firstName: displayName?.split(' ')[0],
              lastName: displayName?.split(' ')[1],
              phoneNumber,
              picture: photoURL,
              email,
            }),
          })

          const authUserData = await res.json()

          dispatch(setAuthUserData({
            ...authUserData,
            beenAuthenticated: true
          }))
  
          dispatch(
            setShowAlert({
              mssg: 'Successfully Signed In',
              severity: AlertSeverity.SUCCESS,
            })
          )

          if(returnTo){
            router.push(returnTo as string)
          }
          else{
            router.push("/")
          }

        } else {
          throw new Error('User not found in userCredential')
        }
      } catch (error: any | unknown) {
        dispatch(
          setShowAlert({
            mssg: customFirebaseError(error.code) || 'Error Occurred During Login',
            severity: AlertSeverity.ERROR,
          })
        )
      } finally {
        dispatch(setShowRingLoader(false))
      }
    }, dispatch)
}
  