import { GiShipWheel } from "react-icons/gi";
import { defineField } from "sanity";

const chinaOverseasShippingSchema =  defineField({
    name: "chinaOverseasShipping",
    title: "China Overseas Shipping",
    type: "document",
    icon: GiShipWheel,
    fields: [
        {
            name: "repImage",
            title: "Rep Image",
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
            validation: rule => rule.required()
        },
        {
            name: "introTextContent",
            title: "Intro Text Content",
            type: "array",
            of: [ { type: "block" }],
            validation: rule => rule.required()
        },
        {
            name: "fullGuidelineDetails",
            title: "Full Guideline Details",
            type: "array",
            of: [ { type: "block" }],
            validation: rule => rule.required()
        },
    ]
})

export default chinaOverseasShippingSchema;