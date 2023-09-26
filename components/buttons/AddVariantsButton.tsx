'use client';

import React, { useState } from 'react';
import styles from '../../styles';

interface Props {
  idx: number;
}

const AddVariantsButton = ({ idx }: Props) => {
  const [isEditingVariant, setIsEditingisEditingVariant] = useState(false);
  const [variantInputValue, setVariantInputValue] = useState('');

  const [isEditingOption, setIsEditingOption] = useState(false);
  const [optionInputValue, setOptionInputValue] = useState('');

  const [currentOptionNumber, setCurrentOptionNumber] = useState(1);
  const [options, setOptions] = useState<string[]>([]);

  const handleVariantButtonClick = () => {
    setIsEditingisEditingVariant(true);
  };

  const handleInputVariantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVariantInputValue(e.target.value);
  };

  const handleInputVariantBlur = () => {
    setIsEditingisEditingVariant(false);
  };

  const handleOptionButtonClick = () => {
    setIsEditingOption(true);
    setOptionInputValue(`Escribe una opción ${currentOptionNumber}`);
  };

  const handleInputOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionInputValue(e.target.value);
  };

  const handleInputOptionBlur = () => {
    setIsEditingOption(false);
  };

  const handleAddOptionClick = () => {
    if (optionInputValue.trim() !== '') {
      setOptions([...options, optionInputValue]);
      setCurrentOptionNumber(currentOptionNumber + 1);
    }
    setOptionInputValue('');
  };

  return (
    <div className={`${idx === 1
      ? 'lg:px-2 lg:py-0 py-2' : 'px-0'} lg:w-[33.33%] w-full float-left md:my-1 my-4`}
    >
      {isEditingVariant || variantInputValue ? (
        <input
          type="text"
          value={variantInputValue}
          onChange={handleInputVariantChange}
          onBlur={handleInputVariantBlur}
          className={`${styles.smallText} rounded shadow-md bg-white border-[rgba(0,0,0,.15)] border-[1px]
    indent-[0.01px] h-[38px] w-full px-3 flex flex-row items-center gap-5`}
        />
      ) : (
        <button
          type="button"
          onClick={handleVariantButtonClick}
          className={`${styles.smallText} rounded shadow-md bg-white border-[rgba(0,0,0,.15)] border-[1px]
    indent-[0.01px] h-[38px] w-full px-3 flex flex-row items-center gap-5`}
        >
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
            >
              <path
                d="M10 18V9.5M10 9.5V1M10 9.5H19M10 9.5H1"
                stroke="#757575"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Añadir variante
        </button>
      )}
      {isEditingOption || optionInputValue ? (
        <div>
          <div className="relative">
            <input
              type="text"
              value={optionInputValue}
              onChange={handleInputOptionChange}
              onBlur={handleInputOptionBlur}
              className={`${styles.smallText} rounded shadow-md bg-white border-[rgba(0,0,0,.15)] border-[1px] indent-[0.01px] h-[38px] w-full px-3 flex flex-row items-center gap-5 mt-3 pr-10`}
            />
            <button
              type="button"
              onClick={handleAddOptionClick}
              className="absolute top-0 right-0 h-full px-2 py-1 bg-black border-[rgba(0,0,0,.15)] text-white rounded-r shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Agregar
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className={`${styles.smallText} rounded shadow-md bg-white border-[rgba(0,0,0,.15)] border-[1px]
          indent-[0.01px] h-[38px] w-full px-3 flex flex-row items-center gap-5 mt-3`}
          onClick={handleOptionButtonClick}
        >
          <span className="inline-block">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="3" fill="#595959" />
            </svg>
          </span>
          Añadir opciones
        </button>
      )}
      <p className="text-gray-500 mt-1">
        {options.map((option, index) => (
          <span key={index}>
            {`${index + 1}. ${option}`}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default AddVariantsButton;
