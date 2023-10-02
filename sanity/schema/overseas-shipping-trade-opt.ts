import { FaPlane } from "react-icons/fa";
import { defineField } from "sanity";

const overseasShippingTradeOpt = defineField({
    name: "overseasShoppingTradeOpt",
    title: "Overseas Shipping Trade Opt",
    type: "document",
    icon: FaPlane,
    fields: [
        {
            name: "tradeOptPreviewGuideLine",
            title: "Trade Opt Preview GuideLine",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
})


export default overseasShippingTradeOpt;