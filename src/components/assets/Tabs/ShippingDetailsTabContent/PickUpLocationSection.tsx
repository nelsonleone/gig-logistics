"use_client"

import { useState } from "react"
import ClearableInput from "../../inputs/CustomClearableInput"
import { TbLocationFilled } from "react-icons/tb"
import { IoLocationSharp } from "react-icons/io5"

export default function PickUpLocationSection(){

    const idForPPADD = "shp_pickup_address" 
    const idForDYADD = "shp_pickup_address" 
    const [pickupAddress,setPickupAddress] = useState<string>("")
    const [deliveryAddress,setDeliveryAddress] = useState<string>("")


    return(
        <div className="mt-24 pt-5 px-3 lg:px-6 shadow-md drop-shadow-lg rounded-md min-h-[15em] lg:min-h-[9em] w-full">
            <div className="flex flex-col gap-8 md:flex-row md:gap-14">
                <div className="w-full">
                    <label htmlFor={idForPPADD} className="text-sm font-medium mb-3 block">Pickup Address</label>
                    <div className="flex gap-4 items-center w-full">
                        <TbLocationFilled aria-hidden="true" className="text-xl text-[#282842]" />
                        <ClearableInput containerStyles="" inputStyles="" id={idForPPADD} placeholder="Pickup Address" setValue={setPickupAddress} value={pickupAddress} />
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor={idForDYADD} className="text-sm font-medium mb-3 block">Delivery Address</label>
                    <div className="flex gap-4 items-center w-full">
                        <IoLocationSharp aria-hidden="true" className="text-2xl text-[#282842]" />
                        <ClearableInput id={idForDYADD} placeholder="Delivery Address" setValue={setDeliveryAddress} value={deliveryAddress} />
                    </div>
                </div>
            </div>
        </div>
    )
}