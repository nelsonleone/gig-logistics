import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { DLpageSanityContent } from "../../types";

export default async function getDLpageData(){
    const data : DLpageSanityContent[] = await sanityClient.fetch(
        groq`
         *[_type == 'portfolioServices' && ]
        `
    )
    return data[0];
}