import { FcFaq } from 'react-icons/fc'
import { Rule, defineField } from 'sanity'

const faqSchema = defineField({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    icon: FcFaq,
    fields: [
        {
            name: 'faqSection',
            title: 'Faq Section',
            type: 'object',
            fields: [
                {
                    name: 'faqSectionTitle',
                    title: 'Faq Section Title',
                    type: 'string',
                    validation: (rule:Rule) => rule.required()
                },
                {
                    name: 'faqsArray',
                    title: 'FaqsArray',
                    type: 'array',
                    of: [
                        {
                            name: 'faqContent',
                            title: 'faqContent',
                            type: 'object',
                            fields: [
                                {
                                    name: 'question',
                                    title: 'Question',
                                    type: 'string',
                                    validation: (rule:Rule) => rule.required()
                                },
                                {
                                    name: 'answer',
                                    title: 'Answer',
                                    type: 'array',
                                    of: [ { type: 'block'} ],
                                    validation: (rule:Rule) => rule.required()
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})


export default faqSchema;