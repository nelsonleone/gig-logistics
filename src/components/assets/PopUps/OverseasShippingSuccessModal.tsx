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
            <div className="h-80 bg-white text-[#374151] flex flex-col justify-center items-center shadow-lg rounded-lg p-4 md:p-8 absolute top-0 bottom-0 left-0 right-0 m-auto w-[95%] md:w-[30em]">
                <h2 className={`${roboto_slab.className} font-semibold text-3xl my-8` }>Shipment Is Being Processed</h2>
                <Image src="/icons/success-check.svg" width={120} height={120} alt="success" />
                <button onClick={handleCloseSuccessModal} className="bg-black py-4 px-7 my-6 font-medium text-white rounded block text-center mx-auto hover:drop-shadow-lg transition ease-linear duration-200">Thank You</button>
            </div>
        </Modal>
    )
}