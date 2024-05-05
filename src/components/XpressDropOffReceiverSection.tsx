"use client"

import CustomTextInput from "./assets/inputs/CustomTextInput";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { Control, FieldErrors, UseFormClearErrors, UseFormSetError, UseFormSetValue } from "react-hook-form";
import { XpressDropOffInfo } from "../../types";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { XpressDropOffDeliveryType } from "@/enums";
import { getXpressDropOffLocationData } from "@/helperFns/getXpressDropOffLocationData";
import { setXpressDropOffClosestGIGLCenter } from "@/helperFns/setXpressDropOffClosestGIGLCenter";
import { useCallback, useEffect } from "react";

interface IProps {
    control: Control<XpressDropOffInfo,undefined>,
    errors: FieldErrors<XpressDropOffInfo>,
    deliveryOptionType: XpressDropOffDeliveryType | "",
    selectedStateOrCity: { label:string, value: string },
    setValue: UseFormSetValue<XpressDropOffInfo>,
    isDirty: boolean,
    stateOrCity: string,
    closestGIGLCenter?: {
        label:string,
        value: string
    },
    setError: UseFormSetError<XpressDropOffInfo>,
    clearErrors: UseFormClearErrors<XpressDropOffInfo>
}

function XpressDropOffReceiverSection(props:IProps) {

    const { control, errors, stateOrCity, setError, clearErrors, closestGIGLCenter, deliveryOptionType, selectedStateOrCity, setValue, isDirty } = props;

    const handleClosetPickupAreaRefresh = useCallback(() => {
        return setXpressDropOffClosestGIGLCenter(selectedStateOrCity?.value)
    },[stateOrCity])

    
    useEffect(() => {
        if(!isDirty)return;
        setValue('receiver.deliveryOption.terminalPickup.closestGIGLCenter',undefined)
        setError('receiver.deliveryOption.terminalPickup.closestGIGLCenter',{ message: "Closest terminal pickup center is required"})
    },[stateOrCity])

    useEffect(() => {
        if(isDirty && closestGIGLCenter){
            clearErrors('receiver.deliveryOption.terminalPickup.closestGIGLCenter')
        }
    },[closestGIGLCenter])


    return( 
        <section className="shadow-lg bg-base-color1 drop-shadow-md rounded-md mt-12 w-full pb-10">
            <h3 className="w-full text-center text-base-color1 shadow-sm-light bg-[hsl(0,2%,10%)] font-medium p-3 mb-8">Receiver&apos;s Info</h3>
            <div className="px-3 flex flex-col items-center w-full relative md:px-10">
                <CustomTextInput 
                    control={control} 
                    id="xpress-dropoff-RfirstName" 
                    name="receiver.fullName" 
                    label="Receiver's Name" 
                    placeholder="Enter Full Name" 
                    containerStyles="w-full mb-2"
                    required="Receiver's Full Name is required"
                    labelStyles="mb-4 block self-start ms-1"
                    error={errors?.receiver?.fullName?.message}
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-base-color2 bg-gray-50 h-[3.4em]"
                />

                <CustomPhoneInput 
                    name="receiver.phoneNumber" 
                    id="xpress-dropoff-RphoneNumber" 
                    label="Phone Number"
                    required="Receiver's phone number is required"
                    labelStyles="mb-4 block self-start ms-1"
                    placeholder="Enter Phone Number"
                    className="phoneInput-xpressDropOff h-[3.6em]"
                    control={control}
                    containerStyles="w-[100%] mx-auto"
                    error={errors?.receiver?.phoneNumber?.message}
                />

                <div className="w-full">
                    <label htmlFor="xpress-dropoff-deliveryOptionType" className="mb-4 block self-start ms-1">Select Delivery Option</label>
                    <CustomQuotePageSelect 
                        name="receiver.deliveryOptionType" 
                        id="xpress-dropoff-deliveryOptionType" 
                        control={control}
                        selectStyles={{height: "3.4em"}}
                        placeholder="Delivery Options"
                        hasError={errors?.receiver?.deliveryOptionType?.message ? true : false}
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
                        required="Please select a delivery option"
                        optionStyles={{
                            color: "#374151"
                        }}
  
                    />
                </div>

                {
                    deliveryOptionType === XpressDropOffDeliveryType.HomeDelivery ? 
                    <>
                        <CustomTextInput 
                            control={control} 
                            id="xpress-dropoff-deliveryOption-homeDelivery-address" 
                            name="receiver.deliveryOption.homeDelivery.address"
                            label="Address" 
                            placeholder="Address" 
                            required="Please enter an address for home delivery"
                            containerStyles="w-full mt-5"
                            error={errors?.receiver?.deliveryOption?.homeDelivery?.address?.message}
                            labelStyles="mb-4 block self-start ms-1"
                            inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-base-color2 bg-gray-50 h-[3.4em]"
                        />
                        <p className="text-[#D5343A] text-xs italic">Please note that home delivery request attracts additional charges</p>
                    </>

                    :

                    deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup ? 

                    <>
                        <div className="w-full my-4">
                            <label htmlFor="xpress-dropoff-deliveryOption-terminal-stateOrCity" className="mb-4 block self-start ms-1">Select State/City</label>
                            <CustomQuotePageSelect 
                                name="receiver.deliveryOption.terminalPickup.stateOrCity"  
                                id="xpress-dropoff-deliveryOption-terminal-stateOrCity" 
                                control={control}
                                selectStyles={{
                                    height: "3.4em",
                                }}
                                placeholder="Select Destination State"
                                hasError={errors?.receiver?.deliveryOption?.terminalPickup?.stateOrCity?.message ? true : false}
                                data={getXpressDropOffLocationData()}
                                required={deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup && "Please select a destination state"}
                                optionStyles={{
                                    color: "#374151"
                                }}
                            />
                        </div>

                        <div className="w-full my-4">
                            <label htmlFor="xpress-dropoff-deliveryOption.terminalPickup-closestGIGLCenter" className="mb-4 block self-start ms-1">Select Closest GIGL Center</label>
                            <CustomQuotePageSelect 
                                name="receiver.deliveryOption.terminalPickup.closestGIGLCenter"  
                                id="xpress-dropoff-deliveryOption.terminalPickup-closestGIGLCenter" 
                                control={control}
                                selectStyles={{
                                    height: "3.4em",
                                }}
                                placeholder="Select Service Center"
                                hasError={errors?.receiver?.deliveryOption?.terminalPickup?.closestGIGLCenter?.message ? true : false}
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
    )
}

export default XpressDropOffReceiverSection;