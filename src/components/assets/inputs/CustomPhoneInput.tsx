import { Controller, Control } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import classes from './phone-input-customStyles.module.css'
import PhoneInput from 'react-phone-number-input'
import { BiSolidMessageAltError } from 'react-icons/bi'

interface IProps {
    control: Control<any,undefined>,
    name: string,
    label?: string,
    error?: string
}

function CustomPhoneInput({ control, name, label, error }:IProps) {
  return (
        <div>
            {
                label &&
                <label htmlFor={name} className='cod_form_input_label'>Phone Number:</label>
            }
            <Controller
                name={name as keyof object}
                control={control}
                render={({ field }) =>
                <PhoneInput {...field} className={`${classes.phoneInput} mb-8`} />
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