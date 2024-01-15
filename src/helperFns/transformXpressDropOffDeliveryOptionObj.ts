import { XpressDropOffDeliveryType } from "@/enums";
import { IXpressReceiverInfo, IXpressReceiverInfoTransformed } from "../../types";


export function transformXpressDropOffDeliveryOptionObj(info:IXpressReceiverInfo) : IXpressReceiverInfoTransformed {

    const { fullName, phoneNumber, deliveryOptionType, deliveryOption } = info

    if (deliveryOptionType.value === XpressDropOffDeliveryType.HomeDelivery) {
        return {
            fullName,
            phoneNumber,
            homeAddress: deliveryOption.homeDelivery.address,
        }
    }
    
    else if (deliveryOptionType.value === XpressDropOffDeliveryType.TerminalPickup){
        return {
            fullName,
            phoneNumber,
            stateOrCity: deliveryOption.terminalPickup.stateOrCity.value,
            pickupTerminal: deliveryOption.terminalPickup.closestGIGLCenter?.value,
        }
    }

    else {
       return{
            fullName,
            phoneNumber
       }
    }
}
