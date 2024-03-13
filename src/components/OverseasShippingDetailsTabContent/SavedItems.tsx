"use client"

import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import Image from "next/image"
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { removeItem } from "@/redux/slices/overseasShippingItemsSlice";
import { useRouter } from "next/navigation";
import { setShowAlert } from "@/redux/slices/alertSlice";
import { AlertSeverity } from "@/enums";
import Link from "next/link";
import DeleteOverseasShippingItemModal from "../assets/PopUps/DeleteOverseasShippingItemModal";
import { useState } from "react";

export default function SavedItems(){

    const { items } = useAppSelector(store => store.overseasShippingItems)
    const overseasShippingItemInfoPage = "/app-panel/overseas-shipping/shipping-details/item-info"
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [showDeleteModal,setShowDeleteModal] = useState(false)
    const [aboutToDeletedItemId,setAboutToDeletedItemId] = useState<string>("")

    const handleCheckForSavedItem = () => {
        if(!items || !items.length){
            dispatch(setShowAlert({
                mssg: "No saved shipment",
                severity: AlertSeverity.ERROR
            }))

            return;
        }
        router.push("/app-panel/overseas-shipping/shipping-details/delivery")
    }

    const handleRemoveItem = (id:string) => {
        setAboutToDeletedItemId(id)
        setShowDeleteModal(true)
    }

    return(
        <div className="mt-12 mb-6">
            <p className="font-medium text-center my-5">You can add and delete more items here.</p>
            <i className="text-sm mx-auto block text-center text-red-500">Please note these items will use same address provided for your shipment</i>
            
            <div className="flex flex-wrap gap-4 flex-col md:justify-center md:flex-row my-8">
                {
                    items.map(item => (
                        <div key={item.id} className="flex flex-col relative justify-center md:w-[45%] lg:w-[32%] text-center h-40 items-center gap-2 py-8 px-2 rounded-lg border border-gray-400">
                            <IconButton aria-label="delete item" className="text-red-500 absolute top-2 right-3" onClick={() => handleRemoveItem(item.id)}>
                                <FaTrash size={17} />
                            </IconButton>
                            <Image src="/icons/overseas-shipping-box-icon.svg" loading="eager" width={40} height={40} alt="" aria-hidden="true" />
                            <h4 className="font-medium">{item.storeName}:</h4>
                            <p className="capitalize text-xs">{item.desc}</p>
                        </div>
                    ))
                }
                <Link href={overseasShippingItemInfoPage} className="md:w-[45%] lg:w-[32%] flex flex-col text-center h-40 justify-center items-center gap-2 py-8 px-2 rounded-lg border border-gray-400 hover:shadow-md transition ease-in-out duration-200">
                    <FaPlusCircle aria-label="add item" className="text-[1.9rem]" />
                    <div>
                        <p className="font-medium">Add Item</p>
                        <p className="text-xs">Add more items to your shipment</p>
                    </div>
                </Link>
            </div>

            <button onClick={handleCheckForSavedItem} className="block rounded-md text-white bg-black font-medium p-3 text-center mx-auto w-full md:w-[20em] mt-8  hover:opacity-90 focus:bg-transparent focus:text-black focus:outline focus:outline-2 focus:outline-black">Proceed</button>
            <DeleteOverseasShippingItemModal setOpenDeleteModal={setShowDeleteModal} openDeleteModal={showDeleteModal} deleteItem={() => dispatch(removeItem({ id: aboutToDeletedItemId }))} />
        </div>
    )
}