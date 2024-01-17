import { DeliveryItems } from "../../types";

export function getEstimatedDropOffCost(value: string,weight: string,quantity: string) : number {
    const cleanedValue = parseInt(value.replace(/\D/g, ''), 10)
    const cleanedWeight = parseInt(weight.replace(/\D/g, ''), 10)
    const cleanedQuantity = parseInt(quantity.replace(/\D/g, ''), 10)

    const baseTransportationPrice = 35500;

    // Calculate estimated drop-off cost
    const estimatedCost = (baseTransportationPrice * ((cleanedValue * 0.0035) + cleanedWeight + cleanedQuantity)) * 0.005;

    const parsedEstimatedCost = Math.floor(parseFloat(estimatedCost.toString()))

    const roundedValue = Math.round(parsedEstimatedCost / 100) * 100

    return roundedValue;
}

export function estimateTotalDropOffCost(deliveryItems:DeliveryItems[]) {
    // Calculate estimated drop-off cost for each item using getEstimatedDropOffCost function
    const totalCost = deliveryItems.reduce((acc, item) => {
        let itemCost;
        if (item.category.value === "others") {
            itemCost = getEstimatedDropOffCost(item.value,item.otherItemWeight,item.quantity)
          }
  
  
        else {
            itemCost = getEstimatedDropOffCost(item.value,item.weight.value,item.quantity)
        }
        return acc + itemCost;
    }, 0)

    return totalCost;
}
