import { BiSolidMessageAltError } from "react-icons/bi";
import { inter } from '@/app/fonts';
import { Control, Controller } from "react-hook-form";
import { ICODWalletFormValues, SignInFormData, SignUpFormData } from "../../../../types";

interface IProps {
    error: string | undefined,
    label: string,
    name:  keyof SignUpFormData | keyof SignInFormData | keyof ICODWalletFormValues,
    value?: string | number,
    placeholder: string,
    inputType?: string,
    control?: Control<any,undefined>,
    labelStyles?: string,
    inputStyles?: string,
    containerStyles?: string,
    required: string | boolean
}

export default function CustomTextInput(props:IProps){

    const {
        error,
        control,
        label,
        placeholder,
        value,
        inputType,
        name,
        labelStyles,
        inputStyles,
        containerStyles,
        required
    } = props;

    return(
        <div className={`mb-8 ${inter.className} ${containerStyles}`}>
            {
                label && label.length ?
                <label htmlFor={name} className={labelStyles}>{label}:</label>
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
                    {...field}
                    value={value} 
                    className={inputStyles}
                />}
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}