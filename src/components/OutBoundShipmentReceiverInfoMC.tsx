"use client"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiSolidMessageAltError } from "react-icons/bi";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { OutBoundShippingReceiverInfo } from '../../types';
import { SubmitHandler, useForm } from 'react-hook-form';
import CustomTextInput from './assets/inputs/CustomTextInput';
import { useRouter } from 'next/navigation';
import { countriesNamesArray } from '@/componentsData/countries';
import CustomPhoneInput from './assets/inputs/CustomPhoneInput';
import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { setReceiverInfo } from '@/redux/slices/outboundShippingFormDataSlice';



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

    const { control, formState:{ errors, isSubmitting }, handleSubmit } = useForm<OutBoundShippingReceiverInfo>({ resolver: yupResolver(formSchema) })
    const id = "outbound-shipping-receiver"
    const router = useRouter()
    const dispatch = useAppDispatch()
    const data : { label:string, value:string }[] = countriesNamesArray.map(val => {
        return { label: val.name.toUpperCase(), value: val.name }
    })
    const { senderInfo } = useAppSelector(store => store.outboundShipping)


    if(!senderInfo?.name){
        router.push("/app-panel/outbound-shipment/sender-info")
    }
    

    const handleFormSubmit : SubmitHandler<OutBoundShippingReceiverInfo> = (data) => {
        dispatch(setReceiverInfo(data))
        router.push("/app-panel/outbound-shipment/item-category")
    }

    return(
        <form className="pb-12 md:w-3/4 lg:w-1/2 md:mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Receiver&apos;s information</h2>

            <div className="w-full mb-6">
                <label htmlFor="xpress-dropoff-deliveryItems-category" className="mb-3 block self-start ms-1">Receiver&apos;s Country:</label>
                <CustomQuotePageSelect
                    name="country"  
                    id={`${id}-category`}
                    control={control}
                    selectStyles={{
                        height: "3.1em",
                        borderRadius: "6px"
                    }}
                    placeholder="Select country"
                    hasError={errors?.country?.message ? true : false}
                    data={data}
                    required="Please select a country"
                    optionStyles={{
                        color: "#374151"
                    }}
                />
                {
                    errors.country?.message &&
                    <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.country.message}</p>
                }
            </div>

            <CustomTextInput
                label="Receiver&apos;s Address:" 
                control={control}
                placeholder="Enter receiver&apos;s address"
                error={errors?.address?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.3em]"
                id={`${id}-receiverAddress`} 
                name="address"
            />

            <div className="flex gap-10 justify-between">
                <CustomTextInput
                    label="City:" 
                    control={control}
                    placeholder="Enter city"
                    error={errors?.city?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
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
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-zipCode`} 
                    name="zipCode"
                />
            </div>

            <CustomTextInput
                label="Receiver&apos;s Name:" 
                control={control}
                placeholder="Enter Receiver&apos;s name"
                error={errors?.name?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                id={`${id}-receiverName`} 
                name="name"
            />

            <CustomPhoneInput
                name="phoneNumber" 
                id={`${id}-phoneNumber`} 
                label="Phone Number"
                required="Please this field is required"
                labelStyles="mb-4 block self-start ms-1"
                placeholder="Enter phone number"
                className="phoneInput-xpressDropOff h-[3em]"
                control={control}
                containerStyles="w-[100%] mx-auto"
                error={errors?.phoneNumber?.message}
            />

            <CustomTextInput
                label="Receiver&apos;s Email:" 
                control={control}
                inputType='email'
                placeholder="Enter Receiver&apos;s email"
                error={errors?.email?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                id={`${id}-receiverEmail`} 
                name="email"
            />

            <button disabled={isSubmitting} className="block w-full rounded-md text-base-color1 bg-base-color2 font-medium p-4 text-center mx-auto mt-16 hover:opacity-90 focus:bg-transparent focus:text-base-color2 focus:outline focus:outline-2 focus:outline-base-color2">Proceed</button>
        </form>
    )
}