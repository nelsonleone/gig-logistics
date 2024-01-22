import { DeliveryItems, XpressDropOffInfo } from "../../types";
import Image from "next/image"
import XpressDropOffDeliveryItemMenu from "./XpressDropOffDeliveryItemMenu";
import { Control, UseFormSetValue } from "react-hook-form";
import { useState } from "react";
import ReactLoading from 'react-loading';
import { motion } from 'framer-motion'

export default function XpressDropOffItem({ item, control, index, setValue }: { control: Control<XpressDropOffInfo,undefined>, index:number, item:DeliveryItems, setValue: UseFormSetValue<XpressDropOffInfo> }){

    const [beingDeleted,setBeingDeleted] = useState(false)

    return(
        <motion.div className="relative grid my-4 items-center" style={{gridTemplateColumns:'repeat(4, minmax(0, 1fr)) .5em'}} key={`${item.id}-x2`} exit={{ opacity: 0, height: 0 }} transition={{ ease: "linear", duration: 0.5 }}>
            <Image src={item.itemImage} className="rounded-sm h-16 object-cover w-20" aria-labelledby="deliveryItems-itemImg" loading="eager" priority width={80} height={50} alt="Item Image" />
            <p aria-labelledby="deliveryItems-name" className="text-ellipsis text-sm md:text-base">{item.category.value !== "others" ?  item.item.label?.toUpperCase() : item.otherItemName}</p>
            <p aria-labelledby="deliveryItems-weight" className="text-sm md:text-base">{item.category.value !== "others" ?  `${item.weight.value}KG` : `${item.otherItemWeight}KG`}</p>
            <p aria-labelledby="deliveryItems-quantity" className="text-sm md:text-base">{item.quantity ? item.quantity : ""}piece(s)</p>
            <XpressDropOffDeliveryItemMenu control={control} setValue={setValue} index={index} setBeingDeleted={setBeingDeleted} />
 
            {
                beingDeleted &&
                <div className="absolute bg-[hsla(0,0%,87%,1)] top-0 left-0 h-full w-full rounded-sm flex justify-center items-center">
                    <ReactLoading type="bubbles" color="#374151" width="4em" height="auto" />
                </div>
            }
        </motion.div>
    )
}