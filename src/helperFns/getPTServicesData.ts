import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { OverseasShippingTradeOptDataType, PT_SanityServiceData } from "../../types";
import { PT_ServiceName } from "@/enums";

export default async function getPTservicesData(serviceName:PT_ServiceName){
    try{
        const data : PT_SanityServiceData = await sanityClient.fetch(
            groq`
             *[_type == 'portfolioServices' && service.serviceName == $serviceName][0]
            `,{
                serviceName
            }
        )
    
        return data;
    }

    catch(err){
        return null;
    }
}


export async function getOverseasShippingTradeOptData(){
    try{
        const data : OverseasShippingTradeOptDataType[] = await sanityClient.fetch(
            groq`
             *[_type == 'overseasShoppingTradeOpt']
            `
        )
    
        return data;
    }

    catch(err){
        return null;
    }
}
