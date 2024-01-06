"use server"

export const getPersistedAuthUser = async(authSessionToken:string | undefined) => {

    const res = await fetch('/api/persist',{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`,
        }
    })

    const authUserData = await res.json()

    return authUserData;
}