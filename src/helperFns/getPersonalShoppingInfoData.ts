import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { PersonalShoppingInfoSanityData } from "../../types";

export default async function getPersonalShoppingInfoData(){

    try{
        const personalShoppingInfoSanityData : PersonalShoppingInfoSanityData[] = await sanityClient.fetch(
            groq`*[_type == 'personalShoppingInfo']`
        )

        return personalShoppingInfoSanityData[0]
    }

    catch(err:any|unknown){
        throw new Error("An Error Occured Fetching Page Data")
    }
}