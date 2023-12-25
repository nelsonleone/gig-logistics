import { Text, Select } from '@mantine/core';
import { forwardRef } from 'react';
import { CountryNames } from '../../../../types';
import countriesNamesJson from '../../../componentsData/countries.json'

interface SelectItemProps {
  name: string,
}


const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ name, ...others }, ref) => (
    <div ref={ref} {...others}>
      <div>
        <Text>{name}</Text>
      </div>
    </div>
  )
)

const unfilteredCountriesData : CountryNames = countriesNamesJson as CountryNames;
const countriesNames = unfilteredCountriesData.map(val => val.name)


export default function CountrySearchableSelectInput() {
  
  return (
    <Select
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={countriesNames}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
    />
  )
}