import { BiSolidMessageAltError } from "react-icons/bi";
import { inter } from '@/app/fonts';
import { Control, Controller } from "react-hook-form";
import { ICODWalletFormValues } from "../../../../types";

interface IProps {
    error: string | undefined,
    label: string,
    name: string
    value: string | number,
    placeholder: string,
    inputType?: string,
    control?: Control<ICODWalletFormValues,undefined>
}

export default function CustomTextInput(props:IProps){

    const {
        error,
        control,
        label,
        placeholder,
        value,
        inputType,
        name
    } = props;

    return(
        <div className="mb-8">
            <label htmlFor={name} className="cod_form_input_label">{label}:</label>
            <Controller
                name="firstName"
                control={control || undefined}
                rules={{required: "This field is required"}}
                render={({ field }) => 
                <input 
                    type={inputType || "text"} 
                    placeholder={placeholder || label} 
                    aria-invalid={error ? "true" : "false"} 
                    {...field}
                    value={value} 
                    className="border border-gray-300 rounded-md p-3  text-sm w-full lg:p-[.8rem]"
                />}
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}