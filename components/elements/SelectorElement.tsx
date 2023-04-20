'use client';

import React, { useState } from 'react';
import styles from '../../styles';

type Props = {
  title: string,
  options: string[]
}

const SelectorElement = ({ title, options }:Props) => {
  const [selectOption, setSelectOption] = useState(options[0]);

  const handleOnOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOption(event.target.value);
  };

  return (
    <div
      className="mb-2"
    >
      <label
        className={`${styles.paragraph} block`}
        htmlFor="opcion"
      >
        {title}
      </label>
      <select
        className="select-custom rounded-md shadow-lg border
        border-[#C0C0C0] hover:border-[#3c3939]
        bg-white w-[100%] p-3 my-2 cursor-pointer
        focus-within:ring-1"
        name={`selector ${title}`}
        id={`selector ${title}`}
        value={selectOption}
        onChange={handleOnOptionChange}
      >
        {
          options.map((option, index) => (
            <option
              className="block px-3 py-2"
              key={index}
              value={option}
            >
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
};

export default SelectorElement;
