import { cookies } from "next/headers";
import AuthUserPanel from "./AuthUserPanel";
import Notification from "./Notification";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";

async function AuthUserHeaderSection() {

    const authSessionToken = cookies().get('authSessionToken')?.value;

    const authUserData = await getPersistedAuthUser(authSessionToken)

    console.log(authUserData)

    return (
        <div className="flex gap-4 xl:gap-8 items-center xl:ms-3">
            <Notification />
            <AuthUserPanel />
        </div>
    )
}

export default AuthUserHeaderSection;