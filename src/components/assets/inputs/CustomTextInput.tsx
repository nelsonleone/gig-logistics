"use client"

import { BiSolidMessageAltError } from "react-icons/bi";
import { inter } from '@/app/fonts';
import { Control, Controller } from "react-hook-form";
import { ICODWalletFormValues, IXpressSenderInfo, SignInFormData, SignUpFormData } from "../../../../types";

interface IProps {
    error?: string | undefined,
    label: string,
    name:  keyof SignUpFormData | keyof SignInFormData | keyof ICODWalletFormValues | keyof IXpressSenderInfo,
    value?: string | number,
    placeholder: string,
    inputType?: string,
    control?: Control<any,undefined>,
    labelStyles?: string,
    inputStyles?: string,
    containerStyles?: string,
    required?: string,
    readOnly?: boolean,
    id: string,
    defaultValue?: string
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
        id
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
                rules={{required}}
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
                    className={`${inputStyles} ${error ? "focus:outline-red-500" : ""}`}
                />}
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
            }
        </div>
    )
}