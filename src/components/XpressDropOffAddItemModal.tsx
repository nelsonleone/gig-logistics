import { Divider, IconButton, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { DeliveryItems } from "../../types";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { getXpressDropOffDeliveryItemCategoryData, getXpressDropOffDeliveryItemCategoryItems } from "@/helperFns/getXpressDropOffDeliveryItemCategoryData";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import XpressDropOffDeliveryItemValueNotice from "./XpressDropOffDeliveryItemValueNotice";
import XpressDropOffItemImageUpload from "./assets/inputs/Filepond/XpressDropOffItemImageUpload";
import { Dispatch, SetStateAction } from "react";
import { setDropOffItemWeight } from "@/helperFns/setDropOffItemWeight";

interface IProps {
    open: boolean,
    handleClose: () => void,
    setDeliveryItem: Dispatch<SetStateAction<DeliveryItems | undefined>>
}

function XpressDropOffAddItemModal({ open, handleClose, setDeliveryItem }:IProps) {

    const { control, formState: { errors }, reset, setValue, handleSubmit } = useForm<DeliveryItems>({
        defaultValues: {}
    })

    const deliveryItemCategory = useWatch({ control, name: 'category.value' })
    const item = useWatch({ control, name: 'item.value' })
    
    const handlePostDeliveryItem : SubmitHandler<DeliveryItems> = (data) => {
        setDeliveryItem(data)
        reset()
        handleClose()
    }

    const handleCloseModal = () => {
        reset()
        handleClose()
    }

    return (
        <Modal open={open} onClose={() => {}} id="xpressDropOff-deliveryItems-modal" aria-expanded={open ? "true" : "false" }>
            <div className="text-[#374151] overflow-y-auto h-[30em] bg-gray-100 rounded-lg py-4 absolute top-0 bottom-0 left-0 right-0 m-auto w-11/12 md:w-[37em]">
                <div className="p-6">
                    <h4 className="text-center font-medium text-lg">Items's Info</h4>
                    <IconButton className="absolute text-xl left-3 top-3" aria-label="close" onClick={handleClose} aria-controls="xpressDropOff-deliveryItems-modal">
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
                            selectStyles={{
                                height: "3.2em",
                            }}
                            placeholder="Category"
                            hasError={errors?.category?.value?.message ? true : false}
                            data={getXpressDropOffDeliveryItemCategoryData()}
                            required="Please choose a category for the item"
                            optionStyles={{
                                color: "#374151"
                            }}
                        />
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
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.2em]"
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
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.2em]"
                            />
                            <CustomTextInput
                                control={control} 
                                inputType="number"
                                id="xpress-dropoff-deliveryItems-otherItemWeight" 
                                name="otherItemWeight" 
                                label="Item Weight" 
                                placeholder="Enter item weight" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.otherItemWeight?.message}
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.2em]"
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
                                    hasError={errors?.item?.message ? true : false}
                                    data={getXpressDropOffDeliveryItemCategoryItems(deliveryItemCategory)}
                                    required="Required to select an item"
                                    optionStyles={{
                                        color: "#374151"
                                    }}
                                />
                            </div>
                            <div className="w-full mb-6">
                                <label htmlFor="xpress-dropoff-deliveryItems-weight" className="mb-4 block self-start ms-1">Select Weight Range (KG)</label>
                                <CustomQuotePageSelect 
                                    name="weight" 
                                    id="xpress-dropoff-deliveryItems-weight" 
                                    control={control}
                                    selectStyles={{ height: "3.2em",}}
                                    placeholder="Weight"
                                    hasError={errors?.weight?.message ? true : false}
                                    data={setDropOffItemWeight(deliveryItemCategory,item)}
                                    required="Please choose a range for the weight"
                                    optionStyles={{
                                        color: "#374151"
                                    }}
                                />
                            </div>
                        </>
                    }
                    
                    <div className="md:flex justify-between gap-4">
                        <CustomTextInput
                            control={control} 
                            inputType="number"
                            id="xpress-dropoff-deliveryItems-quantity" 
                            name="quantity" 
                            label="Quantity" 
                            placeholder="Quantity" 
                            containerStyles="w-full mb-4 md:w-1/2"
                            labelStyles="mb-3 block self-start ms-1"
                            error={errors?.item?.message}
                            inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.2em]"
                        />
                        <div className="relative md:w-1/2">
                            <CustomTextInput
                                control={control} 
                                inputType="number"
                                id="xpress-dropoff-deliveryItems-value" 
                                name="value" 
                                label="Value (Naira)" 
                                placeholder="Value" 
                                containerStyles="w-full mb-4"
                                labelStyles="mb-3 block self-start ms-1"
                                error={errors?.value?.message}
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.2em]"
                            />
                            <XpressDropOffDeliveryItemValueNotice />
                        </div>
                    </div>

                    <XpressDropOffItemImageUpload setValue={setValue} />

                    <div className="mt-10 md:flex justify-between gap-8">
                        <button type="button" onClick={handleCloseModal} className="text-center text-white bg-red-600 rounded-md w-full block h-14 p-3 hover:drop-shadow-md focus:drop-shadow-sm focus:bg-transparent focus:text-black focus:border focus:outline-none focus:font-medium focus:outline-offset-0 focus:border-red-600">Cancel</button>
                        <button type="button" onClick={handleSubmit(handlePostDeliveryItem)} className="text-center text-white bg-black rounded-md w-full block mb-4 h-14 p-3 hover:drop-shadow-md focus:drop-shadow-sm focus:border focus:outline-none focus:font-medium focus:bg-transparent focus:text-black focus:border-[hsl(0,2%,9%)] focus:outline-offset-0 focus:-black md:mb-0">Submit</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default XpressDropOffAddItemModal;