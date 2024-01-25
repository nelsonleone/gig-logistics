import { SavedDropOffs } from "../../types";
import Link from "next/link";
import { XpressDropOffDeliveryType } from "@/enums";
import { formatToWordsString } from "@/helperFns/formatDates";
import { capitalizeString } from "@/helperFns/formatString";
import { inter } from "@/app/fonts";

export default function SavedDropOffItem(props:SavedDropOffs){

    return(
        <div className="border-gray-100 shadow-md rounded-sm md:rounded-md my-8 overflow-hidden">
            <Link href={`/app-panel/dropoff/manage/${props.dropOffID}`}>
                <h2 className={`${inter.className} bg-gray-100 p-4 font-medium`}>{props.trackingID}</h2>
                <div className="md:flex justify-between md:pb-8">
                    <div className="p-3">
                        <div>
                            <div>
                                <p className="font-medium">Sender: {props.sender.firstName} {props.sender.lastName}</p>
                                <span className="text-sm">{props.sender.location.toUpperCase()}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="font-medium">Receiver: {props.receiver.fullName}</p>
                            <p className="text-sm">{props.receiver.deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery ? props.receiver.homeAddress : `${props.receiver.pickupTerminal}...${capitalizeString(props.receiver.stateOrCity || "")}`}</p>
                        </div>
                    </div>

                    <div className="p-3 mb-4 md:mb-0">
                        <p className="text-cyan-600 underline decoration-dotted">{formatToWordsString(props.createdAt)}</p>
                        <button className="bg-red-300 rounded-md block border border-white my-4 p-2 text-center text-red-600 w-32 h-10 hover:bg-transparent hover:border hover:border-red-500 focus:bg-transparent hover:text-red-500 focus:outline-offset-0 hover:outline-offset-0 focus:border focus:border-red-500 focus:text-red-500 transition-all duration-200 ease-in-out">Cancel</button>
                    </div>
                </div>
            </Link>
        </div>
    )
}