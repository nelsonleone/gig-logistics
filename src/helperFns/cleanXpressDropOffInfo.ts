import { DeliveryItems, IXpressDeliveryItemTransformed, IXpressReceiverInfoTransformed, IXpressSenderInfo, XpressDropOffInfo } from "../../types";
import { transformXpressDropOffDeliveryOptionObj } from "./transformXpressDropOffDeliveryOptionObj";

interface IcleanedDropOffInfo {
    deliveryItems: IXpressDeliveryItemTransformed[];
    receiver: IXpressReceiverInfoTransformed,
    sender: IXpressSenderInfo
}

export function cleanXpressDropOffInfo(info:XpressDropOffInfo){

    const modifiedDeliveryItems : IXpressDeliveryItemTransformed[] = info.deliveryItems.map(val => {

        
        if (val.category.value === "others") {
          const { otherItemName, category, item, otherItemDescription, otherItemWeight, ...rest } = val;
          return {
            ...rest,
            category: category.value,
            item: otherItemName,
            weight: otherItemWeight,
            itemDescription: otherItemDescription
          }
        }


        else {
            const { otherItemName, category, item, weight, otherItemDescription, otherItemWeight, ...rest } = val;

            return{
                ...rest,
                category: category.value,
                item: item.value,
                weight: weight.value
            }
        }
    })


    const cleanedDropOffObj : IcleanedDropOffInfo = {
        ...info,
        deliveryItems: modifiedDeliveryItems,
        receiver: transformXpressDropOffDeliveryOptionObj(info.receiver)
    }

    return cleanedDropOffObj;
}