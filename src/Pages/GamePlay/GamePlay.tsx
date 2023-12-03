import React, { useEffect, useState } from 'react';
import Input from '../../Components/InputFields/InputField';
import Button from '../../Components/Buttons/Button';
import Select from '../../Components/Select/Select';
import { useLocation } from 'react-router-dom';

export default function GamePlay() {
  let location = useLocation();
  const state = location.state;
  console.log("======== locaiton", state);

  const [selectValue, setSelectValue] = useState('');
  const [playType, setPlayType] = useState();
  const [shotSeries, setShotSeries] = useState(0);
  const selectOptions = [
    { value: 'select', label: 'Select status' },
    { value: 'win', label: 'Win' },
    { value: 'loose', label: 'Loose' },
  ];

  useEffect(() => {
    setPlayType(state.single_shot);
    setShotSeries(Number(state?.count));
  }, [state]);

  const handleSelect = (selectedValue: string) => {
    setSelectValue(selectedValue);
  };

  return (
    <>
      {playType === true ? (
        <>
          <div className='mt-[10rem] flex justify-around'>
            <Input
              type="text"
              style={{ marginBottom: '0.25rem' }}
              name="shots"
              title='Game Name'
            />
            <Select
              label="Game Stats"
              options={selectOptions}
              className='w-[25rem] h-[3rem]'
              setSelectedValueProp={handleSelect}
            />
          </div>
          <div className='flex justify-center mt-10'>
            <Button
              type="submit"
              text="Finish Game"
              style={{ marginBottom: '1.5rem' }}
            />
          </div>
        </>
      ) : (
        <>
            <div  className='mt-[10rem]'>
          {[...Array(shotSeries)].map((_, index) => (
              <div key={index} className='flex justify-around'>
              <Input
                type="text"
                style={{ marginBottom: '0.25rem' }}
                name={`shots_${index + 1}`}
                title={`Game Name ${index + 1}`}
              />
              <Select
                label={`Game Stats ${index + 1}`}
                options={selectOptions}
                className='w-[20rem] h-[3rem]'
                setSelectedValueProp={handleSelect}
              />
              </div>
          ))}
          </div>
          <div className='flex justify-center mt-10'>
            <Button
              type="submit"
              text="Finish Game"
              style={{ marginBottom: '1.5rem' }}
            />
          </div>
        </>
      )}
    </>
  );
}
