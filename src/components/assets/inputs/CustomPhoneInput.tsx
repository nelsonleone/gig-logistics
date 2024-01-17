import { Controller, Control } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import classes from './phone-input-customStyles.module.css'
import PhoneInput from 'react-phone-number-input'
import { BiSolidMessageAltError } from 'react-icons/bi'
import { notifications } from '@mantine/notifications'

interface IProps {
    control?: Control<any,undefined>,
    name: string,
    label?: string,
    error?: string,
    className: string,
    id: string,
    readOnly?: boolean,
    value?: string,
    containerStyles?: string,
    labelStyles?: string,
    placeholder?: string,
    required?: string
}

function CustomPhoneInput({ control, name, placeholder, required, label, error, className, id, value, readOnly,labelStyles, containerStyles }:IProps) {
  
    return (
        <div className={` mb-8 ${containerStyles}`}>
            {
                label &&
                <label htmlFor={id} className={`cod_form_input_label ${labelStyles}`}>Phone Number</label>
            }
            {
                readOnly ?
                <Controller
                    name={name as keyof object}
                    control={control || undefined}
                    render={({ field }) =>
                        <PhoneInput id={id} readOnly={readOnly} {...field } value={value} placeholder={placeholder} defaultCountry='NG' className={`${classes.phoneInput} ${className} mb-8`} />
                    }
                />
                :
                <Controller
                    name={name as keyof object}
                    control={control || undefined}
                    rules={{ required: required || "Phone number is a required field" }}
                    render={({ field }) =>
                        <PhoneInput id={id} {...field } placeholder={placeholder} defaultCountry='NG' className={`${classes.phoneInput} ${className}`} />
                    }
                />
            }
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3 flex gap-2 items-center"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}

export default CustomPhoneInput;