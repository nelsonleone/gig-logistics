"use client"

import Select from 'react-select'
import { DomesticQuoteObj, InternationalQuoteObj } from '../../../../types'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  data: {
    value: string,
    label: string
  }[],
  placeholder: string,
  id: keyof DomesticQuoteObj | keyof InternationalQuoteObj,
  control: any,
  required: boolean | string,
  hasError: boolean
}


export default function CustomQuotePageSelect({ data, placeholder, id, control, required, hasError }:IProps){

  return(
    <Controller  
      name={id as keyof DomesticQuoteObj}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <Select   
          {...field}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: '.33em',
              borderRadius: '12px',
              cursor: "pointer",
              borderColor: hasError ? 'red' : '#9ca3af'
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              color: "black",
            })
          }} 
          options={data as any} 
          placeholder={placeholder}
          isClearable 
          id={id} 
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: '#fff', // Background color of the placeholder
              primary: '#9ca3af', // Color of the placeholder text
            },
          })}
        />
    )}/>
  )
}