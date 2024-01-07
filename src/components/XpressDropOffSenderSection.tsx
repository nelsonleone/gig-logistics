"use client"

import { useAppSelector } from "@/redux/customHooks";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import CustomBasicSelect from "./assets/inputs/CustomBasicSelect";
import { useForm } from "react-hook-form";
import { IXpressSenderInfo } from "../../types";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Xpress Dropoff | GIG Logistics",
    description: "Ship Dropoff Items"
}

function XpressDropOffSenderSection() {

    const { firstName, lastName, phoneNumber, email } = useAppSelector(store => store.authUser)
    const { control } = useForm<IXpressSenderInfo>({
        defaultValues:{
            firstName,
            lastName,
            email,
            phoneNumber
        }
    })

    console.log(firstName)

    return(
        <form>
            <h3>Sender's Info</h3>

            <CustomTextInput readOnly control={control} id="xpress-dropoff-firstName" name="firstName" label="First Name" placeholder="" />
            <CustomTextInput readOnly control={control} id="xpress-dropoff-lastName" name="lastName" label="Last Name" placeholder="" />
            <CustomTextInput readOnly control={control} id="xpress-dropoff-email" name="email" label="Email Adress" placeholder="" />
            <CustomPhoneInput 
               readonly={true} 
               value={phoneNumber} 
               name="phoneNumber" 
               id="xpress-dropoff-phoneNumber" 
               label="Phone Number"
               className=""
               control={control}
            />
        </form>
    )
}

export default XpressDropOffSenderSection;