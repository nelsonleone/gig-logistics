"use client"

import Select from 'react-select'
import { DomesticQuoteObj, InternationalQuoteObj } from '../../../../types'
import { Control, Controller } from 'react-hook-form'
import { ReactNode } from 'react'

interface IProps {
  data: {
    value: string,
    label: string | ReactNode
  }[],
  placeholder: string,
  name?: string,
  id: keyof DomesticQuoteObj | keyof InternationalQuoteObj | string,
  control: Control<any,undefined>,
  required: boolean | string,
  hasError: boolean,
  optionStyles?: { [key: string]: string },
  selectStyles?: { [key: string]: string }
}


export default function CustomQuotePageSelect({ data, placeholder, optionStyles, selectStyles, id, name, control, required, hasError }:IProps){

  return(
    <Controller  
      name={name as keyof DomesticQuoteObj}
      control={control}
      rules={{ required }}
      render={({ field }) => (
        <Select   
          {...field}
          styles={{
            control: (baseStyles,state) => ({
              ...baseStyles,
              padding: '.33em',
              borderRadius: '12px',
              cursor: "pointer",
              position: "relative",
              borderColor: hasError ? 'red' : state.isFocused ? '#123fe0' : state.menuIsOpen ? '#123fe0' : '#9ca3af',
              outlineOffset: "none",
              textOverflow: "ellipsis",
              overflow: "hidden",
              boxSizing: "border-box",
              width: "100%",
              outline: state.isFocused ? "none" : undefined,
              ...selectStyles
            }),
            menuPortal: base => ({ ...base, zIndex: 99 }),
            menu: (provided) => ({
              ...provided,
              zIndex: 99,
              position: "relative"
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              color: "black",
              position: "relative",
              zIndex: "100",
              ...optionStyles
            })
          }} 
          options={data as any} 
          placeholder={placeholder}
          className="text-[#374151]"
          isClearable 
          id={id} 
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral0: '#fff', // Background color of the placeholder
              primary: '#9ca3af',
            },
          })}
        />
    )}/>
  )
}