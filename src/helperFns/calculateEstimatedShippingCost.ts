export function calculateDomesticEstimatedShippingCost(weight:string, quantity:string, price:string) {

    const baseTransportationFee = 12000; // Base transportation fee in Naira
    const weightMultiplier = 1.5; // Naira per kg
    const quantityMultiplier = 1.05; // Naira per item
    const priceMultiplier = 0.48;
  
    const weightCost = weight ? parseInt(weight.replace(/\D/g, ''), 10) * weightMultiplier : 25 * quantityMultiplier;
    const quantityCost = parseInt(quantity.replace(/\D/g, ''), 10) * quantityMultiplier;
    const priceCost = parseInt(price.replace(/\D/g, ''), 10) * priceMultiplier;
  
    const totalCost = baseTransportationFee + priceCost * weightCost * quantityCost ;
  
    return totalCost;
}