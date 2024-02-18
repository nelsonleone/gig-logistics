import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { LocalOverseasShippingIntroData } from "../../types";


export default async function getLocalOverseasShippingIntroData(){
    try{
        const data : LocalOverseasShippingIntroData = await sanityClient.fetch(
            groq`
             *[_type == 'localShippingPromptMessage'][0]{
                "introTextIllustrationImageAlt": introTextIllustrationImage.alt,
                whatYouNeedToKnow,
                introText,
                "introTextIllustrationImage": introTextIllustrationImage.asset->url

            }
            `
        )
    
        return data;
    }
    catch(err:any|unknown){
        return  null;
    }
}