"use client"

import { OutBoundShippingSenderInfo } from "../../types";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import { useAppDispatch } from "@/redux/customHooks";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { Radio, RadioGroup } from "@mantine/core";
import { OutBoundShippingSenderInfoPickup } from "@/enums";
import { Controller, SubmitHandler, useForm, useWatch } from "react-hook-form";
import { DatePickerInput, DateValue } from "@mantine/dates";
import RadioStyles from '../LibCSSModules/OutBoundShippingPickupTimeRadioGroup.module.css'
import { useRouter } from "next/navigation";
import { setSenderInfo } from "@/redux/slices/outboundShippingFormDataSlice";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BiSolidMessageAltError } from "react-icons/bi";

const formSchema = Yup.object().shape({    
    name: Yup.string().required('This is a required field'),
    phoneNumber: Yup.string().required('Phone Number is a required field'),
    email: Yup.string().required('Email is a required field').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
       'Invalid email format'
    ),
    address: Yup.string().required('Please input address'),
    pickupTime: Yup.string().required('Please choose a pickup time'),
    pickupTimeLater: Yup.date()
})

function OutBoundShipmentSenderInfoMC() {

    const { control, formState:{ errors, isSubmitting }, setValue, handleSubmit, setError, clearErrors } = useForm<OutBoundShippingSenderInfo>({ resolver: yupResolver(formSchema) })
    const id = "outbound-shipping"
    const pickupTime = useWatch({ control, name: 'pickupTime'})
    const pickupTimeLater = useWatch({ control, name: 'pickupTimeLater'})
    const router = useRouter()
    const dispatch = useAppDispatch()

    const handleDateSelect = (value:DateValue) => {
        setValue('pickupTimeLater',value || undefined)
        if(value){
            clearErrors('pickupTimeLater')
        }
    }

    const handleSetSenderInfo : SubmitHandler<OutBoundShippingSenderInfo> = (data) => {
        if(pickupTime === OutBoundShippingSenderInfoPickup.later && !pickupTimeLater){
            setError('pickupTimeLater',{ message: "Please choose Schedule date" })
            return;
        }

        dispatch(setSenderInfo({...data, pickupTimeLater: data.pickupTimeLater?.getTime()}))

        router.push('/app-panel/outbound-shipment/vehicle-info')
    }

    return (
        <form className="pb-8 md:w-3/4 lg:w-1/2 md:mx-auto" onSubmit={handleSubmit(handleSetSenderInfo)}>
            <h2 className="font-bold text-2xl text-center mx-auto my-8">Sender information</h2>

            <div>
                <CustomTextInput
                    label="Sender's Address" 
                    control={control}
                    placeholder="Enter sender address"
                    error={errors?.address?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-senderAddress`} 
                    name="address"
                />
                <CustomTextInput
                    label="Sender's Name" 
                    control={control}
                    placeholder="Enter sender's name"
                    error={errors?.name?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-senderName`} 
                    name="name"
                />

                <CustomPhoneInput 
                    name="phoneNumber" 
                    id={`${id}-phoneNumber`} 
                    label="Phone Number"
                    required="Please this field is required"
                    labelStyles="mb-4 block self-start ms-1"
                    placeholder="Phone Number"
                    className="phoneInput-xpressDropOff h-[3em]"
                    control={control}
                    containerStyles="w-[100%] mx-auto"
                    error={errors?.phoneNumber?.message}
                />
                <CustomTextInput
                    label="Email:"
                    inputType="email" 
                    control={control}
                    placeholder="Enter email address"
                    error={errors?.email?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black h-[3.1em]"
                    id={`${id}-email`} 
                    name="email"
                />

                <div>
                    <div>
                        <p id={`${id}-pickupTime-input-label`} className="mb-2 text-[.95rem] md:text-base block self-start ms-1">Pickup Time:</p>

                        <Controller 
                           control={control}
                           name="pickupTime"
                           render={({ field }) => (
                                <RadioGroup
                                    {...field}
                                    color="dark"
                                    >
                                    <div className="border border-gray-300 rounded-lg ps-5 pe-3 h-[3.2em] my-4 flex justify-between gap-8 items-center">
                                        <p className="text-sm">Right now</p>
                                        <Radio color="dark" value={OutBoundShippingSenderInfoPickup.rightnow} label="" />
                                    </div>
                                    <div className="border border-gray-300 rounded-lg ps-5 pe-3 h-[3.2em] my-4 flex justify-between gap-8 items-center">
                                        <p className="text-sm">Schedule for Later</p>
                                        <Radio color="dark" value={OutBoundShippingSenderInfoPickup.later} label="" />
                                    </div>                       
                                </RadioGroup>
                           )}
                        />
                        {
                            errors.pickupTime?.message &&
                            <p role="alert" className="text-primary2 text-sm mt-3 mb-6 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.pickupTime?.message}</p>
                        }
                    </div>

                    {
                        pickupTime === OutBoundShippingSenderInfoPickup.later &&
                        <Controller 
                           control={control}
                           name="pickupTimeLater"
                           render={({ field }) => (
                            <DatePickerInput
                                {...field}
                                onChange={handleDateSelect}
                                dropdownType="modal"
                                clearable
                                minDate={new Date()}
                                placeholder="Schedule date"
                                classNames={{
                                    root: RadioStyles.root,
                                    input: RadioStyles.input,
                                    wrapper: RadioStyles.wrapper,
                                    placeholder: RadioStyles.placeholder
                                }}
                            />
                           )}
                        />
                    }   
                    {
                        errors.pickupTimeLater?.message &&
                        <p role="alert" className="text-primary2 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{errors.pickupTimeLater?.message}</p>
                    }
                </div>
            </div>

            <button disabled={isSubmitting} className="block w-full rounded-md base-color1 bg-base-color2 font-medium p-4 text-center mx-auto md:w-[20em] mt-12 hover:opacity-90 focus:bg-transparent focus:base-color2 focus:outline focus:outline-2 focus:outline-black">Proceed</button>
        </form>
    )
}

export default OutBoundShipmentSenderInfoMC;