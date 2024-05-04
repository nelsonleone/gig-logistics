import { cache } from "react";
import { sanityClient } from "../../sanity-studio/lib/client";
import { ITypedObject } from "../../types";
import groq from "groq";

async function getTermsAndConditionsData(){
    
    try{
        const termsAndConditionsData : { detailedTermsAndConditions: ITypedObject[] } = await sanityClient.fetch(
            groq`*[_type == 'termsAndConditions'][0]`,
            {},
            {
                next: {
                    revalidate: 3600
                }
            }
            
        )

        return termsAndConditionsData;
    }

    catch(err:any|unknown){
        return null;
    }
}

export default cache(getTermsAndConditionsData)