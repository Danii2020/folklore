import React from 'react';
import styles from '../../styles';

type Option = {
  optionGroupTitle: string;
  options: {
    optionTitle: string;
    idTitle: string;
  }[]
}

type SelectOptionType = {
  defaultId: string;
  defaultTitle: string;
  options: Option[];
}

interface SelectOption {
  selectOption: SelectOptionType;
}

const ShopSelectorElement: React.FC<SelectOption> = ({ selectOption }) => (
  <div
    id={selectOption.defaultId}
    className={`${
      selectOption.defaultId === 'is_supply'
        ? 'md:px-2 md:py-0 py-2' : 'px-0'} md:w-[33.33%] w-full float-left`}
  >
    <div>
      <div className="relative">
        <label
          className="border-0 h-[1px] -m-[1px] overflow-hidden p-0 absolute w-[1px]"
          htmlFor={selectOption.defaultId}
        >
          {selectOption.defaultTitle}
        </label>
        <div id={selectOption.defaultId}>
          <select
            className={`${styles.smallText} rounded shadow-md bg-white border-[rgba(0,0,0,.15)] border-[1px]
          pl-2 indent-[0.01px] h-[38px] w-full select-custom`}
            name={`${selectOption.defaultId}-input`}
            id={`${selectOption.defaultId}-input`}
            required
          >
            <option value={selectOption.defaultId}>{selectOption.defaultTitle}</option>
            {
              selectOption.options.map((option, idx) => (
                <optgroup key={idx} label={option.optionGroupTitle}>
                  {
                    option.options.map((optionValue) => (
                      <option
                        key={optionValue.idTitle}
                        value={optionValue.idTitle}
                      >
                        {optionValue.optionTitle}
                      </option>
                    ))
                  }
                </optgroup>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default ShopSelectorElement;
