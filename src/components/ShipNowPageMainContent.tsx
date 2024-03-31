"use client"

import { deliveryVehiclesData } from "@/componentsData/delivery-vehicles-data";
import AppPanelMCContainer from "./AppPanelPagesMCContainer"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react";
import TruckSize from "./assets/Tabs/ShippingDetailsTabContent/TruckSize";


function ShipNowPageMainContent() {

    const router = useRouter()
    const pathName = usePathname()
    const [showTruckTonneSizeModal,setShowTruckTonneSizeModal] = useState(false)

    const handleNavigate = (vehicleName:string) => {
        if(vehicleName !== "Truck"){
            router.push(`${pathName}/shipping-details?deliveryVehicle=${vehicleName}`)
        }
        else{
            setShowTruckTonneSizeModal(true)
        }
    }

    return (
        <AppPanelMCContainer>
            <h2 className="text-xl font-medium text-center lg:text-2xl my-6 lg:mt-6 lg:mb-16 w-1/2 mx-auto">Please select the most suitable vehicle to pick up your item(s)</h2>
            <div className="w-[95%] mx-auto mt-10 flex flex-col md:flex-row flex-wrap justify-between lg:justify-center lg:gap-10">
                {
                    deliveryVehiclesData.map((val) => {
                        return(
                            <div 
                              key={val.vehicleName} 
                              tabIndex={0} 
                              onClick={() => handleNavigate(val.value)}
                              className="shadow-lg min-h-[13em] border border-gray-200 text-center rounded-lg p-4 flex flex-col justify-center items-center mb-16 cursor-pointer hover:border-cyan-600 focus:outline-none focus:border-cyan-600 hover:translate-y-6 transition duration-300 ease-in-out md:basis-2/5 lg:basis-1/3 lg:w-[15em] lg:mb-8 lg:h-64"
                              >
                                <div>
                                 {val.icon({ styling: "text-black", ariaLabel: "Motor Bike"})}
                                </div> 
                               <h3 className="text-xl font-medium my-4 capitalize">{val.vehicleName}</h3>
                               <p>{val.vehicleDescription}</p>
                            </div>
                        )
                    })
                }
            </div>
            <TruckSize open={showTruckTonneSizeModal} onClose={() => setShowTruckTonneSizeModal(false)} />
        </AppPanelMCContainer>
    )
}

export default ShipNowPageMainContent;