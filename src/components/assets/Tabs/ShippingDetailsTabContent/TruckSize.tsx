import { IconButton, Modal } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { IoMdClose } from "react-icons/io"

interface IProps {
    open: boolean,
    onClose: () => void,
}

export default function TruckSize(props:IProps){

    const numArr = ["5","10","15","20","25","30"]
    const [selectedSize,setSelectedSize] = useState<number>()
    const router = useRouter()
    const pathName = usePathname()

    const handleNext = () => {
        router.push(`${pathName}/shipping-details?deliveryVehicle=Truck&truckSize=${selectedSize}`)
    }

    return(
        <Modal open={props.open} onClose={props.onClose} id="shipnow_trucksize_modal">
            <div className="w-[90%]  overflow-y-auto h-[30em] top-0 bottom-0 absolute left-0 m-auto md:max-w-[30em] md:w-[30em] right-0 rounded-lg  shadow-xl bg-[#FFFFFF] text-[#374151] px-8 pt-14 pb-8 text-center">
                <IconButton aria-controls="shipnow_trucksize_modal" onClick={props.onClose} aria-expanded={props.open ? "true" : "false"} className="absolute top-4 left-4 text-[#374151]">
                    <IoMdClose />
                </IconButton>
                <h4 className="font-bold text-3xl mb-5">Select truck size</h4>
                <p className="text-xl font-medium">Kindly select tonne size of a truck</p>

                <div className="flex flex-col gap-4 px-8 mt-8">
                    {
                        numArr.map(num => (
                            <button className={`${selectedSize === parseInt(num) ? "bg-gray-400 font-medium":"bg-gray-200"} cursor-pointer rounded-lg flex justify-center items-center p-4`} key={num} onClick={() => setSelectedSize(parseInt(num))}>
                                {num}
                            </button>
                        ))
                    }

                    <button onClick={handleNext} className="bg-black md:w-32 mt-4 md:mx-auto text-white rounded p-3 text-center font-medium border border-black hover:bg-transparent hover:text-black focus:bg-transparent focus:text-black transition duration-200 ease-in-out">Next</button>
                </div>
            </div>
        </Modal>
    )
}