import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { ChinaOverseasShippingData, LocalOverseasShippingIntroData } from "../../types";
import { cache } from "react";


export const getChinaOverseasShippingData = cache(async () => {
    try{
        const data : ChinaOverseasShippingData = await sanityClient.fetch(
            groq`
             *[_type == 'chinaOverseasShipping'][0]{
                "repImageAlt": repImage.alt,
                fullGuidelineDetails,
                introTextContent,
                "repImage": repImage.asset->url

            }
            `,
            {},
            {
                next: {
                    revalidate: 3600
                }
            }
        )
    
        return data;
    }
    catch(err:any|unknown){
        return  null;
    }
})