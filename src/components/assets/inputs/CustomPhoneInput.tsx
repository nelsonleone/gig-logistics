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
    readonly?: boolean,
    value?: string,
    containerStyles?: string,
    labelStyles?: string
}

function CustomPhoneInput({ control, name, label, error, className, id, value, readonly,labelStyles, containerStyles }:IProps) {
  return (
        <div className={containerStyles}>
            {
                label &&
                <label htmlFor={id} className={`cod_form_input_label ${labelStyles}`}>Phone Number</label>
            }
            {
                readonly ?
                <PhoneInput id={id} value={value} onChange={() => {}} defaultCountry='US' className={`${classes.phoneInput} ${className} mb-8`} />
                :
                <Controller
                    name={name as keyof object}
                    control={control || undefined}
                    render={({ field }) =>
                        <PhoneInput id={id} {...field } value={value} onChange={() => {}} defaultCountry='US' className={`${classes.phoneInput} ${className} mb-8`} />
                    }
                />
            }
            {
                error &&
                <p role="alert" className="text-red-500 text-sm mt-3"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}

export default CustomPhoneInput;