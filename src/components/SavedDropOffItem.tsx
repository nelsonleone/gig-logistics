import { SavedDropOffs } from "../../types";
import Link from "next/link";
import { XpressDropOffDeliveryType } from "@/enums";
import { formatToWordsString } from "@/helperFns/formatDates";
import { capitalizeString } from "@/helperFns/formatString";
import { inter } from "@/app/fonts";
import CancelDropOffBtn from "./CancelDropOffBtn";

export default function SavedDropOffItem(props:SavedDropOffs){

    return(
        <div className="border-gray-100 shadow-md rounded-sm md:rounded-md my-8 overflow-hidden">
            <Link href={`/app-panel/dropoff/manage/${props.dropOffID}`}>
                <h2 className={`${inter.className} bg-gray-100 p-4 font-medium`}>{props.dropOffID}</h2>
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
                        <CancelDropOffBtn text="Cancel" dropOffID={props.dropOffID} />  
                    </div>
                </div>
            </Link>
        </div>
    )
}