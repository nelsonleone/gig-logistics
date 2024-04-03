"use client"

import { SubmitHandler, useForm, useWatch } from "react-hook-form"
import CustomTextInput from "@/components/assets/inputs/CustomTextInput";
import CustomPhoneInput from "@/components/assets/inputs/CustomPhoneInput";
import CustomQuotePageSelect from "@/components/assets/inputs/CustomQuotePageSelect";
import { XpressDropOffDeliveryType } from "@/enums";
import { getXpressDropOffLocationData } from "@/helperFns/getXpressDropOffLocationData";
import { useCallback, useEffect, useState } from "react";
import { setXpressDropOffClosestGIGLCenter } from "@/helperFns/setXpressDropOffClosestGIGLCenter";
import { OverseasShippingDeliveryInfo } from "../../../types";
import OverseasShippingSuccessModal from "../assets/PopUps/OverseasShippingSuccessModal";
import { useAppSelector } from "@/redux/customHooks";

export default function DeliveryPageMC(){

    const { email, firstName, lastName, phoneNumber } = useAppSelector(store => store.authUser)
    const { control, handleSubmit, setValue, clearErrors, setError, formState: { errors, isDirty, isSubmitting }} = useForm<OverseasShippingDeliveryInfo>({
        defaultValues: {
            receiverInfo: {
                fullName: `${firstName} ${lastName}`,
                email,
                phoneNumber
            }
        }
    })
    const id = "overseasShippingDeliveryDetails"
    const deliveryOptionType = useWatch({ control, name: 'deliveryOption.deliveryOptionType.value'})
    const stateOrCity = useWatch({ control, name: 'deliveryOption.terminalPickup.stateOrCity.value'})
    const closestGIGLCenter = useWatch({ control, name:"deliveryOption.terminalPickup.closestGIGLCenter"})
    const [submittedShipmentDetails,setSubmittedShipmentDetails] = useState(false)

    const handleFinalizeShipping : SubmitHandler<OverseasShippingDeliveryInfo> = async(data) => {
        setSubmittedShipmentDetails(true)
    }

    const handleClosetPickupAreaRefresh = useCallback(() => {
        return setXpressDropOffClosestGIGLCenter(stateOrCity)
    },[stateOrCity])

    useEffect(() => {
        if(!isDirty)return;
        setValue('deliveryOption.terminalPickup.closestGIGLCenter',undefined)
        setError('deliveryOption.terminalPickup.closestGIGLCenter',{ message: "Closest terminal pickup center is required"})
    },[stateOrCity])

    useEffect(() => {
        if(isDirty && closestGIGLCenter){
            clearErrors('deliveryOption.terminalPickup.closestGIGLCenter')
        }
    },[closestGIGLCenter])

    return(
        <div className="mt-24 mb-6 md:w-[28em] lg:w-[27em] md:mx-auto">
            <p className="mb-7 text-center">To guarantee hassle-free shipping please input details of item(s) purchased from store in order to complete the overseas shipping process.</p>
            <form onSubmit={handleSubmit(handleFinalizeShipping)}>
                <section className="shadow-lg bg-base-color1 drop-shadow-md rounded-md mt-12 w-full pb-10 flex overflow-hidden flex-col items-center relative">
                    <h4 className="w-full text-center text-base-color1 shadow-sm-light bg-[hsl(0,2%,10%)] font-medium p-3 mb-8">Receiver's Details</h4>
                    <div className="w-full px-2 md:px-10">
                        <CustomTextInput
                            label="Receiver name" 
                            control={control}
                            placeholder="Receiver name"
                            error={errors?.receiverInfo?.fullName?.message}
                            required="Please this field is required"
                            defaultValue={firstName ? `${firstName} ${lastName}` : undefined}
                            containerStyles="w-full"
                            labelStyles="mb-2 md:text-base block self-start ms-1"
                            inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                            id={`${id}-fullName`} 
                            name="receiverInfo.fullName"
                        />
                        
                        <CustomPhoneInput 
                            name="receiverInfo.phoneNumber" 
                            id={`${id}-RphoneNumber`} 
                            label="Phone Number"
                            required="Please this field is required"
                            labelStyles="mb-4 block self-start ms-1"
                            placeholder="Phone Number"
                            className="phoneInput-xpressDropOff h-[3.6em]"
                            control={control}
                            value={phoneNumber}
                            containerStyles="w-[100%] mx-auto"
                            error={errors?.receiverInfo?.phoneNumber?.message}
                        />

                        <CustomTextInput
                            label="Receiver's email" 
                            control={control}
                            inputType="email"
                            required="Please this field is required"
                            rule={{ pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email format'
                            }}}
                            placeholder="Receiver's email"
                            error={errors?.receiverInfo?.email?.message}
                            defaultValue={email}
                            containerStyles="w-full mt-5"
                            labelStyles="mb-2 md:text-base block self-start ms-1"
                            inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                            id={`${id}-email`} 
                            name="receiverInfo.email"
                        />
                    </div>
                </section>

                <section className="shadow-lg bg-base-color1 drop-shadow-md rounded-md mt-12 w-full pb-10 flex overflow-hidden flex-col items-center relative">
                    <h4 className="w-full text-center text-base-color1 shadow-sm-light bg-[hsl(0,2%,10%)] font-medium p-3 mb-8">Delivery Details</h4>

                    <div className="w-full px-2 md:px-10">
                        <div className="w-full">
                            <label htmlFor={`${id}-deliveryOptionType`} className="mb-4 block self-start ms-1">Select Delivery Option</label>
                            <CustomQuotePageSelect
                                name="deliveryOption.deliveryOptionType" 
                                id={`${id}-deliveryOptionType`} 
                                control={control}
                                selectStyles={{height: "3.4em"}}
                                placeholder="Delivery Options"
                                required="Please select a delivery option"
                                hasError={errors?.deliveryOption?.deliveryOptionType?.message ? true : false}
                                data={[
                                    {
                                        label: "Home Delivery",
                                        value: XpressDropOffDeliveryType.HomeDelivery
                                    },
                                    {
                                        label: "Terminal Pickup",
                                        value: XpressDropOffDeliveryType.TerminalPickup
                                    }
                                ]}
                                optionStyles={{
                                    color: "#374151"
                                }}
        
                            />
                        </div> 

                        
                        {
                            deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery ? 
                            <>
                                <CustomTextInput 
                                    label="Address" 
                                    control={control}
                                    placeholder="Address"
                                    error={errors?.deliveryOption?.homeDelivery?.address?.message}
                                    required="Please enter your address for home delivery"
                                    containerStyles="w-full"
                                    labelStyles="mb-2 md:text-base block self-start ms-1"
                                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                                    id={`${id}-address`} 
                                    name="deliveryOption.homeDelivery.address"
                                />
                                <p className="text-[#D5343A] text-xs italic">Please note that home delivery request attracts additional charges</p>
                            </>

                            :

                            deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup ? 

                            <>
                                <div className="w-full my-4">
                                    <label htmlFor={`${id}-stateOrCity`} className="mb-4 block self-start ms-1">Select State/City</label>
                                    <CustomQuotePageSelect 
                                        name="deliveryOption.terminalPickup.stateOrCity"  
                                        id={`${id}-stateOrCity`} 
                                        control={control}
                                        selectStyles={{
                                            height: "3.4em",
                                        }}
                                        placeholder="Select Destination State"
                                        hasError={errors?.deliveryOption?.terminalPickup?.stateOrCity?.message ? true : false}
                                        data={getXpressDropOffLocationData()}
                                        required={deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup && "Please select a destination state"}
                                        optionStyles={{
                                            color: "#374151"
                                        }}
                                    />
                                </div>

                                <div className="w-full my-4">
                                    <label htmlFor={`${id}-closestGIGLCenter`} className="mb-4 block self-start ms-1">Select Closest GIGL Center</label>
                                    <CustomQuotePageSelect 
                                        name="deliveryOption.terminalPickup.closestGIGLCenter"  
                                        id={`${id}-closestGIGLCenter`}
                                        control={control}
                                        selectStyles={{
                                            height: "3.4em",
                                        }}
                                        placeholder="Select Service Center"
                                        hasError={errors?.deliveryOption?.terminalPickup?.closestGIGLCenter?.message ? true : false}
                                        data={handleClosetPickupAreaRefresh()}
                                        required={deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup && "Please select a service center"}
                                        optionStyles={{
                                            color: "#374151"
                                        }}
                                        value={closestGIGLCenter}
                                    />
                                </div>
                            </>

                            :
                            null
                    }

                    </div>
                </section>
                <button disabled={isSubmitting} className="rounded-md block text-base-color1 bg-base-color2 font-medium p-[.9em] text-center mx-auto w-full md:w-80 my-12 hover:opacity-90 focus:bg-transparent focus:base-color2 focus:outline focus:outline-2 focus:outline-black">Proceed</button>
            </form>


            <OverseasShippingSuccessModal open={submittedShipmentDetails} id={id} />
        </div>
    )
}