import { useState } from 'react';
import { UnstyledButton, Menu, Image, Group, Select } from '@mantine/core';
import classes from './OriginDestinationSelect.module.css';
import { FaAngleDown } from 'react-icons/fa';

const data = [
  { label: 'USA', image: '/icons/uinted-states' },
  { label: 'UK', image: '/icons/united-kingdom' },
  { label: 'CHINA', image: '/icons/china' },
]

export function LanguagePicker() {
  const [opened, setOpened] = useState(false)
  const [selected, setSelected] = useState<typeof data[0]>()

  const items = data.map((item) => (
    <Menu.Item
      icon={<Image src={item.image} width={18} height={18} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ))

    return (
        <Select
          mt="md"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          placeholder="Pick one"
          label="Your favorite library/framework"
          classNames={classes}
        />
    )
}