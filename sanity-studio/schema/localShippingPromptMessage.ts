import { GiAfrica } from "react-icons/gi";
import { defineField } from "sanity";

const localShippingPromptMessageSchema = defineField({
    name: "localShippingPromptMessage",
    type: "document",
    title: "Local Shipping Prompt Message",
    icon: GiAfrica,
    fields: [
        {
            name: "introText",
            title: "Intro Text",
            type: "array",
            of: [ { type: "block" }]
        },
        {
            name: "introTextIllustrationImage",
            title: "Intro Text Illustration Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    description: "A short text describing this image",
                    type: 'string'
                }
            ]
        },
        {
            name: "whatYouNeedToKnow",
            title: "What You Need To Know",
            type: "array",
            of: [ { type: "block" }]
        }
    ]
})


export default localShippingPromptMessageSchema;