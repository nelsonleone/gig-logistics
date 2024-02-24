import { Dispatch, SetStateAction } from "react"
import { Controller, useForm } from "react-hook-form"
import CustomTextInput from "../../inputs/CustomTextInput"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { OverseasShippingItemInfo } from "../../../../../types";
import { Checkbox } from "@mui/material";
import { BiSolidMessageAltError } from "react-icons/bi";


const formSchema = Yup.object().shape({
    fullName: Yup.string().required('This field is required'),
    desc: Yup.string().required('Enter a short description for the item').min(5,"Description is too short"),
    quantity: Yup.string().required('This field is required').min(1,"Invalid Input"),
    itemValueInPounds: Yup.string().required('This field is a required').min(5,"Description is too short"),
    storeName: Yup.string().required('Store name is required'),
    trackingNumber:  Yup.string(),
    agreedToTermsAndConditions:  Yup.boolean().required("Please read and accept the terms and conditions to continue")
})

export default function ItemInfo({ setCurrentStep }: { setCurrentStep: Dispatch<SetStateAction<number>>}){

    const { control, handleSubmit, formState: { errors, isSubmitting }} = useForm<OverseasShippingItemInfo>({ resolver: yupResolver(formSchema) })
    const id = "overseasShippingItemDetails" 

    return(
        <div className="mt-24 mb-6">
            <p>To guarantee hassle-free shipping please input details of item(s) purchased from store in order to complete the overseas shipping process.</p>
            <form>
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

                <div>
                    <Controller
                      control={control}
                      name="agreedToTermsAndConditions" 
                      render={({ field }) => (
                        <Checkbox {...field} inputProps={{ 'aria-label': 'controlled' }} size="small"/>
                      )}
                    />
                    {
                        errors.agreedToTermsAndConditions?.message &&
                        <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.agreedToTermsAndConditions?.message}</p>
                    }
                </div>
            </form>
        </div>
    )
}