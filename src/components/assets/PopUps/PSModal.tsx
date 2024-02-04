import { roboto_slab } from "@/app/fonts";
import { IconButton, Modal } from "@mui/material";
import { IoMdClose } from "react-icons/io";

interface IMultiUseModalProps{
    open: boolean,
    onClose: () => void,
    heading: string,
    text: string
}

export default function PSModal(props:IMultiUseModalProps){
    return(
        <Modal open={props.open} onClose={props.onClose} id="pssm_modal">
            <div className="max-h-fit overflow-hidden z-10 h-80 text-white bg-white flex flex-col justify-center shadow-lg rounded-lg p-4 md:p-8 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em]   ">
                <IconButton aria-control="pssm_modal" onClick={props.onClose} aria-expanded={props.open ? "true" : "false"} className="absolute top-4 right-4 text-white">
                    <IoMdClose />
                </IconButton>
                <div className="absolute w-full h-full -z-10 left-0 bottom-0 m-auto top-0 right-0 bg-cover bg-center bg-no-repeat bg-[url('/images/green-bag.webp')] brightness-[.6]"></div>
                <h2 className={`${roboto_slab.className} font-semibold text-3xl my-8` }>{props.heading}</h2>
                <p className="">{props.text}</p>
            </div>
        </Modal>
    )
}