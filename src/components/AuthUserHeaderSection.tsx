import { cookies } from "next/headers";
import AuthUserPanel from "./AuthUserPanel";
import Notification from "./Notification";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";
import Link from "next/link";
import { inter } from "@/app/fonts";

async function AuthUserHeaderSection() {

    const authSessionToken = cookies().get('authSessionToken')?.value;

    const authUserData = await getPersistedAuthUser(authSessionToken)

    return (
        <nav>
            {
                authUserData ?
                <div className="flex gap-4 xl:gap-8 items-center xl:ms-3">
                    <Notification />
                    <AuthUserPanel />
                </div>
                :
                <Link
                    href="/auth/sign_in"
                    className={`${inter.className} flex justify-center items-center w-28 red-button-bright font-inter transition-opacity font-medium hover:shadow-inner hover:opacity-90 focus:border focus:border-red-600 focus:text-red-600 focus:bg-transparent h-[3.2em] text-sm text-white py-2 px-4 hover:bg-red-700`}
                    >
                    Sign In
                </Link>
            }
        </nav>
    )
}

export default AuthUserHeaderSection;