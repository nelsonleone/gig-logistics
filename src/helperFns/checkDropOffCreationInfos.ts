import { XpressDropOffDeliveryType } from "@/enums";
import { ServerReadyXpressDropOffInfo } from "../../types";

export async function checkDropOffCreationInfo(info: Pick<ServerReadyXpressDropOffInfo,'receiver'|'sender'>){
    if(!info.sender.firstName || !info.sender.lastName || !info.sender.phoneNumber || !info.sender.location){
        throw new Error("Error Creating DropOff: Sender info is incomplete")
        return;
    }

    if(!info.receiver.fullName ||!info.receiver.phoneNumber){
        throw new Error("Error Creating DropOff: Receiver info is incomplete") 
        return;
    }

    if(info.receiver.deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery){
        if(!info.receiver.homeAddress){
            throw new Error("Error Creating DropOff: Add your home address for 'Home Delivery'") 
            return;
        }
    }
    else if(info.receiver.deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup){
        if(!info.receiver.pickupTerminal || !info.receiver.stateOrCity){
            throw new Error("Error Creating DropOff: Choose a state/city and pickup terminal for 'Terminal Pickup'") 
            return;
        }
    }
}