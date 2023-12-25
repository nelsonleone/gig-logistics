"use client"

import Select from 'react-select'
import { DomesticQuoteObj } from '../../../../types'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  data: {
    value: string,
    label: string
  }[],
  placeholder: string,
  id: string,
  control: Control<DomesticQuoteObj,any>
}


export default function CustomSelect({ data, placeholder, id, control }:IProps){

  return(
    <Controller  
      name={id as keyof DomesticQuoteObj}
      control={control}
      rules={{required:"Receiver Station is required"}}
      render={({ field }) => (
        <Select   
          {...field}
          styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: '.35em',
            borderRadius: '13px',
          }),
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontSize: '.9rem'
          })
          }} 
          options={data as any} 
          placeholder={placeholder}
          isClearable 
          id={id} 
        />
    )}/>
  )
}