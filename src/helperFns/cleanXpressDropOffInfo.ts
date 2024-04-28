import { IXpressDeliveryItemTransformed, ServerReadyXpressDropOffInfo, XpressDropOffInfo } from "../../types";
import { transformXpressDropOffDeliveryOptionObj } from "./transformXpressDropOffDeliveryOptionObj";

export function cleanXpressDropOffInfo(info:XpressDropOffInfo){

    const modifiedDeliveryItems : IXpressDeliveryItemTransformed[] = info.deliveryItems.map(val => {

        
        if (val.category.value === "others") {
          const { otherItemName, category, item, otherItemDescription, otherItemWeight, ...rest } = val;
          return {
            ...rest,
            category: category.value,
            item: otherItemName!,
            weight: otherItemWeight!,
            itemDescription: otherItemDescription!
          }
        }


        else {
            const { otherItemName, category, item, weight, otherItemDescription, otherItemWeight, ...rest } = val;

            return{
                ...rest,
                category: category.value,
                item: item.value,
                weight: weight.value,
                itemDescription: ""
            }
        }
    })


    const cleanedDropOffObj : ServerReadyXpressDropOffInfo = {
        sender: {...info.sender, location: info.sender.location.value},
        deliveryItems: modifiedDeliveryItems,
        receiver: transformXpressDropOffDeliveryOptionObj(info.receiver)
    }

    return cleanedDropOffObj;
}