/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\tfsni4bd\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from './schema/index'
import { structureTool } from 'sanity/structure'
import { FaTruckLoading } from 'react-icons/fa'

export default defineConfig({
  projectId: "tfsni4bd",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      name: "Desk",
      title: "GIGL Clone CMS",
      icon: FaTruckLoading
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: "2024-01-29" }),
  ],
})
