import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { HighlightedService } from "../../types";

export default async function getHighlightedServicesData(){
    try{
        const data : HighlightedService[] = await sanityClient.fetch(
            groq`
              *[_type == 'deliveryServicesHighlight']{
                    "serviceImageIcon": serviceImageIcon.asset->url,
                    "slug": slug.current,
                    _id,
                    serviceHighlightHeading,
                    isNewService,
                    serviceDescription,
                    "iconImageAlt": serviceImageIcon.alt
                }
            `
        )
    
        return data;
    }  
    
    catch(err){
        return []
    }
}