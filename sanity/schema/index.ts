import { type SchemaTypeDefinition } from 'sanity'
import featured from './featured'
import deliveryServicesHiglight from './delivery-services-higlight'
import faqSchema from './faq-schema'
import aboutUsContentSchema from './about-content-schema'
import portfolioServices from './portfolio-services'
import overseasShippingTradeOpt from './overseas-shipping-trade-opt'
import localShippingPromptMessageSchema from './LocalShippingPromptMessage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    featured,
    deliveryServicesHiglight,
    faqSchema,
    aboutUsContentSchema,
    portfolioServices,
    overseasShippingTradeOpt,
    localShippingPromptMessageSchema
  ]
}
