import { categoryValuesArr } from "@/componentsData/xressDropOffDeliveryItemsData";
import { AuthUserWalletPinStatus, OutBoundShippingSenderInfoPickup, XpressDropOffDeliveryType } from "@/enums";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import { PortableTextBlock, TypedObject } from "@portabletext/types"
import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, string[]>;
  }
}


// //
type LabelValueObj = {
    label: string,
    value: string
}[]

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
    bannerIcon: string,
    eventPageLink: string,
    bannerIconAltText: string,
    textContent: string
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


type PersonalShoppingInfoSanityData = {
    heading: string,
    secondHeading: string,
    introBgImage: ISanityImageObjType,
    howItWorksSection: {
        heading: string,
        text: string
    }[]
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
    aboutUsRepImg: string;
    aboutUsRepImgAlt: string;
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
        repImage: string,
        repImageAlt: string,
        textContent: ITypedObject[]
    }
}


type OverseasShippingTradeOptDataType = {
    tradeOptPreviewGuideLine: ITypedObject[]
}


interface AddedWalletServiceData extends DataWithHTI {};


//

type LocalOverseasShippingIntroData = {
    introTextIllustrationImageAlt: string,
    whatYouNeedToKnow: ITypedObject[],
    introText: ITypedObject[],
    introTextIllustrationImage: string
}

type ChinaOverseasShippingData = {
    repImage: string,
    repImageAlt: string,
    introTextContent: ITypedObject[],
    fullGuidelineDetails: ITypedObject[]
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



type LocalOverseasShippingIntroPageDestinationOrigin = {
    origin: { label: "UK", value: "uk"} | { label: "USA", value: "usa"} | { label: "CHINA", value: "china" },
    destination: { label: "NIGERIA", value: "nigeria"} | { label: "GHANA", value: "ghana" }
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


interface RadioGroupData extends LabelValueObj {}



type AuthUser = {
    uid: string;
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    picture: string,
    walletPinStatus: AuthUserWalletPinStatus | undefined
}


type IUserNotifications = {
    
}


// Xpress DropOff
type ICategoryValue = "computer accessories" | "documents" | "electronics" | "food" | "health products" | "jewelries/accessories" | "others" | "phones"

type ICategory = {
    label: "Computer Accessories" | "Documents" | "Electronics" | "Food" | "Health Products" | "Jewelries/Accessories" | "Others" | "Phones";
    value: ICategoryValue;
}

type DeliveryItems = {
    category: ICategory,
    item: { label?: string, value?: string } ,
    weight: { label?: string, value?: string },
    quantity: number,
    value: number,
    itemImage: string,
    otherItemName?: string,
    otherItemDescription?: string,
    otherItemWeight?: string,
    id?: string
}

interface IXpressSenderInfo {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    location: { label: string, value: string }
}

interface IXpressReceiverInfo {
    fullName: string,
    phoneNumber: string,
    deliveryOptionType: {
        value: XpressDropOffDeliveryType | "",
        label: string
    },
    deliveryOption: {
        homeDelivery: {
            address: string
        },
        terminalPickup: {
            stateOrCity: {
                label: string;
                value: string;
            },
            closestGIGLCenter: {
                label: string;
                value: string;
            } | undefined
        }
    } 
}


type XpressDropOffInfo = {
    sender: IXpressSenderInfo
    receiver: IXpressReceiverInfo,
    deliveryItems: DeliveryItems[]
}

interface IXpressDeliveryItemTransformed {
    category: ICategoryValue,
    item: string,
    weight: string,
    quantity: number,
    value: number,
    itemImage: string,
    itemDescription?: string,
}

interface IXpressReceiverInfoTransformed {
    fullName: string;
    phoneNumber: string;
    deliveryOptionType: XpressDropOffDeliveryType | undefined;
    homeAddress?: string;
    stateOrCity?: string;
    pickupTerminal?: string;
}

type ServerReadyXpressDropOffInfo = {
    deliveryItems: IXpressDeliveryItemTransformed[],
    receiver: IXpressReceiverInfoTransformed,
    sender: {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        email: string,
        location: string
    },
    
}


interface SavedDropOffs extends ServerReadyXpressDropOffInfo {
    createdAt: string,
    trackingID: string,
    dropOffID: string,
    hasBeenPickedUp: boolean
}


type PersonalShoppingItemDetailsFormInfo = {
    productLink: string,
    itemName: string,
    quantity: number,
    description: string
}


interface IProfileDetailsUpdateFormData {
    updatedProfileImage: string | null,
    updatedfirstName: string,
    updatedLastName: string,
    updatedEmailAddress: readonly string,
    updatedPhoneNumber: readonly string
}

type ProfilePasswordChangeForm  = {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
}



type OverseasShippingItemInfo = {
    fullName: string,
    desc: string,
    quantity: number,
    storeName: string,
    trackingNumber?: string,
    itemValueInPounds: number,
    agreedToTermsAndConditions: boolean
}



type OverseasShippingDeliveryInfo = {
    receiverInfo: {
        fullName: string,
        phoneNumber: string,
        email: string
    },

    deliveryOption: {
        deliveryOptionType: {
            value: XpressDropOffDeliveryType | "",
            label: string
        },
        homeDelivery: {
            address: string
        },
        terminalPickup: {
            stateOrCity: {
                label: string;
                value: string;
            },
            closestGIGLCenter: {
                label: string;
                value: string;
            } | undefined
        }
    }
}


type OutBoundShippingSenderInfo = {
    name: string,
    address: string,
    phoneNumber: string,
    email: string,
    pickupTime: OutBoundShippingSenderInfoPickup | string,
    pickupTimeLater?: Date
}


type OutBoundShippingReceiverInfo = {
    country: object | { label: string, value: string},
    address: string,
    city: string,
    zipCode: string,
    name: string,
    phoneNumber: string,
    email: string
}
 

interface OverseasShippingSavedItemInfo extends OverseasShippingItemInfo {
    id: string,
    quantity: number
}


interface OutBoundShippingItem {
    itemName: string,
    quantity: number,
    length?: number,
    width?: number,
    weight?: number,
    height?: number,
    value: number,
    description: string,
    itemImage: string,
    id?: Readonly<string>
}

interface OutBoundShippingItem2 {
    itemName: string,
    quantity: number,
    length: number,
    width: number,
    weight: number,
    height: number,
    value: number,
    description: string,
    itemImage: string,
    id?: Readonly<string>
}

type OutboundShippingFormData = {
    senderInfo : {
        name: string,
        address: string,
        phoneNumber: string,
        email: string,
        pickupTime: OutBoundShippingSenderInfoPickup | string,
        pickupTimeLater?: number
    },
    vehicleInfo: ShippingVehicles,
    receiverInfo: OutBoundShippingReceiverInfo,
    shipmentItems: OutBoundShippingItem[]
}


type ServicesPortfolioData = {
    repImage: string,
    repImageAlt: string,
    servicesPortfolioContents: {
        serviceName: string,
        serviceDesc: string,
        serviceLink: {
            current: string
        }
    }[]
}