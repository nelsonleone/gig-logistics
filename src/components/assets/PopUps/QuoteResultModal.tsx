import { Box, IconButton, Modal } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { IQuoteResultModalData } from "../../../../types";
import { inter, roboto_slab } from "@/app/fonts";
import { FaNairaSign } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io";

interface IProps extends IQuoteResultModalData {
    open: boolean,
    handleClose: () => void;
    packageType: "document" | "non-document" | undefined
}


export default function QuoteResultModal({ open, handleClose, quantity, weight, totalCostForShipment,packageType }:IProps){
    
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="quote_result_modal"
            >
            <div className={` ${inter.className} w-[90%] overflow-y-auto h-[30em] top-0 bottom-0 absolute left-0 m-auto md:max-w-[30em] md:w-[30em] right-0 rounded-lg  shadow-xl bg-[#FFFFFF] text-[#374151] px-0 pt-10 text-center`}>
                <IconButton aria-control="quote_result_modal" onClick={handleClose} aria-expanded={open ? "true" : "false"} className="absolute top-4 right-4">
                    <IoMdClose />
                </IconButton>
                <div className="px-10">
                    <h2 id="modal-modal-title" className={` ${roboto_slab.className} font-bold text-center text-3xl my-8`}>
                    Shipment Cost Estimate
                    </h2>

                    <p id="modal-modal-description">
                    This is just an estimated cost for your shipment. Actual price may vary after creating a shipment.
                    </p>

                    <div className="mx-auto text-center w-full flex justify-center">
                        <Image 
                        src="/images/gold-box.svg"
                        alt="Gold Box"
                        priority={true}
                        loading="eager"
                        width={250}
                        height={250}
                        />
                    </div>
                    
                    {
                        packageType &&
                        <div className="my-4 flex flex-col md:flex-row gap-8 justify-between">
                            <p>Package Type</p>
                            <strong className="font-medium capitalize text-lg">{packageType}</strong>
                        </div>
                    }

                    <div className="flex justify-between gap-8 my-4">
                        <p>Quantity: <span>{quantity}</span></p>
                        <p>Weight: <span>{weight}</span>kg</p>
                    </div>
                </div>

                <div className="px-2 flex flex-col justify-center md:flex-row  gap-10 bg-gray-200 p-8 mt-6 w-full items-center">
                    <p>Total Item Cost</p>
                    <strong className="text-lg md:text-2xl flex gap-1 items-center">
                        <FaNairaSign aria-label="naira"/>
                        <span>{totalCostForShipment.toLocaleString('en-US')}</span>
                    </strong>
                </div>
            </div>
        </Modal>
    )
}