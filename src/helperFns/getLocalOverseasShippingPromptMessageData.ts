import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { LocalOverseasShippingPromptMessageData } from "../../types";

export default async function getLocalOverseasShippingPromptMessageData(){
    try{
        const data : LocalOverseasShippingPromptMessageData = await sanityClient.fetch(
            groq`
             *[_type == 'localShippingPromptMessage' && service.serviceName == $serviceName][0]
            `
        )
    
        return data;
    }
    catch(err){
        return null;
    }
}