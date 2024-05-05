import { cache } from "react";
import { sanityClient } from "../../sanity-studio/lib/client";
import { ServicesPortfolioData } from "../../types";
import groq from "groq";

async function getServicesPortfolioData(){
    
    try{
        const servicesPortfolioData : ServicesPortfolioData = await sanityClient.fetch(
            groq`*[_type == 'servicesPortfolio'][0]{
                "repImageAlt": repImage.alt,
                servicesPortfolioContents,
                "repImage": repImage.asset->url

            }`,
            {},
            {
                next: {
                    revalidate: 3600
                }
            }
            
        )

        console.log(servicesPortfolioData)

        return servicesPortfolioData;
    }

    catch(err:any|unknown){
        return null;
    }
}

export default cache(getServicesPortfolioData)