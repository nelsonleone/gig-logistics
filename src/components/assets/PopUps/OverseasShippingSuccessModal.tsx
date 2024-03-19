import { roboto_slab } from "@/app/fonts";
import { Modal } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps{
    open: boolean,
    id: string
}

export default function OverseasShippingSuccessModal(props:IProps){

    const router = useRouter()

    const handleCloseSuccessModal = () => {
        router.push("/app-panel/overseas-shipping")
    }

    return(
        <Modal open={props.open} id={`${props.id}-success-modal`}>

        </Modal>
    )
}