"use client"

import { overseasShippingShipmentAddresses } from "@/componentsData/overseasShippingShipmentAddresses"
import CustomCopyButton from "../assets/Buttons/CustomCopyButton"
import OverseasShippingShopsHighlight from "../OverseasShippingShopsHighlight"
import { useRouter } from "next/navigation"

export default function OverseasShipmentAddressMC(){

    const id = 'overseas-shipment-address'
    const router = useRouter()
    const nextStep = "/app-panel/overseas-shipping/shipping-details/item-info"

    return(
        <div className="relative mt-24 mb-6">
            <p className="my-6 text-center">
                Simply use details in the format below as your shipping address when shipping from any store (physical or online). In cases where you are required to input a phone number, use your personal number please. This will enable GIG Logistics receive item(s) on your behalf for onward delivery
            </p>


            <div className="mb-6">
                <label htmlFor={`${id}-address`} className="mb-3 block">Address</label>
                <div className="relative h-32 ">
                    <textarea id={`${id}-address`} className="absolute w-full h-full mx-auto bg-gray-50 top-0 left-0 pe-14 border border-gray-300 rounded-lg focus:outline-offset-0 focus:outline focus:outline-2 focus:border-none focus:outline-black" readOnly defaultValue={overseasShippingShipmentAddresses.uk.address}></textarea>
                    <div className="absolute right-0 p-3 flex justify-center items-center w-14 bottom-0 bg-black rounded-lg">
                        <CustomCopyButton value={overseasShippingShipmentAddresses.uk.address} />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor={`${id}-city`} className="mb-3 block">City</label>
                <div className="relative h-[3.7em]">
                    <input type="text" id={`${id}-city`} className="absolute w-full h-full mx-auto bg-gray-50 top-0 left-0 p-3 pe-[3.6em] border border-gray-300 rounded-lg focus:outline-offset-0 focus:outline focus:outline-2 focus:border-none focus:outline-black" readOnly defaultValue={overseasShippingShipmentAddresses.uk.city} />
                    <div className="absolute right-0 p-3 top-0 my-auto flex justify-center items-center w-14 bottom-0 bg-black rounded-tr-lg rounded-br-lg">
                        <CustomCopyButton value={overseasShippingShipmentAddresses.uk.city} />
                    </div>
                </div>
            </div>

            <div className="md:flex justify-between gap-8">
                <div className="my-6 md:w-1/2">
                    <label htmlFor={`${id}-state`} className="mb-3 block">State</label>
                    <div className="relative h-[3.7em]">
                        <input type="text" id={`${id}-state`} className="absolute w-full h-full mx-auto bg-gray-50 top-0 left-0 p-3 pe-[3.6em] border border-gray-300 rounded-lg focus:outline-offset-0 focus:outline focus:outline-2 focus:border-none focus:outline-black" readOnly defaultValue={overseasShippingShipmentAddresses.uk.state} />
                        <div className="absolute right-0 p-3 top-0 my-auto flex justify-center items-center w-14 bottom-0 bg-black rounded-tr-lg rounded-br-lg">
                            <CustomCopyButton value={overseasShippingShipmentAddresses.uk.state} />
                        </div>
                    </div>
                </div>

                <div className="my-6 md:w-1/2">
                    <label htmlFor={`${id}-zipCode`} className="mb-3 block">ZipCode</label>
                    <div className="relative h-[3.7em]">
                        <input type="text" id={`${id}-zipCode`} className="absolute w-full h-full mx-auto bg-gray-50 top-0 left-0 p-3 pe-[3.6em] border border-gray-300 rounded-lg focus:outline-offset-0 focus:outline focus:outline-2 focus:border-none focus:outline-black" readOnly defaultValue={overseasShippingShipmentAddresses.uk.zipCode} />
                        <div className="absolute right-0 p-3 top-0 my-auto flex justify-center items-center w-14 bottom-0 bg-black rounded-tr-lg rounded-br-lg">
                            <CustomCopyButton value={overseasShippingShipmentAddresses.uk.zipCode} />
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={() => router.push(nextStep)} className="rounded-md block text-white bg-black font-medium p-[.8em] text-center mx-auto w-full md:w-80 my-12 hover:opacity-90 focus:bg-transparent focus:text-black focus:outline focus:outline-2 focus:outline-black">Proceed</button>
        
           <OverseasShippingShopsHighlight />
        </div>
    )
}