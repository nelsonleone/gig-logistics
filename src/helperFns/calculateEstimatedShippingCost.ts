export function calculateDomesticEstimatedShippingCost(weight:string, quantity:string, price:string) {

    const baseTransportationFee = 500; // Base transportation fee in Naira
    const weightMultiplier = 50; // Naira per kg
    const quantityMultiplier = 100; // Naira per item
    const priceMultiplier = 0.05; // 5% of the product price
  
    const weightCost = parseInt(weight.replace(/\D/g, ''), 10) * weightMultiplier;
    const quantityCost = parseInt(quantity.replace(/\D/g, ''), 10) * quantityMultiplier;
    const priceCost = parseInt(price.replace(/\D/g, ''), 10) * priceMultiplier;
  
    const totalCost = baseTransportationFee + weightCost + quantityCost + priceCost;
  
    return totalCost;
}