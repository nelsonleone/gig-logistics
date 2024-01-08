import { cookies } from "next/headers";
import AuthUserPanel from "./AuthUserPanel";
import Notification from "./Notification";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";
import SignInLink from "./SignInLink";

async function AuthUserHeaderSection() {

    const authSessionToken = cookies().get('authSessionToken')?.value;

    const authUserData = await getPersistedAuthUser(authSessionToken)

    console.log(authUserData)
    
    return (
        <nav>
            {
                authUserData ?
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

export default AuthUserHeaderSection;