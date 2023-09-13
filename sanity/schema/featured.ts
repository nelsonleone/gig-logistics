import { MdEventAvailable } from 'react-icons/md'
import { Rule, defineField } from 'sanity'

const featured = defineField({
    name: 'featured',
    title: 'Featured',
    type: 'document',
    icon: MdEventAvailable,
    fields: [
        {
            name: 'bannerIcon',
            title: 'Banner Icon',
            type: 'image',
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
            name: 'textContent',
            title: 'Featured Event Prompt',
            description: 'Enter a short text about the new featured event',
            type: 'string',
            validation: (Rule:Rule) => Rule.required().max(70).error("content should not be more than 70 letters")
        },
        {
            name: 'eventPageLink',
            title: 'Event Page Link',
            type: 'slug',
            validation: (Rule:Rule) => Rule.required().error("Enquire for event page link")
        }
    ]
})


export default featured;