"use client"

import CustomTextInput from "./assets/inputs/CustomTextInput";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { Control, FieldErrors } from "react-hook-form";
import { XpressDropOffInfo } from "../../types";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { XpressDropOffDeliveryType } from "@/enums";
import { getXpressDropOffLocationData } from "@/helperFns/getXpressDropOffLocationData";
import { setXpressDropOffClosestGIGLCenter } from "@/helperFns/setXpressDropOffClosestGIGLCenter";

interface IProps {
    control: Control<XpressDropOffInfo,undefined>,
    errors: FieldErrors<XpressDropOffInfo>,
    deliveryOptionType: XpressDropOffDeliveryType | "",
    selectedStateOrCity: { label:string, value: string }
}

function XpressDropOffReceiverSection(props:IProps) {

    const { control, errors, deliveryOptionType, selectedStateOrCity } = props;

    return(
        <section className="shadow-lg bg-white drop-shadow-md rounded-md mt-12 w-full pb-10">
            <h3 className="w-full text-center bg-gray-100 font-semibold p-3 mb-8">Receiver's Info</h3>
            <div className="px-3 flex flex-col items-center w-full relative md:px-10">
                <CustomTextInput 
                    control={control} 
                    id="xpress-dropoff-RfirstName" 
                    name="receiver.fullName" 
                    label="First Name" 
                    placeholder="Enter Full Name" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    error={errors?.receiver?.fullName?.message}
                    inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                />

                <CustomPhoneInput 
                    name="receiver.phoneNumber" 
                    id="xpress-dropoff-RphoneNumber" 
                    label="Phone Number"
                    labelStyles="mb-4 block self-start ms-1"
                    placeholder="Enter Phone Number"
                    className="phoneInput-xpressDropOff h-[3.4em]"
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
                            containerStyles="w-full mt-5"
                            error={errors?.receiver?.deliveryOption?.homeDelivery?.address?.message}
                            labelStyles="mb-4 block self-start ms-1"
                            inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
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
                                data={setXpressDropOffClosestGIGLCenter(selectedStateOrCity?.value)}
                                required={deliveryOptionType === XpressDropOffDeliveryType.TerminalPickup && "Please select a service center"}
                                optionStyles={{
                                    color: "#374151"
                                }}
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