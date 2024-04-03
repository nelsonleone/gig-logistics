"use client"

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OutBoundShippingItem } from '../../types';
import CustomTextInput from './assets/inputs/CustomTextInput';
import CustomImageUpload from './assets/inputs/Filepond/CustomImageUpload';
import { useRouter } from 'next/navigation';
import { setItems } from '@/redux/slices/outboundShippingFormDataSlice';
import { useAppDispatch, useAppSelector } from '@/redux/customHooks';
import { nanoid } from '@reduxjs/toolkit';


const formSchema = Yup.object().shape({    
    itemName: Yup.string().required('This field is required'),
    quantity: Yup.number().required('Enter shipment quantity').typeError('Please enter a valid number').positive('Please enter a valid input').integer('Please enter a valid input').min(0,'Please enter a valid input'),
    value: Yup.number().required('This field is required').typeError('Please enter a valid number').positive('Please enter a valid input').integer('Please enter a valid input').min(0,'Please enter a valid input'),
    description: Yup.string().required('Enter a short description for this shipment'),
    itemImage: Yup.string().required('This field is required'),
    id: Yup.string()
})

export default function OutBoundShippingDocumentItemForm(){
    
    const { control, formState:{ errors, isSubmitting }, setValue, handleSubmit } = useForm<OutBoundShippingItem>({ resolver: yupResolver(formSchema) })
    const id = "outbound-shipping-document-item"
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { receiverInfo, senderInfo } = useAppSelector(store => store.outboundShipping)


    if(!receiverInfo?.name || !senderInfo?.name){
        router.push("/app-panel/outbound-shipment/sender-info")
    }

    
    const handleAddItem : SubmitHandler<OutBoundShippingItem> = (data) => {
        const analyzedData = {...data, id: nanoid()}
        dispatch(setItems(analyzedData))

        router.push("/app-panel/outbound-shipment/items")
    } 

    return(
        <form className="pb-12 md:w-3/4 lg:w-1/2 md:mx-auto" onSubmit={handleSubmit(handleAddItem)}>
            <CustomTextInput
                label="Item Name:" 
                control={control}
                placeholder="A brown nike shoe"
                error={errors?.itemName?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                id={`${id}-itemName`} 
                name="itemName"
            />

            <div className="flex gap-4">
                <CustomTextInput
                    inputType='number'
                    label="Quantity(kg):" 
                    control={control}
                    placeholder="Enter quantity"
                    error={errors?.quantity?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-quantity`} 
                    name="quantity"
                />
                <CustomTextInput
                    inputType='number'
                    label="Value(₦):" 
                    control={control}
                    placeholder="Enter item value"
                    error={errors?.value?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-value`} 
                    name="value"
                />
            </div>

            <CustomTextInput
                label="Shipment Description" 
                control={control}
                placeholder="Describe your shipment"
                error={errors?.description?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                id={`${id}-description`} 
                name="description"
            />

            <CustomImageUpload setValue={setValue} />
            <button disabled={isSubmitting} className="block w-full rounded-md text-base-color1 bg-base-color2 font-medium p-4 text-center mx-auto mt-16 hover:opacity-90 focus:bg-transparent focus:base-color2 focus:outline focus:outline-2 focus:outline-black">Proceed</button>
        </form>
    )
}