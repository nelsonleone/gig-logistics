"use client"

import { useAppSelector } from "@/redux/customHooks"
import Image from "next/image"

export default function SavedItems(){

    const { items } = useAppSelector(store => store.overseasShippingItems)

    return(
        <div>
            <p>You can add and delete more items here.</p>
            <i>Please note these items will use same address provided for your shipment</i>
            
            <div>
                {
                    items.map(item => (
                        <div>
                            <Image src="/icons/overseas-shipping-box-icon.svg" loading="eager" width={50} height={50} alt="" aria-hidden="true" />
                            <h4>{item.storeName}:</h4>
                            <p className="capitalize">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}