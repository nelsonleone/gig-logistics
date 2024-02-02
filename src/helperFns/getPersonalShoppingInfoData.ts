import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { PersonalShoppingInfoSanityData } from "../../types";

export default async function getPersonalShoppingInfoData(){
    try{
        const personalShoppingInfoSanityData : PersonalShoppingInfoSanityData[] = await sanityClient.fetch(
            groq`*[_type == 'personalShoppingInfo']{
                "introBgImage": introBgImage.alt,
                "introBgImage": introBgImage.asset->url,
                "heading": heading;
                "secondHeading": secondHeading;
                introBgImage
                howItWorksSection
            }`
        )

        console.log(personalShoppingInfoSanityData)

        return personalShoppingInfoSanityData[0]
    }

    catch(err:any|unknown){
        console.log(err.message || "Error Occured Fetching Featured Event Data")
        return null;
    }
}