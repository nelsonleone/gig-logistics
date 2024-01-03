"use client"

import { inter } from "@/app/fonts";
import { Control, Controller } from "react-hook-form";
import { SignInFormData } from "../../../../types";
import { BiSolidMessageAltError } from "react-icons/bi";
import { HiMiniEyeSlash } from "react-icons/hi2"
import { IoEyeSharp } from "react-icons/io5"
import { IconButton } from "@mui/material";
import { useState } from "react";

interface IProps {
    error: string | undefined,
    label: string,
    name: string,
    value?: string | number,
    placeholder: string,
    control?: Control<any,undefined>,
    labelStyles?: string,
    inputStyles?: string,
    containerStyles?: string,
    required: string
}


export default function CustomPasswordInput(props:IProps){

    const {
        error,
        control,
        label,
        placeholder,
        value,
        name,
        labelStyles,
        inputStyles,
        containerStyles,
        required
    } = props;

    const [showPassword,setShowPassword] = useState(false)

    return(
        <div className={`mb-8 ${inter.className} ${containerStyles}`}>
            {
                label && label.length ?
                <label htmlFor={name} className={labelStyles}>{label}:</label>
                :
                null
            }
            <Controller
                name={name as keyof SignInFormData}
                control={control || undefined}
                rules={{required}}
                render={({ field }) => (
                    <div className="relative min-h-[3em]">
                        <input 
                            type={!showPassword ? "password" : "text"} 
                            placeholder={placeholder || label} 
                            aria-invalid={error ? "true" : "false"} 
                            {...field}
                            value={value} 
                            className={`absolute top-0 bottom-0 my-auto pe-4 left-0 w-full ${error ? "focus:outline-red-500" : ""} ${inputStyles}`}
                        />

                        <IconButton 
                           onClick={() => setShowPassword(prev => prev = !prev)} 
                           sx={{borderRadius: "10px"}} 
                           aria-label={showPassword ? "Hide Password" : "Show Password"}
                           className="absolute right-3 top-0 bottom-0 my-auto z-20" 
                           >
                            {
                                showPassword ?
                                <HiMiniEyeSlash />
                                :
                                <IoEyeSharp />
                            }
                        </IconButton>
                    </div>
                )
                }
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError className="text-lg" />{error}</p>
            }
        </div>
    )
}