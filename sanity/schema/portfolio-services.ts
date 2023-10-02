import { defineType } from "sanity";
import { BsPersonWorkspace } from 'react-icons/bs'

const domesticLogisticsSchemaType = defineType({
    name: "portfolioServices",
    title: "Portfolio Services",
    type: "document",
    icon: BsPersonWorkspace,
    fields: [
        {
            name: "service",
            title: "Service",
            type: "object",
            fields: [
                {
                    name: "serviceName",
                    title: "Service Name",
                    type: "string",
                    validation(rule) {
                        return rule.required()
                    },
                },
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
        }
    ]
})


export default domesticLogisticsSchemaType;