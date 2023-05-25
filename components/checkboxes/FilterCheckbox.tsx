/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import styles from '../../styles';

type Option = {
  text: string;
  filter_value: string;
}

type Props = {
  option: Option;
  selectedOption: Option;
  type: string;
  onChange: (option: Option) => void;
};

const FilterCheckbox = ({ option, selectedOption, onChange, type }: Props) => {
  const [isChecked, setIsChecked] = useState(selectedOption === option);
  const [checkedValue, setCheckedValue] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(option);
    setCheckedValue(value);
  };

  useEffect(() => {
    setIsChecked(selectedOption === option);
  }, [selectedOption, option]);

  return (
    <label className={`${styles.smallText} font-light only:inline-flex gap-2 items-center`}>
      <input
        name={type}
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
  );
};

export default FilterCheckbox;
