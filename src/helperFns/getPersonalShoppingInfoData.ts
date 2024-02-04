import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { PersonalShoppingInfoSanityData } from "../../types";

export default async function getPersonalShoppingInfoData(){

    try{
        const personalShoppingInfoSanityData : PersonalShoppingInfoSanityData[] = await sanityClient.fetch(
            groq`*[_type == 'personalShoppingInfo']{
                "introBgImage": introBgImage.asset->url,
                heading,
                secondHeading,
                howItWorksSection
            }`
        )


        return personalShoppingInfoSanityData[0]
    }

    catch(err:any|unknown){
        throw new Error(err.message || "Error Occured Fetching Featured Event Data")
    }
}