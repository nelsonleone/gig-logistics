import { Box, Modal } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface IProps {
    open: boolean,
    handleClose: Dispatch<SetStateAction<boolean>>,
    quantity: string,
    weight: string,
    totalCost: number
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFFFFF',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
}

export default function QuoteResultModal({ open, handleClose, quantity, weight, totalCost }:IProps){
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <h2 id="modal-modal-title">
                   Shipment Cost Estimate
                </h2>

                <p id="modal-modal-description">
                 This is just an estimated cost for your shipment. Actual price may vary after creating a shipment.
                </p>

                <Image 
                  src="/images/gold-box.svg"
                  alt="Gold Box"
                  priority={true}
                  width={300}
                  height={300}
                />

                <div>
                    <p>Quantity: <span>{quantity}</span></p>
                    <p>Weight: <span>{weight}</span>kg</p>
                </div>

                <div>
                    <p>Total Item Cost</p>
                    <strong>₦{totalCost}</strong>
                </div>
            </Box>
        </Modal>
    )
}