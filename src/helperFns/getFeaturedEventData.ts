import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { cache } from "react";
import { FeaturedEventData } from "../../types";


async function getFeaturedEventData(){
    
    try{
        const featuredData : FeaturedEventData = await sanityClient.fetch(
            groq`*[_type == 'featured'][0]{
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

        return featuredData;
    }

    catch(err:any|unknown){
        return null;
    }
}

export default cache(getFeaturedEventData)