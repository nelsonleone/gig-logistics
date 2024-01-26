import { cookies } from "next/headers"
import { SavedDropOffs } from "../../../../../../types";
import AppPanelMCContainer from "@/components/AppPanelPagesMCContainer";
import BackBtn from "@/components/assets/BackBtn";
import { BsSendArrowUpFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { formatToWordsString } from "@/helperFns/formatDates";
import { XpressDropOffDeliveryType } from "@/enums";
import Image from "next/image";
import CancelDropOffBtn from "@/components/CancelDropOffBtn";
import { capitalizeString } from "@/helperFns/formatString";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id:string }}){

    const authSessionToken = cookies().get('authSessionToken')?.value || "";
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_APP_URL}/api/getSingleDropOff?id=${params.id}`,{
        method: "GET",
        headers: {
            Cookie: `authSessionToken=${authSessionToken}`,
        }
    })

    const dropoff : SavedDropOffs = await res.json()

    if(!dropoff){
        notFound()
    }

    return(
        dropoff ?
        <AppPanelMCContainer className="relative px-2 md:p-8">
            <BackBtn className="top-8" />
            <section>
                <span className="absolute right-3 top-8 text-sm">{formatToWordsString(dropoff.createdAt)}</span>
                <div className="md:flex justify-between gap-14">
                    <div className="border-gray-100 overflow-hidden rounded-md shadow-md py-4 px-3 md:px-6 my-6 md:w-1/2">
                        <div>
                            <h2 className="rounded-md bg-black text-white block w-full p-4 font-semibold ">Viewing Dropoff - {dropoff.dropOffID}</h2>
                            <button className="transition border border-white duration-300 ease-in-out bg-red-500 text-white p-3 w-32 rounded-sm my-4 hover:bg-transparent hover:text-red-600 hover:border hover:border-red-600 focus:bg-transparent focus:text-red-600 focus:border focus:border-red-600">Track</button>
                        </div>
                        <h3 className="flex gap-4">
                            <BsSendArrowUpFill className="text-red-600 text-2xl" />
                            <span className="font-medium text-lg">Sender's Details:</span>
                        </h3>
                        <div className="flex flex-col gap-4 mt-4">
                            <p>{dropoff.sender.firstName} {dropoff.sender.lastName}</p>
                            <p>{dropoff.sender.email}</p>
                            <p>{dropoff.sender.phoneNumber}</p>

                            <div>
                                <h4 className="font-medium">Location:</h4>
                                <p className="uppercase">{dropoff.sender.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-gray-100 rounded-md shadow-md py-4 px-3 md:px-6 my-6 md:w-1/2">
                        <h3 className="flex gap-4">
                            <GiReceiveMoney className="text-red-600 text-2xl" />
                            <span className="font-medium text-lg">Receiver's Details:</span>
                        </h3>

                        <div className="flex flex-col gap-4 mt-4">
                            <p>{dropoff.receiver.fullName}</p>
                            <p>{dropoff.receiver.phoneNumber}</p>
                            <div>
                                <h4 className="font-medium">Delivery Method:</h4>
                                <p>{dropoff.receiver.deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery ? "Home Delivery" : "Terminal Pickup"}</p>
                                <p>{dropoff.receiver.deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery ? dropoff.receiver.homeAddress : dropoff.receiver.pickupTerminal}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-gray-100 rounded-md shadow-lg py-4  px-3 my-6 mt-4 md:flex flex-wrap md:gap-5 justify-between md:w-4/6 md:mx-auto">
                    {
                        dropoff.deliveryItems.map((item,index) => (
                            <div key={index} className="border-b border-b-gray-300 last:border-none basis-[45%] my-8 md:border-none">
                                <Image src={item.itemImage} alt={`${item.item} image`} className="rounded-md w-auto md:w-72 h-auto md:h-52" width={150} height={150} quality={100} priority />
                                <div>
                                    <p className="mb-6">{item.item.toUpperCase()}</p>
                                    <div className="mb-4">
                                        <p id={`${dropoff.dropOffID}-item${index}-category`} className="font-medium">Item Category:</p>
                                        <p aria-labelledby={`${dropoff.dropOffID}-item${index}-category`}>{capitalizeString(item.category)}</p>
                                    </div>  
                                    <div className="mb-4">
                                        <p id={`${dropoff.dropOffID}-item${index}-weight`}  className="font-medium">Weight Range:</p>
                                        <p aria-labelledby={`${dropoff.dropOffID}-item${index}-weight`}>{item.weight}KG</p>
                                    </div> 
                                    <div className="mb-4">
                                        <p id={`${dropoff.dropOffID}-item${index}-quantity`}  className="font-medium">Quantity:</p>
                                        <p aria-labelledby={`${dropoff.dropOffID}-item${index}-quantity`}>{item.quantity} piece(s)</p>
                                    </div> 
                                    <div className="mb-4">
                                        <p id={`${dropoff.dropOffID}-item${index}-value`}  className="font-medium">Value:</p>
                                        <p aria-labelledby={`${dropoff.dropOffID}-item${index}-value`}>{new Intl.NumberFormat('en-US', {style: 'currency',currency: 'NGN',}).format(parseInt(item.value))}</p>
                                    </div> 
                                </div> 
                            </div>
                        ))
                    }
                </div>
                <CancelDropOffBtn dropOffID={dropoff?.dropOffID || ""} text="Cancel DropOff" />               
            </section>
        </AppPanelMCContainer>
        :
        null
    )
}