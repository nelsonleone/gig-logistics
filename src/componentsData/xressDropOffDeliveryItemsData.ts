import { LabelValueObj } from "../../types"

export const categoryValuesArr = [
    "Computer Accessories",
    "Documents",
    "Electronics",
    "Food",
    "Health Products",
    "Jewelries/Accessories",
    "Others",
    "Phones"
]

type IxpressDropOffFullCatergoryData =  {
    value: string,
    label: string,
    items: LabelValueObj
}[]

export const xpressDropOffFullCatergoryData : IxpressDropOffFullCatergoryData = [
    {
        value: "computer accessories",
        label: "Computer Accessories",
        items: [
            {
                value: "hard disk",
                label: "Hard Disk"
            },
            {
                value: "laptop",
                label: "Laptop"
            },
            {
                value: "projector",
                label: "Projector"
            }
        ]
    },
    {
        value: "documents",
        label: "Documents",
        items: [
            {
                value: "cheque",
                label: "Cheque"
            },
            {
                value: "driver's license/id card/atm card",
                label: "Driver's License / ID Card / ATM Card"
            },
            {
                value: "german-embassy-shipment",
                label: "German Embassy Shipment"
            },
            {
                value: "high-value-shipment-mixed-with-others",
                label: "High Value Shipment Mixed With Others"
            },
            {
                value: "original-documents",
                label: "Original Documents"
            },
            {
                value: "photocopy-of-documents",
                label: "Photocopy Of Documents"
            },
            {
                value: "travel-passport-no-visa",
                label: "Travel Passport (No Visa)"
            },
            {
                value: "travel-passport-with-visa",
                label: "Travel Passport (With Visa)"
            }
        ]
    },
    {
        value: "electronics",
        label: "Electronics",
        items: [
            {
                value: "blender",
                label: "Blender"
            },
            {
                value: "camera",
                label: "Camera"
            },
            {
                value: "projector",
                label: "Projector"
            }
        ]
    },
    {
        value: "food",
        label: "Food",
        items: [
            {
                value: "beans",
                label: "Beans"
            },
            {
                value: "garri",
                label: "Garri"
            },
            {
                value: "other-food-stuffs",
                label: "Other Food Stuffs"
            },
            {
                value: "rice",
                label: "Rice"
            },
            {
                value: "rice (same-day-delivery)",
                label: "Rice (Same day delivery"
            }
        ]
    },
    {
        value: "health products",
        label: "Health Products",
        items: [
            {
                value: "elphimo-pharmacy",
                label: "Elphimo Pharmacy"
            }
        ]
    },
    {
        value: "jewelries/accessories",
        label: "Jewelries/Accessories",
        items: [
            {
                value: "all-beads",
                label: "All Beads"
            },
            {
                value: "costume-jewelery/gi",
                label: "Custom Jewelery / GI"
            },
            {
                value: "human-hair/weavon",
                label: "Human Hair / Weavon"
            },
            {
                value: "gold-Jewelry (original)",
                label: "Gold Jewelry (Original)"
            },
            {
                value: "wrist-watch",
                label: "Wrist Watch"
            }
        ]
    },
    {
        value: "others",
        label: "Others",
        items: []
    },
    {
        value: "phones",
        label: "Phones",
        items: [
            {
                value: "high-value-phone",
                label: "High Value Phone"
            },
            {
                value: "ipad",
                label: "iPad"
            },
            {
                value: "low-value-phone",
                label: "Low Value Phone"
            }
        ]
    },
] 

const items = [

]