"use client"

import { useAppSelector } from "@/redux/customHooks"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { XpressDropOffInfo } from "../../types"
import XpressDropOffSenderSection from "./XpressDropOffSenderSection"
import XpressDropOffReceiverSection from "./XpressDropOffReceiverSection"
import XpressDropOffDeliveryItemsSection from "./XpressDropOffDeliveryItemsSection"
import XpressDropOffEstimatedCostSection from "./XpressDropOffEstimatedCostSection"
import { inter } from "@/app/fonts"

export default function XpressDropOffFormContainer(){

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors}, setValue, handleSubmit } = useForm<XpressDropOffInfo>({
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

    const handleCreateXpressDropOff : SubmitHandler<XpressDropOffInfo> = async(data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(handleCreateXpressDropOff)} className="md:w-2/3 md:mx-auto lg:w-[60%]">
            <XpressDropOffSenderSection errors={errors} control={control} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
            <XpressDropOffReceiverSection errors={errors} control={control} selectedStateOrCity={selectedStateOrCity} deliveryOptionType={deliveryOptionType} />
            <XpressDropOffDeliveryItemsSection setValue={setValue} control={control} />
            <XpressDropOffEstimatedCostSection />

            <button className={`${inter.className} w-full md:w-[30em] bg-black text-white font-medium rounded-md p-4 my-8 mx-auto block`}>Proceed</button>
        </form>
    )
}