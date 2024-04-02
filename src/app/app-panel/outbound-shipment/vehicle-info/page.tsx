"use client"

import { deliveryVehiclesData } from "@/componentsData/delivery-vehicles-data"
import { ShippingVehicles } from "@/enums"
import { useAppDispatch } from "@/redux/customHooks"
import { setVehicleInfo } from "@/redux/slices/outboundShippingFormDataSlice"
import { useRouter } from "next/navigation"

export default function VehicleInfoPage(){

    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleVehicleSelect = (vehicle:ShippingVehicles) => {
        dispatch(setVehicleInfo(vehicle))

        router.push('/app-panel/outbound-shipment/receiver-info')
    }

    return(
        <div>
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Select pickup Vehicle</h2>
            <div className="w-[95%] mx-auto mt-10 flex flex-col md:flex-row flex-wrap justify-between lg:justify-center lg:gap-10">
                {          
                deliveryVehiclesData.map((val) => {
                    return(
                        <div 
                        key={val.value} 
                        tabIndex={0}
                        onClick={() => handleVehicleSelect(val.value)}
                        className="shadow-lg min-h-[13em] border border-gray-200 text-center rounded-lg p-4 flex flex-col justify-center items-center mb-16 cursor-pointer hover:border-accent-color3 focus:outline-none focus:border-accent-color3 hover:translate-y-6 transition duration-300 ease-in-out md:basis-2/5 lg:basis-1/3 lg:w-[15em] lg:mb-8 lg:h-64"
                        >
                            <div>
                            {val.icon({ styling: "base-color2", ariaLabel: "Motor Bike"})}
                            </div> 
                        <h3 className="text-xl font-medium my-4 capitalize text-accent-color3">{val.vehicleName}</h3>
                        <p className="text-sm">{val.vehicleDescription}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}