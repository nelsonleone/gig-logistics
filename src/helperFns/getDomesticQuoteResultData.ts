import { DomesticQuoteObj } from "../../types";
import { calculateDomesticEstimatedShippingCost } from "./calculateEstimatedShippingCost";

interface IFnReturnObj {
    weight: string,
    quantity: string,
    totalCostForShipment: number
}

type IFnReturnType = () => IFnReturnObj;

export function getDomesticQuoteResultModalData(data: DomesticQuoteObj): IFnReturnType {
    const { quote_weight, quote_value, quote_quantity } = data;
    const totalCostForShipment = calculateDomesticEstimatedShippingCost(quote_weight, quote_quantity, quote_value)

    const result: IFnReturnObj = {
        weight: quote_weight,
        quantity: quote_quantity,
        totalCostForShipment
    }

    return () => result
}
