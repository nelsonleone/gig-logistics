import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { AboutUsPageContentData } from "../../types";
import { cache } from "react";

export const getAboutUsPageContent = cache( async ()=> {
  try{
    const aboutPageData : AboutUsPageContentData[] = await sanityClient.fetch(
      groq`
        *[_type == 'aboutUsContent']{
          introText,
          aboutUsContent2,
          aboutUsContent3,
          aboutUsServiceHighlightCards,
          introHeading,
          "aboutUsRepImg": aboutUsRepImg.asset->url,
          "aboutUsRepImgAlt": aboutUsRepImg.alt,
          mainContent
        }
      `,{},{next:{
         revalidate: 3600,
      }}
  )

    return aboutPageData[0];
  }

  catch(err){
    return null
  }
})