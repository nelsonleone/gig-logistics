import { Controller, Control } from 'react-hook-form'
import { RadioGroupData } from '../../../../types';
import { BiSolidMessageAltError } from 'react-icons/bi';
import { inter } from '@/app/fonts';

interface ISelectOptionsData extends RadioGroupData {}

interface IProps {
    control?: Control<any,undefined> ,
    label?: string,
    name: string,
    id: string,
    labelStyles?: string,
    containerStyles?: string,
    selectStyles?: string,
    error?: string,
    selectOptionsData: ISelectOptionsData,
    placeholder?: string
}

export default function CustomBasicSelect(props:IProps){

    const { control, selectOptionsData, id, error, name, labelStyles, label, containerStyles, selectStyles } = props;

    return(
        <div className={containerStyles}>
            {
                label &&
                <label htmlFor={id} className={`basic_custom_select_label ${labelStyles}`}>{label}</label>
            }
            <Controller
                name={name}
                control={control}
                rules={{required:"This field is required"}}
                render={({ field }) => (
                <select 
                    {...field} 
                    defaultValue=""
                    
                    aria-invalid={error ? "true" : "false"}
                    className={`block w-full border border-gray-300 rounded-md p-3 bg-transparent mb-8 lg:p-[.8em] ${selectStyles}`}
                  >
                    {
                        selectOptionsData.map(val => {
                            return(
                                <option className={`${inter.className}`} value={val.value}>{val.label}</option>
                            )
                        })
                    }
                </select>)}
            />
            {
                error &&
                <p role="alert" className="text-primary2 text-sm mt-3"><BiSolidMessageAltError />{error}</p>
            }
        </div>
    )
}