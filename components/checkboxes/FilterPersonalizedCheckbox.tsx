/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles';

type Option = {
  text: string;
  filter_value: string;
}

type Props = {
  option: Option;
  selectedOption: Option;
  filter: string;
  onChange: (option: Option) => void;
  onChangeRangeValue: (rangeValue: string | null) => void;
};

const FilterPersonalizedCheckbox = (
  {
    option,
    selectedOption,
    onChangeRangeValue,
    onChange,
    filter,
  }: Props,
) => {
  const [isChecked, setIsChecked] = useState<boolean>(selectedOption === option);
  const [checkedValue, setCheckedValue] = useState<string>('');
  const [rangeValue, setRangeValue] = useState<string | null>('');

  const minimumInputRef = useRef<HTMLInputElement>(null);
  const maximumInputRef = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(option);
    setCheckedValue(value);
    if (!isChecked) {
      setRangeValue(null);
      onChangeRangeValue(null);
    } else {
      const [minValue, maxValue] = rangeValue ? rangeValue.split('_') : ['', ''];
      setRangeValue(`${parseFloat(minValue) || ''}_${parseFloat(maxValue) || ''}`);
      onChangeRangeValue(rangeValue);
    }
  };

  const handleMinimumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = event.target.value;
    const [_, maxValue] = rangeValue ? rangeValue.split('_') : ['', ''];
    const newRangeValue = `${parseFloat(newMinValue) || ''}_${parseFloat(maxValue) || ''}`;
    setRangeValue(newRangeValue);
    onChangeRangeValue(newRangeValue);
  };

  const handleMaximumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = event.target.value;
    const [minValue, _] = rangeValue ? rangeValue.split('_') : ['', ''];
    const newRangeValue = `${parseFloat(minValue) || ''}_${parseFloat(newMaxValue) || ''}`;
    setRangeValue(newRangeValue);
    onChangeRangeValue(newRangeValue);
  };

  useEffect(() => {
    setIsChecked(selectedOption === option);
  }, [selectedOption, option]);

  useEffect(() => {
    if (!isChecked) {
      setRangeValue(null);
      onChangeRangeValue(null);
    }
  }, [isChecked, onChangeRangeValue]);

  return (
    <>
      <div
        className="flex items-center relative
        min-h-[18px] mb-2"
      >
        <label className={`${styles.smallText} font-light only:inline-flex gap-2 items-center`}>
          <input
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
            aria-label={option.text}
            value={option.filter_value}
          />
          <div
            className={`w-[18px] h-[18px] min-w-[18px] flex items-center cursor-pointer
          justify-center rounded-full border-2 border-gray-400 transition-colors duration-200
          ${isChecked ? 'bg-black' : ''}`}
          >
            {isChecked && <div className="w-2 h-2 rounded-full bg-white" />}
          </div>
          {option.text}
        </label>
      </div>
      <div
        className="flex flex-wrap bottom-1 relative ml-4 "
      >
        <div
          className="inline-flex grow basis-[75%] max-w-[75%] self-center"
        >
          <div
            className="grow basis-[41.66%] max-w-[41.66%]"
          >
            <label
              className="border-0 absolute inset-0 -m-[1px]
              h-[1px] overflow-hidden p-0 w-[1px]"
              htmlFor={`search-filter-minimum-${filter}`}
            >
              Ingresa el precio mínimo
            </label>
            <input
              id={`search-filter-minimum-${filter}`}
              placeholder="Mínimo"
              step="0.01"
              type="number"
              ref={minimumInputRef}
              onFocus={handleCheckboxChange}
              value={isChecked && rangeValue ? parseFloat(rangeValue.split('_')[0]) || '' : ''}
              onChange={handleMinimumChange}
              className={`${styles.labelText} h-[36px] transition
              border-200ms ease-out bg-200ms appearance-none
              bg-[#fff] border-[1px] rounded-md block py-2 px-3
              w-full min-w-0 shadow-inner focus:outline-none`}
            />
          </div>
          <div
            className="grow basis-[16.66%] max-w-[16.66%] text-center"
          >
            <div
              className={`${styles.smallText} font-light transform -translate-y-1/2
              relative top-[50%]`}
            >
              a
            </div>
          </div>
          <div
            className="grow basis-[41.66%] max-w-[41.66%]"
          >
            <label
              className="border-0 absolute inset-0 -m-[1px]
              h-[1px] overflow-hidden p-0 w-[1px]"
              htmlFor={`search-filter-maximum-${filter}`}
            >
              Ingresa el precio máximo
            </label>
            <input
              id={`search-filter-maximum-${filter}`}
              placeholder="Máximo"
              step="0.01"
              type="number"
              ref={maximumInputRef}
              onFocus={handleCheckboxChange}
              value={isChecked && rangeValue ? parseFloat(rangeValue.split('_')[1]) || '' : ''}
              onChange={handleMaximumChange}
              className={`${styles.labelText} h-[36px] transition
              border-200ms ease-out bg-200ms appearance-none
              bg-[#fff] border-[1px] rounded-md block py-2 px-3
              w-full min-w-0 shadow-inner`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterPersonalizedCheckbox;
