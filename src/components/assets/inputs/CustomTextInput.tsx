"use client"

import { BiSolidMessageAltError } from "react-icons/bi";
import { inter } from '@/app/fonts';
import { Control, Controller } from "react-hook-form";
import { DeliveryItems, ICODWalletFormValues, IProfileDetailsUpdateFormData, OverseasShippingItemInfo, PersonalShoppingItemDetailsFormInfo, SignInFormData, SignUpFormData } from "../../../../types";

interface IProps {
    error?: string | undefined,
    label: string,
    name:  keyof SignUpFormData | keyof SignInFormData | keyof OverseasShippingItemInfo | keyof ICODWalletFormValues | keyof PersonalShoppingItemDetailsFormInfo | keyof IProfileDetailsUpdateFormData | 'sender.fullName' | 'sender.firstName' | 'sender.lastName' | 'sender.email' | 'sender.phoneNumber' |
    'receiver.fullName' | `receiver.deliveryOption.homeDelivery.address` | `receiver.deliveryOption.terminalPickup.stateOrCity` | `receiver.deliveryOption.terminalPickup.closestGIGLCenter` | keyof DeliveryItems,

    value?: string | number,
    placeholder: string,
    inputType?: "email" | "text" | "number",
    control?: Control<any,undefined>,
    labelStyles?: string,   
    inputStyles?: string,
    containerStyles?: string,
    required?: string,
    readOnly?: boolean,
    id: string,
    defaultValue?: string,
    rule?: {[key:string]:string | { value: number, message: string}}
}

export default function CustomTextInput(props:IProps){

    const {
        error,
        defaultValue,
        control,
        label,
        placeholder,
        value,
        inputType,
        name,
        labelStyles,
        inputStyles,
        containerStyles,
        required,
        readOnly,
        id,
        rule
    } = props;

    return(
        <div className={`mb-8 ${inter.className} ${containerStyles}`}>
            {
                label && label.length ?
                <label htmlFor={id} className={labelStyles}>{label}</label>
                :
                null
            }
            <Controller
                name={name as keyof ICODWalletFormValues}
                control={control || undefined}
                rules={{required, ...rule }}
                render={({ field }) => 
                <input 
                    type={inputType || "text"} 
                    placeholder={placeholder || label} 
                    aria-invalid={error ? "true" : "false"} 
                    readOnly={readOnly}
                    {...field}
                    defaultValue={defaultValue}
                    value={value}
                    id={id}
                    className={`${inputStyles} placeholder:text-gray-400 outline-offset-0 focus:outline-offset-0 ${error ? "border-red-500 focus:outline-red-500 md:focus:outline-red-500" : ""}`}
                />}
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
            }
        </div>
    )
}