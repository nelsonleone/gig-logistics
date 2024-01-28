import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";

type FeaturedEventData = {
    bannerIcon: string,
    eventPageLink: string,
    bannerIconAltText: string,
    textContent: string
}[]

export default async function getFeaturedEventData(){
    
    try{
        const featuredData : FeaturedEventData = await sanityClient.fetch(
            groq`*[_type == 'featured']{
                "bannerIconAltText": bannerIcon.alt,
                textContent,
                "eventPageLink": eventPageLink.current,
                "bannerIcon": bannerIcon.asset->url

            }`
        )

        return featuredData[0];
    }

    catch(err:any|unknown){
        console.log(err.message || "Error Occured Fetching Featured Event Data")
    }
}