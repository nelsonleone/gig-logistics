import { Rule, defineField } from "sanity";
import { GrBusinessService } from "react-icons/gr"

const servicesPortfolioSchema =  defineField({
    name: "servicesPortfolio",
    title: "Services Portfolio",
    type: "document",
    icon: GrBusinessService,
    fields: [
        {
            name: "repImage",
            title: "Rep. Image",
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: (rule:Rule) => rule.required().error("Add a rep. image")
        },
        {
            name: "servicesPortfolioContents",
            title: "Services",
            type: "array",
            of: [{
                type: 'object',
                fields: [
                  { name: 'serviceName', title: 'Service Name', type: 'string', validation: (rule:Rule) => rule.required().error("This field is required") },
                  { name: 'serviceDesc', title: 'Service Description', type: 'text', validation: (rule:Rule) => rule.required().error("This field is required").min(10).error("Description is too short")},
                  { name: 'serviceLink', title: 'Service Link', type: 'slug',  validation: (rule:Rule) => rule.required().error("This field is required") }
                ]
            }]
        }
    ]
})

export default servicesPortfolioSchema;