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
import { setShowAlert } from "@/redux/slices/alertSlice"
import { cleanXpressDropOffInfo } from "@/helperFns/cleanXpressDropOffInfo"
import LoadingEllipse from "./assets/Loaders/LoadingEllipse"
import { useRouter } from "next/navigation"

export default function XpressDropOffFormContainer(){

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors, isSubmitting }, reset, clearErrors, setError, setValue, handleSubmit } = useForm<XpressDropOffInfo>({
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
    const dispatch = useAppDispatch()
    const deliveryItems = useWatch({ control, name: 'deliveryItems'})
    const router = useRouter()
    const uid = useAppSelector(store => store.authUser.uid)

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

        try{
            const cleanedDropOffInfo = cleanXpressDropOffInfo(data)
            
            await fetch(`/api/create_xpressDropoff?uid=${uid}`,{
                method: "POST",
                body: JSON.stringify(cleanedDropOffInfo)
            })

            reset()

            dispatch(setShowSnackbar({
                mssg: "Your DropOff have been created",
                severity: AlertSeverity.SUCCESS
            }))

            router.push("/app-panel/dropoff/manage")
        }

        catch(err:unknown|any){
            dispatch(setShowAlert({
                mssg: err.message || "Error Occurred Creating DropOff",
                severity: AlertSeverity.ERROR
            }))
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
            <XpressDropOffEstimatedCostSection deliveryItems={deliveryItems} />

            <button disabled={isSubmitting} className={`${inter.className} relative min-h-[3.8em] text-center w-full md:w-96 bg-black text-white font-medium rounded-md my-8 md:my-10 mx-auto block`}>
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Proceed"
                }
            </button>
        </form>
    )
}