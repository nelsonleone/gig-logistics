import { PortableTextBlock, TypedObject } from "@portabletext/types"

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
}

export type OfficeLocationDataObj = {
    nigeriaOfficeLocationData:OfficeLocationData,
    ghanaOfficeLocationData:OfficeLocationData,
    unitedKingdomOfficeLocationData:OfficeLocationData,
    unitedStatesOfficeLocationData:OfficeLocationData,
    chinaOfficeLocationData: OfficeLocationData
}





// Faq Content Data Type
export type FaqData = {
    _id: string,
    faqSection: {
        faqSectionTitle: string,
        faqsArray: {
            question: string,
            _key: string,
            answer: PortableTextBlock[]
        }[]
    }
}[]




// About-Us Page Content
interface AboutUsContent {
    heading: string;
    text: string;
}
  
interface AboutUsServiceHighlightCard {
    textContent: string;
    heading: string;
    _key: string;
    _type: string;
}
  
export type AboutUsPageContentData = {
    introText: string;
    aboutUsContent2: AboutUsContent;
    aboutUsContent3: AboutUsContent;
    aboutUsServiceHighlightCards: AboutUsServiceHighlightCard[];
    introHeading: string;
    aboutUsRepImg: {
        alt: string;
        asset: {
        _ref: string;
        _type: string;
        };
        _type: string;
    };
    mainContent: TypedObject[]
}