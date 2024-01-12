"use client"

import { Divider } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import XpressDropOffAddItemModal from "./XpressDropOffAddItemModal";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { DeliveryItems, XpressDropOffInfo } from "../../types";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { inter } from "@/app/fonts";

interface IProps {
    control: Control<XpressDropOffInfo,undefined>,
    setValue: UseFormSetValue<XpressDropOffInfo>,
    deliveryItemError?: string
}

function XpressDropOffDeliveryItemsSection(props:IProps) {

    const { control, setValue, deliveryItemError } = props;
    const [open,setOpen] = useState(false)
    const [newDeliveryItem,setNewDeliveryItem] = useState<DeliveryItems>()
    const deliveryItems = useWatch({ control, name: 'deliveryItems'})

    useEffect(() => {
        if(newDeliveryItem && deliveryItems){
            const allDeliveryItems : DeliveryItems[] = [...deliveryItems,newDeliveryItem as DeliveryItems]

            setValue('deliveryItems',allDeliveryItems)

            notifications.show({
                id: 'deliveryItem-added',
                withCloseButton: true,
                autoClose: 4000,
                title: "Xpress DropOff",
                message: 'Delivery Item Added',
                color: '#1ca2bd',
                className: `${inter.className}`,
                style: { backgroundColor: 'red', borderRadius: "10px" },
                loading: false,
            })
        }
    },[newDeliveryItem])

    return (
        <section className="shadow-lg relative bg-white drop-shadow-md rounded-md my-8 p-4 w-full pb-10">
            <div className="flex justify-between mb-4">
                <h3 className="font-medium text-lg">Delivery Items</h3>
                <button type="button" onClick={() => setOpen(true)} className="flex text-sm justify-between items-center gap-2 transition-opacity duration-200 ease-in-out text-white bg-[#374151] p-3 rounded-sm hover:opacity-80">
                    <span>Add Item </span>
                    <IoMdAddCircle className="text-lg" />
                </button>
            </div>
            <Divider />
            <div className="mt-4 grid grid-cols-4 grid-row-1 justify-between">
                <p id="deliveryItems-item">Item</p>
                <p id="deliveryItems-name">Name</p>
                <p id="deliveryItems-weight">Weight</p>
                <p id="deliveryItems-quantity">Quantity</p>
            </div>

            {
                deliveryItemError &&
                <p role="alert" className="text-red-500 text-sm mt-3 absolute bottom-4 left-4">{deliveryItemError}</p>
            }

            <XpressDropOffAddItemModal setDeliveryItem={setNewDeliveryItem} open={open} handleClose={() => setOpen(prev => prev = !prev)} />
        </section>
    )
}

export default XpressDropOffDeliveryItemsSection;