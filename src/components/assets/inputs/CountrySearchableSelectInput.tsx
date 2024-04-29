import { Text, Select, MantineProvider } from '@mantine/core';
import { forwardRef } from 'react';
import { CountryNames } from '../../../../types';
import { countriesNamesArray } from '../../../componentsData/countries'

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

const unfilteredCountriesData : CountryNames = countriesNamesArray as CountryNames;
const countriesNames = unfilteredCountriesData.map(val => val.name)


export default function CountrySearchableSelectInput() {
  
  return (
    <MantineProvider>
      <Select
        label="Choose employee of the month"
        placeholder="Pick one"
        component={SelectItem}
        data={countriesNames}
        searchable
        maxDropdownHeight={400}
      />
    </MantineProvider>
  )
}