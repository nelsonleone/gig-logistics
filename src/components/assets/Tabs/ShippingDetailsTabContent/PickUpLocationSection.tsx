"use_client"

import { useState } from "react"
import ClearableInput from "../../inputs/CustomClearableInput"

export default function PickUpLocationSection(){

    const idForPPADD = "shp_pickup_address" 
    const idForDYADD = "shp_pickup_address" 
    const [pickupAddress,setPickupAddress] = useState<string>("")
    const [deliveryAddress,setDeliveryAddress] = useState<string>("")


    return(
        <div>
            <div>
                <label htmlFor={idForPPADD}>Pickup Address</label>
                <ClearableInput containerStyles="" inputStyles="" id={idForPPADD} placeholder="Pickup Address" setValue={setPickupAddress} value={pickupAddress} />
            </div>

            <div>
                <label htmlFor={idForDYADD}>Delivery Address</label>
                <ClearableInput id={idForDYADD} placeholder="Delivery Address" setValue={setDeliveryAddress} value={deliveryAddress} />
            </div>
        </div>
    )
}