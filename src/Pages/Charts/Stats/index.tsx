import React, { useEffect, useState } from 'react';
import BubbleChart from './BubbleChart';
import LineChart from './LineChart';
import Select from '../../../Components/Select/Select';

export default function Charts() {
  const [selectValue, setSelectValue] = useState("bar");
  const selectOptions = [
    { value: 'bar', label: 'Bar Stats' },
    { value: 'bubble', label: 'Bubble Stats' },
  ];

  const handleSelect = (selectedValue: string) => {
    setSelectValue(selectedValue);
  };

  useEffect(() => {
    console.log("Selected Value: ", selectValue);
  }, [selectValue]);

  return (
    <div>
      <Select
        label="Choose Stats"
        options={selectOptions}
        className='w-[15rem]'
        setSelectedValueProp={handleSelect}
      />
      {selectValue === "bubble" ? <BubbleChart /> : <LineChart />}
    </div>
  );
}
 