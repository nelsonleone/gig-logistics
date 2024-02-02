import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-29",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true
})
