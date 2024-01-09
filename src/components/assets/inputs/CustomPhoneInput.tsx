import { Controller, Control } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import classes from './phone-input-customStyles.module.css'
import PhoneInput from 'react-phone-number-input'
import { BiSolidMessageAltError } from 'react-icons/bi'

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
}

function CustomPhoneInput({ control, name, placeholder, label, error, className, id, value, readOnly,labelStyles, containerStyles }:IProps) {
  return (
        <div className={containerStyles}>
            {
                label &&
                <label htmlFor={id} className={`cod_form_input_label ${labelStyles}`}>Phone Number</label>
            }
            <Controller
                name={name as keyof object}
                control={control || undefined}
                render={({ field }) =>
                    <PhoneInput id={id} readOnly={readOnly} {...field } placeholder={placeholder} value={value} onChange={() => {}} defaultCountry='NG' className={`${classes.phoneInput} ${className} mb-8`} />
                }
            />
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}

export default CustomPhoneInput;