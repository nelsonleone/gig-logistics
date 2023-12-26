import { NDPackageTypeInputIds } from "@/enums"
import { InternationalQuoteObj } from "../../types"

interface IQuotePackageTypeInputData {
    type: "number" | "text",
    label: string,
    name: string,
    id: NDPackageTypeInputIds
}


export const nonDocumentQuotePackageTypeInputData : IQuotePackageTypeInputData[] = [
    {
        type: "number",
        label: "Length",
        name: "nonDocument.length",
        id: NDPackageTypeInputIds.quote_IntlLength
    },
    {
        type: "number",
        label: "Width",
        name: "nonDocument.width",
        id: NDPackageTypeInputIds.quote_IntlWidth
    },
    {
        type: "number",
        label: "Height",
        name: "nonDocument.height",
        id: NDPackageTypeInputIds.quote_IntlHeight
    },
    {
        type: "number",
        label: "Weight",
        name: "nonDocument.weight",
        id: NDPackageTypeInputIds.quote_IntlWeight
    },
    {
        type: "number",
        label: "Quantity",
        name: "nonDocument.quantity",
        id: NDPackageTypeInputIds.quote_IntlQuantity
    },
    {
        type: "number",
        label: "Value",
        name: "nonDocument.value",
        id: NDPackageTypeInputIds.quote_IntlValue
    },
]



export const documentQuotePackageTypeInputData = [
    {
        type: "number",
        label: "Quantity",
        name: "document.quantity",
        id: "quote_IntlQuantity2"
    },
    {
        type: "number",
        label: "Value",
        name: "document.value",
        id: "quote_IntlValue2"
    },
] 