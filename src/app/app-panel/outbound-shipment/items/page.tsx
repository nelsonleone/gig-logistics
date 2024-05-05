"use client"


import LoadingEllipse from "@/components/assets/Loaders/LoadingEllipse"
import OverseasShippingSuccessModal from "@/components/assets/PopUps/OverseasShippingSuccessModal"
import { AlertSeverity } from "@/enums"
import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { clearOutBoundShippingFormData, setDeleteOutBoundShippingItem } from "@/redux/slices/outboundShippingFormDataSlice"
import { IconButton } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaPlusCircle, FaTrash } from "react-icons/fa"

export default function OutBoundShippingItemsPage(){

    const items = useAppSelector(store => store.outboundShipping.shipmentItems)
    const dispatch = useAppDispatch()
    const [openSuccessModal,setOpenSuccessModal] = useState(false)
    const [submittingShipment,setSubmittingShipment] = useState(false)

    const handleDeleteDeliveryItem = (id:string) => {
        dispatch(setDeleteOutBoundShippingItem({ id }))
    }

    const handleSubmitShipment = async() => {
        if(!items || !items.length){
            dispatch(setShowAlert({
                mssg: "No added outbound shipment item",
                severity: AlertSeverity.ERROR
            }))
            return;
        }

        setSubmittingShipment(true)
        await new Promise(resolve => setTimeout(resolve,3000))

        dispatch(clearOutBoundShippingFormData())
        setOpenSuccessModal(true)

        setSubmittingShipment(false)
    }

    return(
        <section className="pb-12 md:w-3/4 md:mx-auto">
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Outbound Shipment: Added Items</h2>

            <div className="flex flex-wrap justify-center gap-4 flex-col md:flex-row">
                {
                    items && items.length ? items?.map((val,index) => {
                        return( 
                            <div key={index} className="border border-gray-100 bg-gray-50 rounded-lg p-4 relative md:w-1/2 lg:w-[30%]">
                                <IconButton aria-label="delete item" onClick={() => handleDeleteDeliveryItem(val.id!)} className={`absolute top-2 right-2 cursor-pointer hover:bg-gray-200 text-accent-color`}>
                                    <FaTrash aria-label="delete" className="text-xl" />
                                </IconButton>
                                <Image src={val.itemImage} alt="item image" width={130} height={130} className="block mx-auto w-auto h-auto rounded mt-7" />
                                <div className="text-center mx-auto">
                                    <p className="text-accent-color3 capitalize">{val.itemName}</p>
                                    <p className="text-sm">{val.description}</p>
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <p>Quantity: {val.quantity}</p>
                                        <strong className="font-semibold block">₦{val.value}</strong>
                                    </div>

                                    <div>
                                        {
                                            val.weight &&
                                            <p><span className="text-sm">Weight:</span> {val.weight}</p>
                                        }
                                        {
                                            val.height &&
                                            <p><span className="text-sm">Height:</span> {val.height}</p>
                                        }
                                        {
                                            val.width &&
                                            <p><span className="text-sm">Width:</span> {val.width}</p>
                                        }
                                        {
                                            val.length &&
                                            <p><span className="text-sm">Length:</span> {val.length}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <p className="w-full my-4 text-center">You Have No Added Shipment Items</p>
                }
                <Link href="/app-panel/outbound-shipment/item-category" className="md:w-[45%] lg:w-[31%] flex flex-col text-center h-40 justify-center items-center gap-2 py-8 px-2 rounded-lg border border-gray-400 hover:shadow-md transition ease-in-out duration-200">
                    <FaPlusCircle aria-label="add item" className="text-[1.9rem]" />
                    <div>
                        <p className="font-medium">Add Item</p>
                        <p className="text-xs">Add more items to your shipment</p>
                    </div>
                </Link>
            </div>

            <OverseasShippingSuccessModal open={openSuccessModal} id="outbound-shipping" />
            <button type="button" disabled={submittingShipment} onClick={handleSubmitShipment} className="relative block w-full rounded-md text-base-color1 bg-base-color2 font-medium p-4 md:w-80 text-center mx-auto mt-16 hover:opacity-90 focus:bg-transparent focus:text-base-color2 focus:outline focus:outline-2 focus:outline-base-color2">
                {
                    submittingShipment ?
                    <LoadingEllipse />
                    :
                    "Proceed"
                }
            </button>
        </section>
    )
}