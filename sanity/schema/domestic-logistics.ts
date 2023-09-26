import { defineType } from "sanity";
import { MdLocalShipping } from 'react-icons/md'

const domesticLogisticsSchemaType = defineType({
    name: "domesticLogistics",
    title: "Domestic Logistics",
    type: "document",
    icon: MdLocalShipping,
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
                return rule.required()
            },
        }
    ]
})


export default domesticLogisticsSchemaType;