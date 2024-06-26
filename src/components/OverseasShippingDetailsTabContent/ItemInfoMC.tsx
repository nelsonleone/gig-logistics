"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import CustomTextInput from "../assets/inputs/CustomTextInput"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { OverseasShippingItemInfo } from "../../../types";
import { BiSolidMessageAltError } from "react-icons/bi";
import Link from "next/link";
import { useAppDispatch } from "@/redux/customHooks";
import { setItem } from "@/redux/slices/overseasShippingItemsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { MantineProvider } from "@mantine/core";
import { Checkbox } from "flowbite-react";


const formSchema = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    desc: Yup.string().required('Enter a short description for the item').min(5,"Description is too short"),
    quantity: Yup.number().required('This field is required').positive('Please enter a valid input').integer('Please enter a valid input').min(1, 'Quantity must be at least 1'),
    itemValueInPounds: Yup.number().required('This field is a required').positive('Please enter a valid amount').integer('Please enter a valid amount').min(1, 'Please enter a valid amount'),
    storeName: Yup.string().required('Store name is required'),
    trackingNumber:  Yup.string(),
    agreedToTermsAndConditions:  Yup.boolean().oneOf([true], "Please read and accept the terms and conditions to continue").required("Please read and accept the terms and conditions to continue")
})

export default function ItemInfoMC(){

    const { control, handleSubmit, register, formState: { errors, isSubmitting }} = useForm<OverseasShippingItemInfo>({ resolver: yupResolver(formSchema) })
    const id = "overseasShippingItemDetails"
    const dispatch = useAppDispatch()
    const router = useRouter()

    
    const handleItemsInfoSubmit : SubmitHandler<OverseasShippingItemInfo> = (data) => {
        const itemInfo = {...data, id: nanoid() }
        dispatch(setItem(itemInfo))

        router.push('/app-panel/overseas-shipping/shipping-details/items')
    }

    return(
        <div className="mt-24 mb-6">
            <p className="mb-7 text-center">To guarantee hassle-free shipping please input details of item(s) purchased from store in order to complete the overseas shipping process.</p>
            <form onSubmit={handleSubmit(handleItemsInfoSubmit)}>
                <CustomTextInput
                    label="Full Name" 
                    control={control}
                    placeholder="Enter Full Name"
                    error={errors?.fullName?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-fullName`} 
                    name="fullName"
                />
                <CustomTextInput
                    label="Item Description" 
                    control={control}
                    placeholder="Enter item description"
                    error={errors?.desc?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-desc`} 
                    name="desc"
                />
                <CustomTextInput
                    label="Quantity" 
                    control={control}
                    placeholder="Enter quantity"
                    error={errors?.quantity?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-quantity`} 
                    name="quantity"
                    inputType="number"
                />
                <CustomTextInput
                    label="Store Name" 
                    control={control}
                    placeholder="Eg. Amazon,Ebay"
                    error={errors?.storeName?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-storeName`} 
                    name="storeName"
                />
                <CustomTextInput
                    label="Tracking Number" 
                    control={control}
                    placeholder="Enter item tracking number (optional)"
                    error={errors?.trackingNumber?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-trackingNumber`} 
                    name="trackingNumber"
                />
                <CustomTextInput
                    label="Item Value in Pounds(£)" 
                    control={control}
                    placeholder="Enter value in Pounds(£)"
                    error={errors?.itemValueInPounds?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-itemValueInPounds`} 
                    name="itemValueInPounds"
                    inputType="number"
                />

                <div className="my-8 mx-2">
                    <div className="flex gap-2 items-center">
                        <Checkbox aria-label="Agree to terms and conditions" {...register('agreedToTermsAndConditions')} width={40} />
                        <p className="text-sm italic">By selecting this checkbox, you agree to our <Link href="#" className="underline text-primary2">Terms and conditions</Link></p>
                    </div>
                    {
                        errors.agreedToTermsAndConditions?.message &&
                        <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.agreedToTermsAndConditions?.message}</p>
                    }
                </div>

                <button disabled={isSubmitting} className="rounded-md block text-base-color1 bg-base-color2 font-medium p-[.9em] text-center mx-auto w-full md:w-80 my-12 hover:opacity-90 focus:bg-transparent focus:text-base-color2 focus:outline focus:outline-2 focus:outline-black">Proceed</button>
            </form>
        </div>
    )
}