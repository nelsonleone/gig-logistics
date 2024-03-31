import { Car, MiniVan, MotorBike, Truck } from "@/components/assets/SvgIconsComponent/DeliveryVehiclesIcon"
import { ShippingVehicles } from "@/enums"

interface IDeliveryVehiclesData {
    icon: ({ styling, ariaLabel }: { styling:string, ariaLabel: string }) =>  JSX.Element,
    vehicleName: string,
    vehicleDescription: string,
    value: ShippingVehicles
}

export const deliveryVehiclesData : IDeliveryVehiclesData[] = [
    {
        icon: MotorBike,
        vehicleName: "Motor Bike",
        value: ShippingVehicles.Bike,
        vehicleDescription: "Ideal for lightweight items: Documents, human hair, phones, etc."
    },
    {
        icon: Car,
        vehicleName: "Car",
        value: ShippingVehicles.Car,
        vehicleDescription: "For items that will fit into a car boot: Bag of clothes and shoes, a microwave oven etc."
    },
    {
        icon: MiniVan,
        vehicleName: "Mini Van",
        value: ShippingVehicles.Bus,
        vehicleDescription: "For items too large to fit in a car boot: Large Bag of clothes or shoes, a small fridge etc."
    },
    {
        icon: Truck,
        vehicleName: "Truck",
        value: ShippingVehicles.Truck,
        vehicleDescription: "Perfect for moving very large items: Furniture set, office equipment, etc."
    }
] 