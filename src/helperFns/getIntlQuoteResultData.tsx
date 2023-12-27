import { InternationalQuoteObj } from "../../types";
import { calculateDomesticEstimatedShippingCost } from "./calculateEstimatedShippingCost";


interface IFnReturnObj {
    weight: string,
    quantity: string,
    totalCostForShipment: number,
    resultPackageType: "document" | "non-document"
}

type IFnReturnType = () => IFnReturnObj;

export function getIntlQuoteResultData(data:InternationalQuoteObj) : IFnReturnType{

    const { quote_packageType } = data;

    let packageQualitiesObj = {
        weight: "",
        quantity: "",
        value: ""
    }

    if(quote_packageType.value === "non-document"){
        packageQualitiesObj = {
            weight: data.nonDocument?.weight || "",
            quantity: data.nonDocument?.quantity || "",
            value: data.nonDocument?.value || ""
        }
    }
    else if(quote_packageType.value === "document"){
        packageQualitiesObj = {
            weight: data.document?.weight || "",
            quantity: data.document?.quantity || "",
            value: data.document?.value || ""
        }
    }

    const totalCostForShipment = calculateDomesticEstimatedShippingCost(packageQualitiesObj?.weight || "",packageQualitiesObj?.quantity || "",packageQualitiesObj?.value || "")

    const result: IFnReturnObj = {
        weight: packageQualitiesObj?.weight,
        quantity: packageQualitiesObj?.quantity,
        totalCostForShipment,
        resultPackageType: data.quote_packageType.value
    }

    return () => result
}