import { cookies } from "next/headers";
import { getPersistedAuthUser } from "@/helperFns/getPersistedAuthUser";
import AuthUserHeaderSectionNav from "./AuthUserHeaderSectionNav";

async function AuthUserHeaderSection() {

    const authSessionToken = cookies().get('authSessionToken')?.value;

    const authUserData = await getPersistedAuthUser(authSessionToken)
    
    return (
        <AuthUserHeaderSectionNav authUserData={authUserData} />
    )
}

export default AuthUserHeaderSection;