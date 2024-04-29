import { UseFormSetValue } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from "react";

interface IProps {
    setValue: UseFormSetValue<{ startDate: Dayjs | null | undefined, endDate: Dayjs | null | undefined }>,
    name: ["startDate","endDate"],
    startDate: Dayjs | null | undefined,
    endDate: Dayjs | null | undefined,
    containerClassName?: string
}
  

export default function CustomDuoDatePickerInput(props:IProps){

    const minDate = dayjs()
    const [localDateValues,setLocalDateValues] = useState<{startDate: Dayjs | null, endDate: Dayjs | null}>({
        startDate: null,
        endDate: null
    })

    const handleDateChange = (name:string,value:Dayjs|null) => {
        setLocalDateValues(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        props.setValue('startDate',localDateValues.startDate)
    },[localDateValues.startDate])

    useEffect(() => {
        props.setValue('endDate',localDateValues.endDate)
    },[localDateValues.endDate])

    return(
        <div className={`flex w-full ${props.containerClassName} my-8 gap-4`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="w-1/'2">
                    <DatePicker 
                        name="startDate"
                        minDate={minDate} 
                        value={localDateValues.startDate} 
                        className="override-mui-datepicker-styles" 
                        onChange={((value) => handleDateChange("startDate",value))} 
                    />
                </div>
                <div className="w-1/'2">
                    <DatePicker 
                        name="endDate"
                        minDate={minDate} 
                        value={localDateValues.endDate} 
                        onChange={((value) => handleDateChange("endDate",value))} 
                        className="override-mui-datepicker-styles" 
                    />                
                </div>
            </LocalizationProvider>
        </div>
    )
}