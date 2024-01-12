"use client"

import { useAppSelector } from "@/redux/customHooks"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { XpressDropOffInfo } from "../../types"
import XpressDropOffSenderSection from "./XpressDropOffSenderSection"
import XpressDropOffReceiverSection from "./XpressDropOffReceiverSection"
import XpressDropOffDeliveryItemsSection from "./XpressDropOffDeliveryItemsSection"
import XpressDropOffEstimatedCostSection from "./XpressDropOffEstimatedCostSection"
import { inter } from "@/app/fonts"
import { useEffect } from "react"

export default function XpressDropOffFormContainer(){

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors, isDirty }, clearErrors, setError, register, setValue, handleSubmit } = useForm<XpressDropOffInfo>({
        defaultValues:{
            sender: {
                firstName,
                lastName,
                email,
                phoneNumber
            },
            deliveryItems: []
        }
    })
    const deliveryOptionType = useWatch({ control, name: 'receiver.deliveryOptionType.value'})
    const selectedStateOrCity = useWatch({ control, name: 'receiver.deliveryOption.terminalPickup.stateOrCity'})
    const deliveryItems = useWatch({ control, name: 'deliveryItems'})
    const stateOrCity = useWatch({ control, name: 'receiver.deliveryOption.terminalPickup.stateOrCity.value' })


    const handleCreateXpressDropOff : SubmitHandler<XpressDropOffInfo> = (data) => {
        if(deliveryItems && !deliveryItems.length){
            setError('deliveryItems', {
                type: 'manual',
                message: 'Please Add A Delivery Item',
            })

            console.log(errors)
            return;
        }
        console.log(data)
    }

    useEffect(() => {
        if(isDirty){
            register('receiver.deliveryOption.terminalPickup.closestGIGLCenter.value',{ value: "" })
        }
    },[stateOrCity])

    useEffect(() => {
        if(deliveryItems.length && errors?.deliveryItems?.message){
            clearErrors('deliveryItems')
        }
    },[deliveryItems.length])

    return(
        <form className="md:w-2/3 md:mx-auto lg:w-[60%]" onSubmit={handleSubmit(handleCreateXpressDropOff)}>
            <XpressDropOffSenderSection errors={errors} control={control} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
            <XpressDropOffReceiverSection errors={errors} control={control} selectedStateOrCity={selectedStateOrCity} deliveryOptionType={deliveryOptionType} />
            <XpressDropOffDeliveryItemsSection deliveryItemError={errors.deliveryItems?.message} setValue={setValue} control={control} />
            <XpressDropOffEstimatedCostSection />

            <button className={`${inter.className} w-full md:w-[28em] bg-black text-white font-medium rounded-md p-4 my-8 md:my-10 mx-auto block`}>Proceed</button>
        </form>
    )
}