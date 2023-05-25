/* eslint-disable no-unused-vars */

'use client';

import { useState } from 'react';
import { FilterCheckbox, FilterPersonalizedCheckbox } from './index';

type Option = {
  text: string;
  filter_value: string;
}

type FilterCheckboxGroupProps = {
  options: Option[];
  filter: string;
  onSelectedoOptionChange: (option:Option | null) => void;
  onRangeValueChange: (rangeValue: string | null) => void;
};

const FilterCheckboxGroup = (
  {
    options,
    onSelectedoOptionChange,
    onRangeValueChange,
    filter,
  }: FilterCheckboxGroupProps,
) => {
  const [selectedOption, setSelectedOption] = useState<Option>({ text: '', filter_value: '' });
  const lastOption = options[options.length - 1];
  const isPersonalized = lastOption.text === 'Personalizado';
  const renderOptions = options.slice(0, isPersonalized
    ? -1
    : options.length);

  const handleOptionChange = (option: Option) => {
    setSelectedOption(option);
    onSelectedoOptionChange(option);
  };

  const handleRangeValueChange = (rangeValue: string | null) => {
    onRangeValueChange(rangeValue);
  };

  return (
    <>
      {renderOptions.map((option, index) => (
        <div
          key={index}
          className="flex items-center relative
          min-h-[18px] mb-2"
        >
          <FilterCheckbox
            option={option}
            selectedOption={selectedOption}
            type={filter}
            onChange={handleOptionChange}
          />
        </div>
      ))}
      {
        isPersonalized && (
          <div>
            <FilterPersonalizedCheckbox
              option={lastOption}
              filter={filter}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
              onChangeRangeValue={handleRangeValueChange}
            />
          </div>
        )
      }
    </>
  );
};

export default FilterCheckboxGroup;
