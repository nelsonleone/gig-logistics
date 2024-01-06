"use server"

export const getPersistedAuthUser = async(authSessionToken:string | undefined) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/persist`,{
            method: "GET",
            headers: {
                Cookie: `authSessionToken=${authSessionToken}`,
            }
        })
    
        const authUserData = await res.json()
    
        return authUserData;
    }
    catch(err:any|unknown){
        console.log(err.message,err.code)
    }
}