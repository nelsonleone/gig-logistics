import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";

export default async function getAboutUsPageContent(){
    const aboutPageData = await sanityClient.fetch(
        groq`
          *[_type == 'aboutUsContent']
        `
    )

    return aboutPageData;
}