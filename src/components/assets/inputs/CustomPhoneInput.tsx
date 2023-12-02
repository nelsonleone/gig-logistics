import { Controller, Control } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import classes from './phone-input-customStyles.module.css'
import PhoneInput from 'react-phone-number-input'
import { COD_wallet_input_names } from '@/enums'
import { ICODWalletFormValues } from '../../../../types'

interface IProps {
    control: Control<ICODWalletFormValues,undefined>,
    name: string
}

function CustomPhoneInput({ control, name }:IProps) {
  return (
        <div>
            <label htmlFor={name} className='cod_form_input_label'>Phone Number:</label>
            <Controller
                name={name as COD_wallet_input_names.phoneNumber}
                control={control}
                render={({ field }) =>
                <PhoneInput {...field} className={`${classes.phoneInput} mb-8`} />
                }
            />
        </div>
    )
}

export default CustomPhoneInput;