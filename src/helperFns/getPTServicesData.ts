import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { PT_SanityServiceData } from "../../types";
import { PT_ServiceName } from "@/enums";

export default async function getPTservicesData(serviceName:PT_ServiceName){

    const data : PT_SanityServiceData = await sanityClient.fetch(
        groq`
         *[_type == 'portfolioServices' && service.serviceName == $serviceName][0]
        `,{
            serviceName
        }
    )

    return data;
}