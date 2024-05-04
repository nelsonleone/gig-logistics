import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { cache } from "react";

type FeaturedEventData = {
    bannerIcon: string,
    eventPageLink: string,
    bannerIconAltText: string,
    textContent: string
}[]

async function getFeaturedEventData(){
    
    try{
        const featuredData : FeaturedEventData = await sanityClient.fetch(
            groq`*[_type == 'featured']{
                "bannerIconAltText": bannerIcon.alt,
                textContent,
                "eventPageLink": eventPageLink.current,
                "bannerIcon": bannerIcon.asset->url

            }`,
            {},
            {
                next: {
                    revalidate: 3600
                }
            }
            
        )

        return featuredData[0];
    }

    catch(err:any|unknown){
        return null;
    }
}

export default cache(getFeaturedEventData)