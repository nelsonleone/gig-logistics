"use client"

import { inter } from "@/app/fonts";
import { useAppDispatch, useAppSelector } from "@/redux/customHooks";
import Link from "next/link";
import { AuthUser } from "../../types";
import { useEffect } from "react";
import { setAuthUserData } from "@/redux/slices/authUser";

export default function SignInLink({ authUserData }: { authUserData:AuthUser }){

    const { beenAuthenticated } = useAppSelector(store => store.authUser)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(authUserData && authUserData.uid){
            dispatch(setAuthUserData({ beenAuthenticated: true, ...authUserData }))
        }
    },[authUserData.uid])

    return(
        !beenAuthenticated && !authUserData ?
        <Link
            href="/auth/sign_in"
            className={`${inter.className} flex justify-center items-center w-28 red-button-bright font-inter transition-opacity font-medium hover:shadow-inner hover:opacity-90 focus:border focus:border-red-600 focus:text-red-600 focus:bg-transparent h-[3.2em] text-sm text-white py-2 px-4 hover:bg-red-700`}
            >
            Sign In
        </Link>
        :
        null
    )
}