import { type SchemaTypeDefinition } from 'sanity'
import featured from './featured'
import deliveryServicesHiglight from './delivery-services-higlight'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featured,deliveryServicesHiglight],
}
