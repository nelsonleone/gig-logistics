import { useForm, useWatch } from "react-hook-form";
import { OutBoundShippingSenderInfo } from "../../types";
import CustomTextInput from "./assets/inputs/CustomTextInput";
import { useAppSelector } from "@/redux/customHooks";
import CustomPhoneInput from "./assets/inputs/CustomPhoneInput";
import { Radio } from "@mantine/core";
import { FormControlLabel, RadioGroup } from "@mui/material";
import { OutBoundShippingSenderInfoPickup } from "@/enums";

function OutBoundShipmentSenderInfoMC() {

    const { control, formState:{ errors, isSubmitting }, setValue} = useForm<OutBoundShippingSenderInfo>()
    const id = "outbound-shipping"
    const { email, phoneNumber } = useAppSelector(store => store.authUser)
    const pickupTime = useWatch({ control, name: 'pickupTime'})

    return (
        <form>
            <h2>Sender information</h2>

            <div>
                <CustomTextInput
                    label="Sender's Address" 
                    control={control}
                    placeholder="Enter sender address"
                    error={errors?.senderAddress?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-senderAddress`} 
                    name="senderAddress"
                />
                <CustomTextInput
                    label="Sender's Name" 
                    control={control}
                    placeholder="Enter sender's name"
                    error={errors?.senderName?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-senderName`} 
                    name="senderName"
                />

                <CustomPhoneInput 
                    name="phoneNumber" 
                    id={`${id}-phoneNumber`} 
                    label="Phone Number"
                    required="Please this field is required"
                    labelStyles="mb-4 block self-start ms-1"
                    placeholder="Phone Number"
                    className="phoneInput-xpressDropOff h-[3.6em]"
                    control={control}
                    value={phoneNumber}
                    containerStyles="w-[100%] mx-auto"
                    error={errors?.phoneNumber?.message}
                />

                <CustomTextInput
                    label="Email:" 
                    control={control}
                    placeholder="Enter email"
                    value={email}
                    error={errors?.email?.message}
                    containerStyles="w-full mt-5"
                    labelStyles="mb-2 text-[.95rem] md:text-base block self-start ms-1"
                    inputStyles="w-full placeholder:text-[.95rem] border-gray-300 rounded-lg focus:border-none focus:outline-orange-500 md:focus:outline-black bg-gray-50 h-[3.4em]"
                    id={`${id}-email`} 
                    name="email"
                />

                <div>
                    <p id={`${id}-pickupTime-input-label`}>Right Now</p>
                    <RadioGroup
                        aria-labelledby={`${id}-pickupTime-input-label`}
                        name={`${id}-pickupTime-rightNow`}
                        value={pickupTime}
                        onChange={(e) => setValue('pickupTime',e.target.value as OutBoundShippingSenderInfoPickup)}
                    >
                       <div>
                         <FormControlLabel label="" value={OutBoundShippingSenderInfoPickup.rightnow} control={<Radio />} />
                       </div>
                       <div>
                         <FormControlLabel label="" value={OutBoundShippingSenderInfoPickup.later} control={<Radio />} />
                       </div>
                    </RadioGroup>
                </div>
            </div>
        </form>
    )
}

export default OutBoundShipmentSenderInfoMC;