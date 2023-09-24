import { defineType } from "sanity";

const domesticLogisticsSchemaType = defineType({
    name: "domesticLogistics",
    title: "Domestic Logistics",
    type: "document",
    fields: [
        {
            name: "repImage",
            title: "Rep. Image",
            type: "image",
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
            ],
            validation(rule) {
                return rule.required().error("You need to provide a suitable image for this content")
            },
        },
        {
            name: "textContent",
            title: "Text Content",
            type: "array",
            of: [{ type: "block" }],
            validation(rule) {
                return rule.required().min(20).error("Content is too short")
            },
        }
    ]
})


export default domesticLogisticsSchemaType;