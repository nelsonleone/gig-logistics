"use client"

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { PersonalShoppingItemDetailsFormInfo } from "../../types"
import CustomTextInput from "./assets/inputs/CustomTextInput"
import { BiSolidMessageAltError } from "react-icons/bi"
import LoadingEllipse from "./assets/Loaders/LoadingEllipse"
import { useState } from "react"
import PSModal from "./assets/PopUps/PSModal"
import { useAppSelector } from "@/redux/customHooks"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const formSchema = Yup.object().shape({
    productLink: Yup.string()
      .url("Please enter a valid product link")
      .required('Password is required')
    ,
    itemName: Yup.string().required('This field is a required'),
    quantity: Yup.number().required('This field is a required').min(1,"Invalid Input"),
    description: Yup.string().required('This field is a required').min(5,"Description is too short")
})

export default function PersonalShoppingItemDetailsMC(){

    const { control, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<PersonalShoppingItemDetailsFormInfo>({ resolver: yupResolver(formSchema) })
    const [openSuccessModal,setOpenSuccessModal] = useState(false)
    const { email } = useAppSelector(store => store.authUser)

    const handlePostShoppingInfo : SubmitHandler<PersonalShoppingItemDetailsFormInfo> = async(data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        reset()
        setOpenSuccessModal(true)
    }

    const handleOnClose = () => {
        setOpenSuccessModal(false)
        reset()
    }


    return(
        <form onSubmit={handleSubmit(handlePostShoppingInfo)} className="md:w-2/3 lg:w-1/2 md:mx-auto">
            <CustomTextInput 
                label="Paste Product Link" 
                control={control}
                placeholder="Paste Link"
                error={errors?.productLink?.message}
                containerStyles="w-full mt-5"
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500  bg-gray-50 h-[3.4em] md:focus:outline-base-color2"
                id="personalShoppingItemDetails-link" 
                name="productLink"
                inputType="text"
            />

            <CustomTextInput 
                label="Item Name" 
                control={control}
                error={errors?.itemName?.message}
                placeholder="A brown nike shoe"
                containerStyles="w-full mt-5"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500  bg-gray-50 h-[3.4em] md:focus:outline-base-color2"
                labelStyles="mb-2 text-[.95rem] md:text-base text-sm block self-start ms-1" 
                id="personalShoppingItemDetails-name" 
                name="itemName"
                inputType="text"
            />

            <CustomTextInput 
                label="Quantity" 
                control={control}
                placeholder="Quantity"
                containerStyles="w-full mt-5"
                error={errors?.quantity?.message}
                labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500  bg-gray-50 h-[3.4em] md:focus:outline-base-color2"
                id="personalShoppingItemDetails-quantity" 
                name="quantity"
                inputType="number"
            />

            <div className="mb-8 w-full mt-5">
                <label htmlFor="personalShoppingItemDetails-desc" className="mb-2 text-[.95rem] md:text-base block self-start ms-1">Description</label>
                <Controller 
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <textarea 
                        {...field} 
                        maxLength={150} 
                        className={`rounded-md p-4 block w-full border-gray-300 h-40 outline-offset-0 focus:outline-offset-0 focus:border-none focus:outline-orange-500 md:focus:outline-black ${errors?.description?.message ? "border-primary2 focus:outline-primary2 md:focus:outline-primary2": ""}`}
                        placeholder="E.g Color, Texture, Fabric. (Max 150 characters)" 
                    />
                  )}
                />

                {
                    errors?.description?.message &&
                    <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors?.description.message}</p>
                }
            </div>

            <button disabled={isSubmitting} className="relative block my-10 w-full h-14 text-center mx-auto font-medium text-base-color1 bg-base-color2 p-4 text-sm rounded lg:text-base">
                {
                    isSubmitting ?
                    <LoadingEllipse />
                    :
                    "Proceed"
                }
            </button>

            <PSModal open={openSuccessModal} onClose={() => handleOnClose()} heading="Posted" text={`Thanks for choosing us to shop for you, we will review your request and update your throw your email - ${email}`} />
        </form>
    )
}