import { Controller, Control } from 'react-hook-form'
import { ICODWalletFormValues } from '../../../../types'

interface IProps {
    control?: Control<ICODWalletFormValues,undefined>
}

export default function CustomBasicSelect(props:IProps){

    const { control } = props;

    return(
        <div>
            <label htmlFor='gender' className="cod_form_input_label">Gender</label>
            <Controller
                name="gender"
                control={control}
                rules={{required:"This field is required"}}
                render={({ field }) => <select 
                {...field} 
                className="block w-full border border-gray-300 rounded-md p-3 bg-transparent mb-8 lg:p-[.8em]"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>}
            />
        </div>
    )
}