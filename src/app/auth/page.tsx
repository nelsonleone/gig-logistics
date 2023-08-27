import { useEffect } from "react";
import { redirect, usePathname } from 'next/navigation'
import { RedirectType } from "next/dist/client/components/redirect";

export default function Page(){

    const pathName = usePathname()

    useEffect(() => {
        if(pathName === "/auth"){
            redirect('/auth/signin',RedirectType.replace)
        }
    })

    return null;
}