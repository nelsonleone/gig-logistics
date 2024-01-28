import { XpressDropOffDeliveryType } from "@/enums";
import { ServerReadyXpressDropOffInfo } from "../../types";
import { NextResponse } from "next/server";

export async function checkDropOffCreationInfo(info: Pick<ServerReadyXpressDropOffInfo,'receiver'|'sender'>){
    if(!info.sender.firstName || !info.sender.lastName || !info.sender.phoneNumber || !info.sender.location){
        return NextResponse.json({ message: "Error Creating DropOff: Sender info is incomplete" }, { status: 400 })
    }

    if(!info.receiver.fullName ||!info.receiver.phoneNumber){
        return NextResponse.json({ message: "Error Creating DropOff: Receiver Info Is incomplete"}, { status: 400 }) 
    }

    if(info.receiver.deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery){
        if(!info.receiver.homeAddress){
            return NextResponse.json({ message: "Error Creating DropOff: Add your home address for 'Home Delivery'"}, { status: 400 }) 
        }
    }
    else if(info.receiver.deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup){
        if(!info.receiver.pickupTerminal || !info.receiver.stateOrCity){
            return NextResponse.json({ message: "Error Creating DropOff: Choose a state/city and pickup terminal for 'Terminal Pickup'"}, { status: 400 }) 
        }
    }
}