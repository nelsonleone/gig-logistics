import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  apiVersion: "2024-05-05",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true
})
