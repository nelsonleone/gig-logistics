import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

export default function Demo() {
  const [value, onChange] = useState(new Date());
  return <DatePicker value={value}  />;
}