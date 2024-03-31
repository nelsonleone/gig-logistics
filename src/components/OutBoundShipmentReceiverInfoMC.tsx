"use client"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiSolidMessageAltError } from "react-icons/bi";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { OutBoundShippingReceiverInfo } from '../../types';
import { useForm } from 'react-hook-form';
import { getXpressDropOffLocationData } from '@/helperFns/getXpressDropOffLocationData';
import CustomTextInput from './assets/inputs/CustomTextInput';



const formSchema = Yup.object().shape({    
    country: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string()
    }).required('This is a required field'),
    phoneNumber: Yup.string().required('Phone Number is a required field'),
    name: Yup.string().required("Please enter receiver's name"),
    email: Yup.string().required('Email is a required field').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
       'Invalid email format'
    ),
    address: Yup.string().required('Please input address'),
    city: Yup.string().required('This field is required'),
    zipCode: Yup.string().required('This field is required'),
})

export default function OutBoundShipmentReceiverInfoMC(){

    const { control, formState:{ errors, isSubmitting }, setValue, handleSubmit, setError, clearErrors } = useForm<OutBoundShippingReceiverInfo>({ resolver: yupResolver(formSchema) })
    const id = "outbound-shipping-receiver"

    return(
        <form className="pb-8 md:w-3/4 lg:w-1/2 md:mx-auto">
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Receiver's information</h2>

            <div className="w-full mb-6">
                <label htmlFor="xpress-dropoff-deliveryItems-category" className="mb-3 block self-start ms-1">Receiver's Country:</label>
                <CustomQuotePageSelect
                    name="country"  
                    id={`${id}-category`}
                    control={control}
                    selectStyles={{
                        height: "3em",
                        borderRadius: "6px"
                    }}
                    placeholder="Select country"
                    hasError={errors?.country?.message ? true : false}
                    data={getXpressDropOffLocationData()}
                    required="Please select a country"
                    optionStyles={{
                        color: "#374151"
                    }}
                />
                {
                    errors.country?.message &&
                    <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.country.message}</p>
                }
            </div>

            <CustomTextInput
                label="Receiver's Address:" 
                control={control}
                placeholder="Enter receiver's address"
                error={errors?.address?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.3em]"
                id={`${id}-receiverAddress`} 
                name="address"
            />

            <div>
                <CustomTextInput
                    label="City:" 
                    control={control}
                    placeholder="Enter city"
                    error={errors?.city?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.1em]"
                    id={`${id}-city`} 
                    name="city"
                />
                <CustomTextInput
                    label="Zip Code:" 
                    control={control}
                    placeholder="Enter ZipCode"
                    error={errors?.zipCode?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.1em]"
                    id={`${id}-zipCode`} 
                    name="zipCode"
                />
            </div>

            <CustomTextInput
                label="Receiver's Name:" 
                control={control}
                placeholder="Enter Receiver's name"
                error={errors?.name?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.1em]"
                id={`${id}-receiverName`} 
                name="name"
            />

            <CustomTextInput
                label="Phone Number:" 
                control={control}
                placeholder="Enter phone number"
                error={errors?.phoneNumber?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.1em]"
                id={`${id}-phoneNumber`} 
                name="phoneNumber"
            />

            <CustomTextInput
                label="Receiver's Email:" 
                control={control}
                placeholder="Enter Receiver's email"
                error={errors?.email?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.1em]"
                id={`${id}-receiverEmail`} 
                name="email"
            />
        </form>
    )
}