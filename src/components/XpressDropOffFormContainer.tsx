"use client"

import { useAppDispatch, useAppSelector } from "@/redux/customHooks"
import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import { XpressDropOffInfo } from "../../types"
import XpressDropOffSenderSection from "./XpressDropOffSenderSection"
import XpressDropOffReceiverSection from "./XpressDropOffReceiverSection"
import XpressDropOffDeliveryItemsSection from "./XpressDropOffDeliveryItemsSection"
import XpressDropOffEstimatedCostSection from "./XpressDropOffEstimatedCostSection"
import { inter } from "@/app/fonts"
import { useEffect } from "react"
import { setShowSnackbar } from "@/redux/slices/snackbarSlice"
import { AlertSeverity } from "@/enums"
import { setShowRingLoader } from "@/redux/slices/ringLoaderSlice"
import { setShowAlert } from "@/redux/slices/alertSlice"
import { cleanXpressDropOffInfo } from "@/helperFns/cleanXpressDropOffInfo"

export default function XpressDropOffFormContainer(){

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors, isSubmitting }, clearErrors, setError, register, setValue, handleSubmit } = useForm<XpressDropOffInfo>({
        defaultValues:{
            sender: {
                firstName,
                lastName,
                email,
                phoneNumber
            },
            deliveryItems: [],
            receiver: {
                phoneNumber: "sjd"
            }
        }
    })
    const deliveryOptionType = useWatch({ control, name: 'receiver.deliveryOptionType.value'})
    const selectedStateOrCity = useWatch({ control, name: 'receiver.deliveryOption.terminalPickup.stateOrCity'})
    const dispatch = useAppDispatch()
    const deliveryItems = useWatch({ control, name: 'deliveryItems'})

    const handleCreateXpressDropOff : SubmitHandler<XpressDropOffInfo> = async(data) => {
        if(deliveryItems && !deliveryItems.length){
            setError('deliveryItems', {
                type: 'manual',
                message: 'Please Add A Delivery Item',
            })
            dispatch(setShowSnackbar({
                severity: AlertSeverity.ERROR,
                mssg: "Please Add A Delivery Item"
            }))
            return;
        }
        console.log(data)

        try{
            dispatch(setShowRingLoader(true))
            const xc = cleanXpressDropOffInfo(data)
            console.log(xc)
        }

        catch(err:unknown|any){
            dispatch(setShowAlert({
                mssg: err.message || "Error Occurred Creating DropOff",
                severity: AlertSeverity.ERROR
            }))
        }

        finally{
            dispatch(setShowRingLoader(false))
        }
    }

    useEffect(() => {
        if(deliveryItems.length && errors?.deliveryItems?.message){
            clearErrors('deliveryItems')
        }
    },[deliveryItems.length])

    return(
        <form className="md:mx-auto md:w-[32em]" onSubmit={handleSubmit(handleCreateXpressDropOff)}>
            <XpressDropOffSenderSection errors={errors} control={control} firstName={firstName} lastName={lastName} email={email} phoneNumber={phoneNumber} />
            <XpressDropOffReceiverSection errors={errors} control={control} selectedStateOrCity={selectedStateOrCity} deliveryOptionType={deliveryOptionType} />
            <XpressDropOffDeliveryItemsSection deliveryItemError={errors.deliveryItems?.message} setValue={setValue} control={control} />
            <XpressDropOffEstimatedCostSection />

            <button disabled={isSubmitting} className={`${inter.className} w-full md:w-[28em] bg-black text-white font-medium rounded-md p-4 my-8 md:my-10 mx-auto block`}>Proceed</button>
        </form>
    )
}