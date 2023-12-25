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
}


export default function CustomQuotePageSelect({ data, placeholder, id, control }:IProps){

  return(
    <Controller  
      name={id as keyof DomesticQuoteObj}
      control={control}
      rules={{required: id === "quote_origin" ? "Sender's Station Is Required" : id === "quote_destination" ? "Receiver Station is required" : ""}}
      render={({ field }) => (
        <Select   
          {...field}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              padding: '.33em',
              borderRadius: '12px',
              cursor: "pointer"
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              fontSize: '.9rem',
              color: "#9ca3af",
              textTransform: "capitalize"
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
        />
    )}/>
  )
}