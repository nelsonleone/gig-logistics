import { Control, Controller } from "react-hook-form";
import { DatePickerInput, DatePickerProps } from '@mantine/dates'
import { inter } from "@/app/fonts";

interface IProps {
    control: Control<{ startDate: Date | null, endDate: Date | null },undefined>,
    name: ["startDate","endDate"]
}

  

export default function CustomDuoDatePickerInput(props:IProps){

    return(
        <div className="flex w-full">
            <div className="w-1/2">
                <Controller
                    control={props.control}
                    name={props.name[0]}
                    render={({ field }) => (
                        <DatePickerInput
                            placeholder="Start Date"
                            firstDayOfWeek={0}
                            clearable
                            {...field}
                            ariaLabels={{
                                nextDecade: 'Next decade',
                                previousDecade: 'Previous decade',
                                nextYear: 'Next year',
                                previousYear: 'Previous year',
                                nextMonth: 'Next month',
                                previousMonth: 'Previous month',
                                yearLevelControl: 'Change to decade view',
                                monthLevelControl: 'Change to year view',
                            }}
                            className={`${inter.className} h-14`}
                        />
                    )}
                />
            </div>
            <div className="w-1/2">
                <Controller
                    control={props.control}
                    name={props.name[1]}
                    render={({ field }) => (
                        <DatePickerInput
                            placeholder="End Date"
                            firstDayOfWeek={0}
                            clearable
                            {...field}
                            ariaLabels={{
                                nextDecade: 'Next decade',
                                previousDecade: 'Previous decade',
                                nextYear: 'Next year',
                                previousYear: 'Previous year',
                                nextMonth: 'Next month',
                                previousMonth: 'Previous month',
                                yearLevelControl: 'Change to decade view',
                                monthLevelControl: 'Change to year view',
                            }}
                            className={`${inter.className} h-14`}
                        />
                    )}
                />
            </div>
        </div>
    )
}