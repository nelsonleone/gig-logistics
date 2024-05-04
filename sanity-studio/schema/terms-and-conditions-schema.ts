import { Rule, defineField } from "sanity";
import { RiContractFill } from "react-icons/ri"

const termsAndConditionsSchema =  defineField({
    name: "termsAndConditions",
    title: "Terms And Conditions",
    type: "document",
    icon: RiContractFill,
    fields: [
        {
            name: "detailedTermsAndConditions",
            title: "Detailed Terms And Conditions",
            type: "array",
            of: [ { type: "block" } ]
        }
    ]
})

export default termsAndConditionsSchema;