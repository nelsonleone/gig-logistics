import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { LocalOverseasShippingIntroData } from "../../types";
import { cache } from "react";


export const getLocalOverseasShippingIntroData = cache(async () => {
    try{
        const data : LocalOverseasShippingIntroData = await sanityClient.fetch(
            groq`
             *[_type == 'localShippingPromptMessage'][0]{
                "introTextIllustrationImageAlt": introTextIllustrationImage.alt,
                whatYouNeedToKnow,
                introText,
                "introTextIllustrationImage": introTextIllustrationImage.asset->url

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