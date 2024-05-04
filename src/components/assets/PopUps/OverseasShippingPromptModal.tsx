"use client"

import { IconButton, Modal } from "@mui/material"
import Link from "next/link"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"

export default function OverseasShippingPromptModal(){

    const [open,setOpen] = useState(true)
    const id = "overseas-shipping-prompt-modal1"

    return(
        <Modal open={open} id={id} className="flex justify-center items-center">
            <div className="h-[30em] md:h-[33em] relative outline-none outline-offset-0 focus:outline-none overflow-y-auto text-primary bg-base-color1 shadow-lg rounded-md p-4 md:p-10 w-[95%] md:w-[32em]">
                <IconButton aria-controls={id} onClick={() => setOpen(false)} aria-expanded={open ? "true" : "false"} className="absolute top-4 right-4">
                    <IoMdClose />
                </IconButton>

                <h4 className="font-bold text-3xl text-center my-8 capitalize drop-shadow-sm">Overseas Shipping</h4>
                <p className="text-center">
                    Overseas Shipping Detected
                    Shipping with GIGL from the UK is quick and easy.

                    Our UK hub ships to Nigeria weekly. Rates begin at £4.90 per kilo for regular items and £49 for items weighing between 5.1-10kg.

                    Shipment processing for the week ends on Thursday at 4 pm (GMT). Items arriving at our hub afterward will be shipped out the following week.

                    Delivery timeline is usually between three to five (3-5) Business days after items departure from our UK Experience Centre.
                    For more information on rates, charges, as well as terms and conditions, please visit <Link className="text-accent-color2 font-medium" href="https://giglogistics.com/faqs">https://giglogistics.com/faqs </Link>

                    With GIGL, overseas shipping is one less thing to worry about.
                </p>

                <button onClick={() => setOpen(false)} className="block rounded-sm text-base-color1 bg-base-color2 font-medium p-4 text-center mx-auto w-full md:w-[20em] mt-8  hover:opacity-90 focus:bg-transparent focus:text-base-color2 focus:outline focus:outline-2 focus:outline-base-color">Proceed</button>
            </div>
        </Modal>
    )
}