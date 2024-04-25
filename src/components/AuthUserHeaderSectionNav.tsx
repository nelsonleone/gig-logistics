"use client"

import { useAppSelector } from "@/redux/customHooks";
import { AuthUser } from "../../types";
import AuthUserPanel from "./AuthUserPanel";
import Notification from "./Notification";
import SignInLink from "./SignInLink";
import { useEffect } from "react";

export default function AuthUserHeaderSectionNav({ authUserData }: { authUserData: AuthUser | undefined }){

    const { beenAuthenticated } = useAppSelector(store => store.authUser)

    useEffect(() => {
        // Remove LocalStorage Var, for rendering of Transaction pin prompt modal

        const unload = ()  => {
            localStorage.removeItem("createTransactionPinModalClientRenderedBefore")
        }

        window.addEventListener('beforeunload', unload)

        return () => {
            localStorage.removeItem("createTransactionPinModalClientRenderedBefore")
            window.removeEventListener('beforeunload',unload)
        }
    },[])
    
    return(
        <nav>
            {
                authUserData || beenAuthenticated ?
                <div className="flex gap-4 xl:gap-8 items-center xl:ms-3">
                    <Notification />
                    <AuthUserPanel authUserData={authUserData} />
                </div>
                :
                <SignInLink authUserData={authUserData} />
            }
        </nav>
    )
}