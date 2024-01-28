import { FaShopify } from "react-icons/fa6";
import { Rule, defineField } from "sanity";

const personalShoppingInfo = defineField({
    name: 'personalShoppingInfo',
    title: 'Personal Shopping Info',
    type: 'document',
    icon: FaShopify,
    fields: [
        {
            name: 'heading',
            title: 'Page Heading',
            type: 'string',
            validation: (Rule:Rule) => Rule.required().error("This field is required")
        },
        {
            name: "introBgImage",
            title: "Intro Background Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text For Icon',
                    type: 'string'
                }
            ]
        },
        {
            name: "secondHeading",
            title: "Second Heading",
            type: "string",
            validation: (Rule:Rule) => Rule.required().error("This field is required").min(5).error("Too short")
        },
        {
            name: "secondHeading",
            title: "Second Heading",
            type: "string",
            validation: (Rule:Rule) => Rule.required().error("This field is required").min(5).error("Too short")
        },
        {
            name: "howItWorksSection",
            title: "How It Works Info",
            type: "array",
            of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'heading', title: 'Heading', type: 'string' },
                    { name: 'text', title: 'Text', type: 'text' }
                  ]
                },
            ]
        }
    ]
})

export default personalShoppingInfo;