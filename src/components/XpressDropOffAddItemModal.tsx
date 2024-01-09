import { Divider, IconButton, Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import CustomQuotePageSelect from "./assets/inputs/CustomQuotePageSelect";
import { XpressDropOffInfo } from "../../types";
import { Control, FieldErrors, useWatch } from "react-hook-form";
import { getXpressDropOffDeliveryItemCategoryData, getXpressDropOffDeliveryItemCategoryItems } from "@/helperFns/getXpressDropOffDeliveryItemCategoryData";
import CustomTextInput from "./assets/inputs/CustomTextInput";

interface IProps {
    open: boolean,
    control: Control<XpressDropOffInfo,undefined>,
    errors: FieldErrors<XpressDropOffInfo>,
    handleClose: () => void
}

function XpressDropOffAddItemModal({ open, control, errors, handleClose }:IProps) {

    const deliveryItemCategory = useWatch({ control, name: 'deliveryItems.category.value'})

    return (
        <Modal open={open} onClose={() => {}} id="xpressDropOff-deliveryItems-modal" aria-expanded={open ? "true" : "false" }>
            <div>
                <div>
                    <h4>Items's Info</h4>
                    <IconButton aria-label="close" onClick={handleClose} aria-controls="xpressDropOff-deliveryItems-modal">
                        <IoClose />
                    </IconButton>
                    <Divider />
                </div>

                <div>
                    <div className="w-full">
                        <label htmlFor="xpress-dropoff-deliveryItems-category" className="mb-4 block self-start ms-1">Select Category</label>
                        <CustomQuotePageSelect
                            name="deliveryItems.category"  
                            id="xpress-dropoff-deliveryItems-category" 
                            control={control}
                            selectStyles={{
                                height: "3.4em",
                            }}
                            placeholder="Category"
                            hasError={errors?.deliveryItems?.category?.value?.message ? true : false}
                            data={getXpressDropOffDeliveryItemCategoryData()}
                            required="Please choose a category for the item"
                            optionStyles={{
                                color: "#374151"
                            }}
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="xpress-dropoff-deliveryItems-item" className="mb-4 block self-start ms-1">Select Item</label>
                        <CustomQuotePageSelect
                            name="deliveryItems.item"  
                            id="xpress-dropoff-deliveryItems-item" 
                            control={control}
                            selectStyles={{
                                height: "3.4em",
                            }}
                            placeholder="Item"
                            hasError={errors?.deliveryItems?.item?.value?.message ? true : false}
                            data={getXpressDropOffDeliveryItemCategoryItems(deliveryItemCategory)}
                            required="Required to select an item"
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
                                name="deliveryItems.otherItemName" 
                                label="Item Name" 
                                placeholder="Enter item name" 
                                containerStyles="w-full mb-2"
                                labelStyles="mb-4 block self-start ms-1"
                                error={errors?.deliveryItems?.otherItemName?.message}
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                            />
                            <CustomTextInput
                                control={control} 
                                id="xpress-dropoff-deliveryItems-otherItemDescription" 
                                name="deliveryItems.otherItemDescription" 
                                label="Item Description" 
                                placeholder="Enter item description" 
                                containerStyles="w-full mb-2"
                                labelStyles="mb-4 block self-start ms-1"
                                error={errors?.deliveryItems?.otherItemDescription?.message}
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                            />
                            <CustomTextInput
                                control={control} 
                                inputType="number"
                                id="xpress-dropoff-deliveryItems-otherItemWeight" 
                                name="deliveryItems.otherItemWeight" 
                                label="Item Weight" 
                                placeholder="Enter item description" 
                                containerStyles="w-full mb-2"
                                labelStyles="mb-4 block self-start ms-1"
                                error={errors?.deliveryItems?.otherItemWeight?.message}
                                inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                            />
                        </>
                        :
                        <div className="w-full">
                            <label htmlFor="xpress-dropoff-deliveryItems-weight" className="mb-4 block self-start ms-1">Select Weight Range (KG)</label>
                            <CustomQuotePageSelect 
                                name="deliveryItems.weight" 
                                id="xpress-dropoff-deliveryItems-weight" 
                                control={control}
                                selectStyles={{ height: "3.4em",}}
                                placeholder="Weight"
                                hasError={errors?.deliveryItems?.weight?.message ? true : false}
                                data={[
                                    {
                                        label: "0.0-1.0",
                                        value: "0.0-1.0"
                                    },
                                    {
                                        label: "1.0-2.0",
                                        value: "1.0-2.0"
                                    }
                                ]}
                                required="Please choose a range for the weight"
                                optionStyles={{
                                    color: "#374151"
                                }}
                            />
                        </div>
                    }
                    
                    <div>
                        <CustomTextInput
                            control={control} 
                            inputType="number"
                            id="xpress-dropoff-deliveryItems-otherItemWeight" 
                            name="deliveryItems.otherItemWeight" 
                            label="Item Weight" 
                            placeholder="Enter item description" 
                            containerStyles="w-full mb-2"
                            labelStyles="mb-4 block self-start ms-1"
                            error={errors?.deliveryItems?.otherItemWeight?.message}
                            inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                        />
                        <CustomTextInput
                            control={control} 
                            inputType="number"
                            id="xpress-dropoff-deliveryItems-otherItemWeight" 
                            name="deliveryItems.otherItemWeight" 
                            label="Item Weight" 
                            placeholder="Enter item description" 
                            containerStyles="w-full mb-2"
                            labelStyles="mb-4 block self-start ms-1"
                            error={errors?.deliveryItems?.otherItemWeight?.message}
                            inputStyles="focus:outline-0 w-full focus:outline-none rounded-lg border-gray-300 bg-gray-50 h-[3.4em]"
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default XpressDropOffAddItemModal;