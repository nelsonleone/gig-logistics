import { defineField } from "sanity";
import { VscWorkspaceUnknown } from 'react-icons/vsc'

const aboutUsContentSchema =  defineField({
    name: "aboutUsContent",
    title: "About-Us Page Content",
    type: "document",
    icon: VscWorkspaceUnknown,
    fields: [
        {
            name: "introHeading",
            title: "Intro Heading",
            type: "string",
            validation(rule) {
               return  rule.required()
            }
        },
        {
            name: "introText",
            title: "Intro Text",
            type: "string",
            validation: rule => rule.required().min(10).error("Text is too short")
        },
        {
            name: "aboutUsRepImg",
            title: "Rep Image",
            type: "image",
            validation: rule => rule.required(),
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    title: "Image Alt Text",
                    type: "string",
                    description: "A short text that describes the image"
                }
            ]
        },
        {
            name: "mainContent",
            title: "Main Content",
            type: "array",
            of: [ { type: "block" }],
            validation: rule => rule.required()
        },
        {
            name: "aboutUsContent2",
            title: "About-Us TextContent2",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                    validation: rule => rule.required()
                },
                {
                    name: "text",
                    title: "Text",
                    type: "text",
                    validation: rule => rule.required()
                }
            ]
        },
        {
            name: "aboutUsContent3",
            title: "About-Us TextContent3",
            type: "object",
            fields: [
                {
                    name: "heading",
                    title: "Heading",
                    type: "string",
                    validation: rule => rule.required()
                },
                {
                    name: "text",
                    title: "Text",
                    type: "text",
                    validation: rule => rule.required()
                }
            ]
        },
        {
            name: "aboutUsServiceHighlightCards",
            title: "About-Us Service Highlight Cards",
            type: "array",
            of: [ 
                {
                    name: "serviceHighlightCard",
                    title: "ServiceHighlightCard",
                    type: "object",
                    fields: [
                        {
                            name: "heading",
                            type: "string",
                            title: "Heading",
                            validation: rule => rule.required().max(20).error("Too long for a heading")
                        },
                        {
                            name: "textContent",
                            type: "text",
                            title: "TextContent",
                            validation: rule => rule.required().min(20).error("Too short for a text content")
                        },
                    ]
                }
            ]
        }
    ]
})

export default aboutUsContentSchema;