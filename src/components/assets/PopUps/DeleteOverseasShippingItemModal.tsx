import { IconButton, Modal } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { IoMdClose } from "react-icons/io"

interface IProps{
    openDeleteModal: boolean,
    deleteItem: () => void,
    setOpenDeleteModal: Dispatch<SetStateAction<boolean>>
}

export default function DeleteOverseasShippingItemModal({ openDeleteModal, deleteItem, setOpenDeleteModal }:IProps){
    
    const id = "overseas-shipping-deleteItem-modal"

    return(
        <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)} id={id} className="flex justify-center items-center">
            <div className="relative outline-none outline-offset-0 focus:outline-none overflow-y-auto text-[#374151] bg-white shadow-lg rounded-md p-4 md:p-10 w-[95%] md:w-[32em]">
                <IconButton aria-controls={id} onClick={() => setOpenDeleteModal(false)} aria-expanded={openDeleteModal ? "true" : "false"} className="absolute top-4 right-4">
                    <IoMdClose />
                </IconButton>

                <h4>Delete this item?</h4>
                <p>Please note that deleted item can’t be recovered</p>

                <div className="flex gap-4 justify-between">
                    <button type="button" onClick={() => setOpenDeleteModal(false)} className="border mb-2 font-medium px-10 border-black rounded p-3">Cancel</button>
                    <button type="button" onClick={() => deleteItem()} className="border mb-2 font-medium px-10 bg-black rounded p-3">Delete</button>
                </div>
            </div>
        </Modal>
    )
}
