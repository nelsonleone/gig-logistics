import groq from "groq";
import { sanityClient } from "../../sanity/lib/client";
import { FaqData } from "../../types";

export default async function getFaqData(){
    const faqData : FaqData = await sanityClient.fetch(
        groq`
         *[_type == 'faq'] | order(_createdAt desc)
        `
    )

    return faqData;
}