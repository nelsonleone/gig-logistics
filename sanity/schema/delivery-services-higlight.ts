import { TbTruckDelivery } from 'react-icons/tb'
import { Rule, defineField } from 'sanity'

const deliveryServicesHighlight = defineField({
    name: 'deliveryServicesHighlight',
    title: 'Delivery Services Highlight',
    type: 'document',
    icon: TbTruckDelivery,
    fields: [
        {
            name: 'serviceImageIcon',
            title: 'Service Image Icon',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ],
            validation: (rule:Rule) => rule.required().error("add an image icon")
        },
        {
            name: 'serviceHighlightHeading',
            title: 'Service Highlight Heading',
            type: 'string',
            validation: (rule:Rule) => rule.required().error("add service highlight heading")
        },
        {
            name: 'serviceDescription',
            title: 'Service Description',
            type: 'string',
            validation: (rule:Rule) => rule.required().max(80).error("shorter descriptions is best").min(10).error("description is too short")
        },
        {
            name: 'isNewService',
            title: 'Is It A New Service ?',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Service Page Url',
            validation: (rule:Rule) => rule.required()
        }
    ]
})

export default deliveryServicesHighlight;