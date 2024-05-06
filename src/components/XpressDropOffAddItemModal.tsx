import { Divider, IconButton, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { DeliveryItems } from "../../types";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { getXpressDropOffDeliveryItemCategoryData, getXpressDropOffDeliveryItemCategoryItems } from "@/helperFns/getXpressDropOffDeliveryItemCategoryData";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import XpressDropOffDeliveryItemValueNotice from "./XpressDropOffDeliveryItemValueNotice";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { setDropOffItemWeight } from "@/helperFns/setDropOffItemWeight";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/redux/customHooks";
import { setShowSnackbar } from "@/redux/slices/snackbarSlice";
import { AlertSeverity } from "@/enums";
import { BiSolidMessageAltError } from "react-icons/bi";
import XpressDropOffItemImageUpload from "./assets/inputs/Filepond/CustomImageUpload";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

interface IProps {
    open: boolean,
    handleClose: () => void,
    setDeliveryItem: Dispatch<SetStateAction<DeliveryItems | undefined>>
}


const formSchema = Yup.object().shape({
    category: Yup.object().shape({
        label: Yup.string().oneOf(["Computer Accessories", "Documents", "Electronics", "Food", "Health Products", "Jewelries/Accessories", "Others", "Phones"]).required('This field is required'),
        value: Yup.string().oneOf(["computer accessories", "documents", "electronics", "food", "health products", "jewelries/accessories", "others", "phones"]).required('This field is required')
    }),
    item: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string()
    }),
    weight: Yup.object().shape({
        label: Yup.string(),
        value: Yup.string()
    }),
    quantity: Yup.number().required('This field is required').min(1, 'Please enter a valid input').required('Quantity is required').typeError('Please enter a valid input'),
    value: Yup.number().required('This field is required').min(1, 'Please enter a valid input').required('Value is required').typeError('Please enter a valid input'),
    itemImage: Yup.string().required('Item image is required'),
    otherItemName: Yup.string(),
    otherItemDescription: Yup.string(),
    otherItemWeight: Yup.string(),
    id: Yup.string()
})

function XpressDropOffAddItemModal({ open, handleClose, setDeliveryItem }:IProps) {

    const { control, formState: { errors }, setError, clearErrors, reset, setValue, handleSubmit } = useForm<DeliveryItems>({
        resolver: yupResolver(formSchema),
        defaultValues: {}
    })

    const deliveryItemCategory = useWatch({ control, name: 'category.value' })
    const item = useWatch({ control, name: 'item.value' })
    const itemImage = useWatch({ control , name: 'itemImage'})
    const dispatch = useAppDispatch()
    
    const handlePostDeliveryItem : SubmitHandler<DeliveryItems> = (data) => {

        if(!itemImage){
            setError('itemImage',{ message: "Please Add An Image For The Shipment" })
            dispatch(setShowSnackbar({ severity: AlertSeverity.ERROR, mssg: "Please Add An Image For The Shipment"}))
            return;
        }

        setDeliveryItem({...data,id: `item-${nanoid(12)}`})
        reset()
        handleClose()
    }

    const handleCloseModal = () => {
        reset()
        handleClose()
    }

    useEffect(() => {
        if(itemImage && errors.itemImage?.message){
            clearErrors('itemImage')
        }
    },[itemImage])

    return (
        <Modal open={open} onClose={() => {}} id="xpressDropOff-deliveryItems-modal" aria-expanded={open ? "true" : "false" }>
            <div className="text-primary overflow-y-auto h-[30em] bg-gray-100 rounded-lg py-4 absolute top-0 bottom-0 left-0 right-0 m-auto w-11/12 md:w-[37em]">
                <div className="p-6">
                    <h4 className="text-center font-medium text-lg">Items&apos;s Info</h4>
                    <IconButton className="absolute text-xl left-3 top-3" aria-label="close" onClick={handleCloseModal} aria-controls="xpressDropOff-deliveryItems-modal">
                        <IoClose />
                    </IconButton>
                </div>

                <Divider />
                <div className="p-4 md:px-8">
                    <div className="w-full mb-6">
                        <label htmlFor="xpress-dropoff-deliveryItems-category" className="mb-3 block self-start ms-1">Select Category</label>
                        <CustomQuotePageSelect
                            name="category"  
                            id="xpress-dropoff-deliveryItems-category" 
                            control={control}
                            required="Please select category"
                            selectStyles={{
                                height: "3.2em",
                            }}
                            placeholder="Category"
                            hasError={errors?.category?.value?.message ? true : false}
                            data={getXpressDropOffDeliveryItemCategoryData()}
                            optionStyles={{
                                color: "#374151"
                            }}
                        />
                        {
                            errors.category?.message &&
                            <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.category.message}</p>
                        }
                    </div>

                    
                    {
                        deliveryItemCategory === "others" ?
                        <>
                            <CustomTextInput
                                control={control} 
                                id="xpress-dropoff-deliveryItems-otherItemName" 
                                name="otherItemName" 
                                label="Item Name" 
                                placeholder="Enter item name" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.otherItemName?.message}
                                inputStyles="w-full z-20 border z-20 border-gray-500 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black h-[3.2em]"
                            />
                            <CustomTextInput
                                control={control} 
                                id="xpress-dropoff-deliveryItems-otherItemDescription" 
                                name="otherItemDescription" 
                                label="Item Description" 
                                placeholder="Enter item description" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.otherItemDescription?.message}
                                inputStyles="w-full z-20 border z-20 border-gray-500 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black h-[3.2em]"
                            />
                            <CustomTextInput
                                control={control} 
                                inputType="number"
                                rule={{ min: { value: 1, message: "Invalid Input"}}}
                                id="xpress-dropoff-deliveryItems-otherItemWeight" 
                                name="otherItemWeight" 
                                label="Item Weight (KG)" 
                                placeholder="Enter item weight" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.otherItemWeight?.message}
                                inputStyles="w-full z-20 border z-20 border-gray-500 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black h-[3.2em]"
                            />
                        </>
                        :
                        <>
                            <div className="w-full mb-6">
                                <label htmlFor="xpress-dropoff-deliveryItems-item" className="mb-3 block self-start ms-1">Select Item</label>
                                <CustomQuotePageSelect
                                    name="item"  
                                    id="xpress-dropoff-deliveryItems-item" 
                                    control={control}
                                    selectStyles={{
                                        height: "3.2em",
                                    }}
                                    placeholder="Item"
                                    required="Please select item"
                                    hasError={errors?.item?.message ? true : false}
                                    data={getXpressDropOffDeliveryItemCategoryItems(deliveryItemCategory)}
                                    optionStyles={{
                                        color: "#374151"
                                    }}
                                />
                                {
                                    errors.item?.message &&
                                    <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.item.message}</p>
                                }
                            </div>
                            <div className="w-full mb-6">
                                <label htmlFor="xpress-dropoff-deliveryItems-weight" className="mb-4 block self-start ms-1">Select Weight Range (KG)</label>
                                <CustomQuotePageSelect 
                                    name="weight" 
                                    id="xpress-dropoff-deliveryItems-weight" 
                                    control={control}
                                    selectStyles={{ height: "3.2em",}}
                                    placeholder="Weight"
                                    required="Please enter item weight"
                                    hasError={errors?.weight?.message ? true : false}
                                    data={setDropOffItemWeight(deliveryItemCategory,item || "")}
                                    optionStyles={{
                                        color: "#374151"
                                    }}
                                />
                                {
                                    errors.weight?.message &&
                                    <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.weight.message}</p>
                                }
                            </div>
                        </>
                    }
                    
                    <div className="md:flex justify-between gap-4">
                        <CustomTextInput
                            control={control} 
                            inputType="number"
                            rule={{ min: { value: 1, message: "Invalid Input"}}}
                            id="xpress-dropoff-deliveryItems-quantity" 
                            name="quantity" 
                            label="Quantity" 
                            placeholder="Quantity" 
                            containerStyles="w-full mb-4 md:w-1/2"
                            labelStyles="mb-3 block self-start ms-1"
                            error={errors?.item?.message}
                            inputStyles="w-full z-20 border z-20 border-gray-500 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black h-[3.2em]"
                        />
                        <div className="relative md:w-1/2">
                            <CustomTextInput
                                control={control} 
                                inputType="number"
                                rule={{ min: { value: 1, message: "Invalid Input"}}}
                                id="xpress-dropoff-deliveryItems-value" 
                                name="value" 
                                label="Value (Naira)" 
                                placeholder="Value" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.value?.message}
                                inputStyles="w-full z-20 border z-20 border-gray-500 rounded-lg p-4 cursor-pointer focus:border-none focus:outline-offset-0 focus:outline-2 focus:outline-black h-[3.2em]"
                            />
                            <XpressDropOffDeliveryItemValueNotice />
                        </div>
                    </div>

                    <XpressDropOffItemImageUpload setValue={setValue} />
                    {
                        errors.itemImage?.message &&
                        <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.itemImage.message}</p>
                    }

                    <div className="mt-10 flex flex-col-reverse md:flex-row justify-between gap-3 md:gap-8">
                        <button type="button" onClick={handleCloseModal} className="text-center text-base-color1 bg-red-600 rounded-md w-full block h-14 p-3 hover:drop-shadow-md focus:drop-shadow-sm focus:bg-transparent focus:text-base-color2 focus:border focus:outline-none focus:font-medium focus:outline-offset-0 focus:border-red-600">Cancel</button>
                        <button type="button" onClick={handleSubmit(handlePostDeliveryItem)} className="text-center text-base-color1 bg-base-color2 rounded-md w-full block mb-4 h-14 p-3 hover:drop-shadow-md focus:drop-shadow-sm focus:border focus:outline-none focus:font-medium focus:bg-transparent focus:text-base-color2 focus:border-[hsl(0,2%,9%)] focus:outline-offset-0 md:mb-0">Submit</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default XpressDropOffAddItemModal;