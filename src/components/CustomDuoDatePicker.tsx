import { UseFormSetValue } from "react-hook-form";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { ThemeProvider, createTheme } from "@mui/material";

interface IProps {
    setValue: UseFormSetValue<{ startDate: Dayjs | null | undefined, endDate: Dayjs | null | undefined }>,
    name: ["startDate","endDate"],
    startDate: Dayjs | null | undefined,
    endDate: Dayjs | null | undefined,
    containerClassName?: string
}


const THEME = createTheme({
    typography: {
     "fontFamily": `"Inter", sans-serif`,
    }
})
  

export default function CustomDuoDatePickerInput(props:IProps){

    const minDate = dayjs()

    return(
        <div className={`flex w-full ${props.containerClassName} my-8 gap-4`}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={THEME}>

                    <div className="w-1/'2">
                    <DatePicker 
                            minDate={minDate} 
                            value={props.startDate} 
                            className="override-mui-datepicker-styles" 
                            onChange={(val) => props.setValue('startDate',val)} 
                            sx={{
                                MuiPickersToolbar: {
                                    styleOverrides: {
                                    root: {
                                        fontFamily: 'Inter, sans-serif',
                                    },
                                    }
                                },
                                MuiPickersDay: {
                                    styleOverrides: {
                                        root: {
                                        border: '2px solid black',
                                        ":focus": {
                                            border: '2px solid black',
                                            outline: 'none',
                                            outlineOffset: 'none'
                                        }
                                        },
                                    }
                                }
                            }}
                        />
                    </div>
                    <div className="w-1/'2">
                        <DatePicker 
                            minDate={minDate} 
                            value={props.endDate} 
                            onChange={(val) => props.setValue('endDate',val)}
                            className="override-mui-datepicker-styles" 
                            sx={{
                                MuiPickersToolbar: {
                                    styleOverrides: {
                                        root: {
                                        fontFamily: `"Inter", sans-serif`,
                                        },
                                    }
                                },
                            }}
                        />                
                    </div>
                </ThemeProvider>
            </LocalizationProvider>
        </div>
    )
}