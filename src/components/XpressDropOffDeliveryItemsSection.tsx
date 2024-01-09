"use client"

import { Divider } from "@mui/material";
import { IoMdAddCircle } from "react-icons/io";
import XpressDropOffAddItemModal from "./XpressDropOffAddItemModal";
import { Control, FieldErrors } from "react-hook-form";
import { XpressDropOffInfo } from "../../types";
import { useState } from "react";

interface IProps {
    control: Control<XpressDropOffInfo,undefined>,
    errors: FieldErrors<XpressDropOffInfo>
}

function XpressDropOffDeliveryItemsSection(props:IProps) {

    const { control, errors } = props;
    const [open,setOpen] = useState(false)

    return (
        <section>
            <div>
                <h3>Delivery Items</h3>
                <button>
                    <span>Add Item </span>
                    <IoMdAddCircle />
                </button>
            </div>'
            <Divider />
            <div>
                <p id="deliveryItems-item">Item</p>
                <p id="deliveryItems-name">Name</p>
                <p id="deliveryItems-weight">Weight</p>
                <p id="deliveryItems-quantity">Quantity</p>
            </div>

            <XpressDropOffAddItemModal open={open} handleClose={() => setOpen(prev => prev = !prev)} control={control} errors={errors} />
        </section>
    )
}

export default XpressDropOffDeliveryItemsSection;