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
            <div>
                <h2 className={`${inter.className} bg-gray-100 p-4 font-medium lg:px-8`}>{props.dropOffID}</h2>
                <div className="md:flex justify-between p-3 md:pb-8 lg:px-8">
                    <Link  href={`/app-panel/dropoff/manage/${props.dropOffID}`} className="w-4/5">
                        <div>
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
                    </Link>

                    <div className="my-4 md:my-0">
                        <p className="text-cyan-600 underline decoration-dotted">{formatToWordsString(props.createdAt)}</p>
                        <CancelDropOffBtn text="Cancel" dropOffID={props.dropOffID} />  
                    </div>
                </div>
            </div>
        </div>
    )
}