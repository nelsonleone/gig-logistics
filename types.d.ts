import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { PortableTextBlock, TypedObject } from "@portabletext/types"


// //
interface DataWithHTI {
    title: string,
    text: string,
    icon?: React.FC
}



// Sanity Image Object Data Type
interface ISanityImageObjType {
    alt: string;
    asset: {
    _ref: string;
    _type: string;
    };
    _type: string;
}

type FeaturedEventData = {
    bannerIcon: IBannerIcon,
    eventPageLink: Slug,
    textContent: string,
}

type HighlightedService = {
    serviceImageIcon: string,
    serviceHighlightHeading: string,
    isNewService: boolean,
    serviceDescription: string,
    iconImageAlt: string,
    _id: string,
    slug: string
}



// This is Just a Demo For The Shipment Details, Correct Data Property Are Yet To Be Known
type CodeResult = {
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
type FaqData = {
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

interface ITypedObject extends TypedObject {
    children: []
}
  
type AboutUsPageContentData = {
    introText: string;
    aboutUsContent2: AboutUsContent;
    aboutUsContent3: AboutUsContent;
    aboutUsServiceHighlightCards: AboutUsServiceHighlightCard[];
    introHeading: string;
    aboutUsRepImg: ISanityImageObjType;
    mainContent: ITypedObject[]
}



// Type For Contact Center
interface ContactCenter {
    location: string,
    heading: string,
    id: string,
    contactDetails: {
        phone?: string,
        email?: string,
        whatsapp?: string
    }
}

type ContactCenterArray = ContactCenter[]




// Type For Domestic Logistics Page Data
type DedicatedServices = {
    title: string,
    text: string,
    icon: React.ReactNode
}[]


type PT_SanityServiceData = {
    service: {
        repImage: ISanityImageObjType;
        textContent: ITypedObject[]
    }
}


type OverseasShippingTradeOptDataType = {
    tradeOptPreviewGuideLine: TypedObject[]
}


interface AddedWalletServiceData extends DataWithHTI {};


//
type LocalOverseasShippingPromptMessageData = {
    introText: TypedObject[],
    introTextIllustrationImage: ISanityImageObjType,
    whatYouNeedToKnow: TypedObject[]
}



interface ICODWalletFormValues {
    firstName: string,
    lastName: string,
    bvn: number | null,
    email: string,
    phoneNumber: string,
    gender: string,
    dateOfBirth: string
}



type CountryNames = {
    name: string
}[]


type DomesticQuoteObj = {
    quote_origin: { label:string, value:string } | null,
    quote_destination: { label:string, value:string } | null,
    quote_quantity: string,
    quote_weight: string,
    quote_value: string
}

type InternationalQuoteObj = {
    quote_IntlDepartureCountry: { label:string, value:string } | null,
    quote_IntlDestinationCountry: { label:string, value:string } | null,
    quote_IntlAddress: string,
    quote_city: string,
    quote_zipCode: string,
    quote_packageType: { label: string, value: "non-document" | "document"},
    document?: {
        value: string,
        quantity: string,
        weight: string
    }
    nonDocument?: {
        length: string,
        width: string,
        weight: string,
        value: string,
        quantity: string,
        height: string
    },
}



interface IQuoteResultModalData {
    weight: string,
    quantity: string,
    totalCostForShipment: number,
    resultPackageType?: "non-document" | "document"
}



// Auth 
type SignInFormData = {
    email: string,
    password: string
}

type SignUpFormData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string
}
// 


type RadioGroupData = {
    value: string,
    label: string
}[]



type AuthUser = {
    uid: string;
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    picture: string
}


type IUserNotifications = {
    
}