"use client"

import { deliveryVehiclesData } from "@/componentsData/delivery-vehicles-data";
import { motion } from 'framer-motion'
import AppPanelMCContainer from "./AppPanelPagesMCContainer"
import { usePathname, useRouter } from "next/navigation"



function ShipNowPageMainContent() {

    const router = useRouter()
    const pathName = usePathname()

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
                              onClick={() => router.push(`${pathName}/shipping-details?deliveryVehicle=${val.vehicleName}`)}
                              className="shadow-lg min-h-[13em] border border-gray-200 text-center rounded-lg p-4 flex flex-col justify-center items-center mb-16 cursor-pointer hover:border-red-400 focus:outline-none focus:border-red-600 transition duration-200 ease-in-out md:basis-2/5 lg:basis-1/3 lg:w-[15em] lg:mb-8 lg:h-64"
                              >
                                <motion.div initial="initial" animate="animate">
                                 {val.icon({ styling: "text-black", ariaLabel: "Motor Bike"})}
                                </motion.div> 
                               <h3 className="text-xl font-medium my-4 capitalize">{val.vehicleName}</h3>
                               <p>{val.vehicleDescription}</p>
                            </div>
                        )
                    })
                }
            </div>
        </AppPanelMCContainer>
    )
}

export default ShipNowPageMainContent;