export default async function getAlphaCodeDetails(alphaCode:number | ""){
    const resData = await fetch(`/api/resolveAlphaCode?alphaCode=${alphaCode}`)

    const details = resData.json()

    return details;
}