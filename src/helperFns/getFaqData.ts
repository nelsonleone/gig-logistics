import groq from "groq";
import { sanityClient } from "../../sanity-studio/lib/client";
import { FaqData } from "../../types";
import { cache } from "react";

export const getFaqData = cache(async () => {
    const faqData : FaqData = await sanityClient.fetch(
        groq`
         *[_type == 'faq'] | order(_createdAt asc)
        `,
        {},
        {
            next: {
                revalidate: 3600
            }
        }
    )

    return faqData;
})