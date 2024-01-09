"use client"

import { useAppSelector } from "@/redux/customHooks"
import { useForm, useWatch } from "react-hook-form"
import { XpressDropOffInfo } from "../../types"
import XpressDropOffSenderSection from "./XpressDropOffSenderSection"
import XpressDropOffReceiverSection from "./XpressDropOffReceiverSection"
import XpressDropOffDeliveryItemsSection from "./XpressDropOffDeliveryItemsSection"

export default function XpressDropOffFormContainer(){

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors} } = useForm<XpressDropOffInfo>({
        defaultValues:{
            sender: {
                firstName,
                lastName,
                email,
                phoneNumber
            }
        }
    })
    const deliveryOptionType = useWatch({ control, name: 'receiver.deliveryOptionType.value'})
    const selectedStateOrCity = useWatch({ control, name: 'receiver.deliveryOption.terminalPickup.stateOrCity'})

    return(
        <form>
            <XpressDropOffSenderSection errors={errors} control={control} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
            <XpressDropOffReceiverSection errors={errors} control={control} selectedStateOrCity={selectedStateOrCity} deliveryOptionType={deliveryOptionType} />
            <XpressDropOffDeliveryItemsSection control={control} errors={errors}  />
        </form>
    )
}