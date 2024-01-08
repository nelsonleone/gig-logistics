"use client"

import { useAppSelector } from "@/redux/customHooks";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { useForm } from "react-hook-form";
import { IXpressSenderInfo } from "../../types";
import { Metadata } from "next";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { getXpressDropOffLocationData } from "@/helperFns/getXpressDropOffLocationData";

export const metadata : Metadata = {
    title: "Xpress Dropoff | GIG Logistics",
    description: "Ship Dropoff Items"
}

function XpressDropOffSenderSection() {

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control, formState: { errors} } = useForm<IXpressSenderInfo>({
        defaultValues:{
            firstName,
            lastName,
            email,
            phoneNumber
        }
    })

    return(
        <form className="shadow-lg bg-white drop-shadow-sm rounded-md my-8 w-full pb-4">
            <h3 className="w-full text-center bg-gray-100 font-medium p-3 mb-8">Sender's Info</h3>
            <div className="px-3 flex flex-col items-center w-full relative">
                <CustomTextInput 
                    readOnly 
                    defaultValue={firstName} 
                    control={control} 
                    id="xpress-dropoff-firstName" 
                    name="firstName" 
                    label="First Name" 
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                />
                <CustomTextInput 
                    readOnly 
                    defaultValue={lastName} 
                    control={control} 
                    id="xpress-dropoff-lastName" 
                    name="lastName" 
                    label="Last Name" 
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                />
                <CustomTextInput 
                    readOnly 
                    defaultValue={email} 
                    control={control} 
                    id="xpress-dropoff-email" 
                    name="email"
                    label="Email Adress"
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.6em]"
                />
                <CustomPhoneInput 
                    readonly={true} 
                    value={phoneNumber} 
                    name="phoneNumber" 
                    id="xpress-dropoff-phoneNumber" 
                    label="Phone Number"
                    labelStyles="mb-4 block self-start ms-1"
                    className="phoneInput-xpressDropOff h-[3.2em]"
                    control={control}
                    containerStyles="w-[100%] mx-auto"
                />

                <div className="w-full">
                    <label htmlFor="xpress-dropoff-location" className="mb-4 block self-start ms-1">Location</label>
                    <CustomQuotePageSelect 
                        name="location" 
                        id="xpress-dropoff-location" 
                        control={control}
                        selectStyles={{
                            height: "3.4em",
                            color: "#374151"
                        }}
                        placeholder="Location"
                        hasError={errors.location?.message ? true : false}
                        data={getXpressDropOffLocationData()}
                        required="Please choose your location"
                        optionStyles={{
                            color: "#374151"
                        }}
                    />
                </div>
            </div>            
        </form>
    )
}

export default XpressDropOffSenderSection;