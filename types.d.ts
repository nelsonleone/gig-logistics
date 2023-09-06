
export type FeaturedEventData = {
    bannerIcon: IBannerIcon,
    eventPageLink: Slug,
    textContent: string,
}

export type HighlightedService = {
    serviceImageIcon: string,
    serviceHighlightHeading: string,
    isNewService: boolean,
    serviceDescription: string,
    iconImageAlt: string,
    _id: string,
    slug: string
}



// This is Just a Demo For The Shipment Details, Correct Data Property Are Yet To Be Known
export type CodeResult = {
    location: string,
    estimatedDeliveryDate: number,
    shipmentDetails: {
        weight: number
    }
}





// Office Locations Types
interface IOfficeLocationAddress {
    city: string,
    addressLine: string
}

interface IOFL {
    state_capital: string,
    address: IOfficeLocationAddress[]
}


export type OfficeLocationData = {
    countryName: string,
    locations: IOFL[]
}[]