import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { AboutUsPageContentData } from "../../types";

export default async function getAboutUsPageContent(){
    const aboutPageData : AboutUsPageContentData[] = await sanityClient.fetch(
        groq`
          *[_type == 'aboutUsContent']
        `
    )

    return aboutPageData[0];
}