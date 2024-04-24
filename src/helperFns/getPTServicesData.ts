import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { OverseasShippingTradeOptDataType, PT_SanityServiceData } from "../../types";
import { PT_ServiceName } from "@/enums";
import { cache } from "react";

export const getPTservicesData = cache(async (serviceName:PT_ServiceName) => {
    try{
        const data: PT_SanityServiceData = await sanityClient.fetch(
            groq`
                *[_type == 'portfolioServices' && service.serviceName == $serviceName][0]{
                    "service": {
                        "repImage": service.repImage.asset->url,
                        "textContent": service.textContent,
                        "repImageAlt": service.repImage.alt
                    }
                }`,
            {
                serviceName
            },
            {
                next: {
                    revalidate: 3600
                }
            }
        )
        
        
        return data;
    }

    catch(err:any|unknown){
        console.log(err.message)
        return null;
    }
})


export const getOverseasShippingTradeOptData = cache(async() => {
    try{
        const data : OverseasShippingTradeOptDataType[] = await sanityClient.fetch(
            groq`
             *[_type == 'overseasShoppingTradeOpt']
            `,
            {},
            {
                next: {revalidate:3600}
            }
        )
    
        return data;
    }

    catch(err){
        return null;
    }
})
