"use client"

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RadioGroupData } from '../../../../types';
import { SignUpRadioInputValue } from '@/enums';
import { roboto_slab } from '@/app/fonts';

interface IProps {
  setValue: React.Dispatch<React.SetStateAction<SignUpRadioInputValue>>,
  value: string,
  id: string,
  name: string,
  radioGroupData: RadioGroupData
}

export default function CustomRadioGroup({ setValue, value, id, name, radioGroupData }:IProps) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as SignUpRadioInputValue)
  }

  return (
      <FormControl className="w-full flex flex-col justify-center items-center">
        <RadioGroup
          aria-labelledby={id}
          name={name}
          row
          value={value}
          onChange={handleChange}
        >
            {
                radioGroupData.map(val => (
                    <FormControlLabel 
                        key={val.value} 
                        value={val.value} 
                        labelPlacement='end'
                        control={<Radio sx={{
                        color: "#374151",
                        '&.Mui-checked': {
                          color: "#374151",
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 31,
                        },
                      }} />} label={val.label} 
                    />
                ))
            }
        </RadioGroup>
      </FormControl>
    )
}