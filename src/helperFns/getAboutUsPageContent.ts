import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { AboutUsPageContentData } from "../../types";

export default async function getAboutUsPageContent(){
  try{
    const aboutPageData : AboutUsPageContentData[] = await sanityClient.fetch(
      groq`
        *[_type == 'aboutUsContent']
      `,
  )

    return aboutPageData[0];
  }

  catch(err){
    return null
  }
}