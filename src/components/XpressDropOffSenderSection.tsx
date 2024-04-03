"use client"

import CustomTextInput from "./assets/inputs/CustomTextInput";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { Control, FieldErrors } from "react-hook-form";
import { XpressDropOffInfo } from "../../types";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { getXpressDropOffLocationData } from "@/helperFns/getXpressDropOffLocationData";


interface IProps {
    control: Control<XpressDropOffInfo,undefined>,
    errors: FieldErrors<XpressDropOffInfo>,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
}

function XpressDropOffSenderSection(props:IProps) {

    const { control, errors, firstName, lastName, email, phoneNumber } = props;

    return(
        <section className="shadow-lg bg-base-color1 drop-shadow-md rounded-md my-8 w-full pb-10">
            <h3 className="w-full text-center text-base-color1 shadow-sm-light bg-[hsl(0,2%,10%)] 100 font-medium p-3 mb-8">Sender's Info</h3>
            <div className="px-3 flex flex-col items-center w-full relative md:px-10">
                <CustomTextInput 
                    readOnly 
                    defaultValue={firstName} 
                    control={control} 
                    id="xpress-dropoff-firstName" 
                    name="sender.firstName" 
                    label="First Name" 
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-offset-0 focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                />
                <CustomTextInput 
                    readOnly 
                    defaultValue={lastName} 
                    control={control} 
                    id="xpress-dropoff-lastName" 
                    name="sender.lastName" 
                    label="Last Name" 
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-offset-0 focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                />
                <CustomTextInput 
                    readOnly 
                    defaultValue={email} 
                    control={control} 
                    id="xpress-dropoff-email" 
                    name="sender.email"
                    label="Email Adress"
                    placeholder="" 
                    containerStyles="w-full mb-2"
                    labelStyles="mb-4 block self-start ms-1"
                    inputStyles="focus:outline-0 w-full focus:outline-offset-0 focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.6em]"
                />
                <CustomPhoneInput 
                    readOnly={true} 
                    value={phoneNumber} 
                    name="sender.phoneNumber" 
                    id="xpress-dropoff-phoneNumber" 
                    label="Phone Number"
                    labelStyles="mb-4 block self-start ms-1"
                    className="phoneInput-xpressDropOff h-[3.6em]"
                    control={control}
                    containerStyles="w-[100%] mx-auto"
                />

                <div className="w-full">
                    <label htmlFor="xpress-dropoff-location" className="mb-4 block self-start ms-1">Location</label>
                    <CustomQuotePageSelect 
                        name="sender.location" 
                        id="xpress-dropoff-location" 
                        control={control}
                        selectStyles={{ height: "3.4em"  }}
                        placeholder="Location"
                        hasError={errors?.sender?.location?.message ? true : false}
                        data={getXpressDropOffLocationData()}
                        required="Please choose your location"
                        optionStyles={{
                            color: "#374151"
                        }}
                    />
                </div>
            </div>            
        </section>
    )
}

export default XpressDropOffSenderSection;