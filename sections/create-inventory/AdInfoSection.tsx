/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React, { useState } from 'react';

import styles from '../../styles';
import { InformationAdSelectorOptions } from '../../constants';
import { ShopSelectorElement } from '../../components/elements';
import { AddVariantsButton } from '../../components/buttons';

interface CategoryObject {
  [key: string]: { [key: string]: string }[];
}

const searchCategories: CategoryObject = {
  'Arte y coleccionables': [
    { Pintura: '' },
    { Escultura: '' },
    { 'Arte de vidrio': '' },
    { Fotografía: '' },
  ],
  Joyería: [
    { Anillos: 'Aretes' },
  ],
  Ropa: [
    { Anillos: 'Aretes' },
  ],
  Hogar: [
    { Anillos: 'Aretes' },
  ],
  Regalos: [
    { Anillos: 'Aretes' },
  ],
  Juguetes: [
    { Anillos: 'Aretes' },
  ],
  Manualidades: [
    { Anillos: 'Aretes' },
  ],
};

const AdInfoSection = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [selectedProductTypeValue, setSelectedProductTypeValue] = useState('physical');

  const [personalizationText, setPersonalizationText] = useState('');

  const [isPersonalizationOptional, setIsPersonalizationOptional] = useState('');

  const handleIsPersonalizationOptional = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === 'is-optional') {
      setIsPersonalizationOptional('');
    } else {
      setIsPersonalizationOptional('is-optional');
    }
  };

  const handlePersonalizationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPersonalizationText(e.target.value);
  };

  function searchCategoriesByTerm(searchTerm: string) {
    const results = [];

    for (const categoryName in searchCategories) {
      if (categoryName.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(categoryName);
      }

      const subcategories = searchCategories[categoryName];
      subcategories.forEach((subcategory: any) => {
        for (const subcategoryName in subcategory) {
          if (subcategoryName.toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push([categoryName, subcategoryName]);
          }
        }
      });
    }

    return results;
  }

  const handleInputProductTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProductTypeValue(e.target.value);
  };

  const handleInputChange = (event: { target: { value: any; }; }) => {
    if (selectedValue) {
      setSelectedValue('');
    }
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    const dummyResults = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
    setSearchResults(searchCategoriesByTerm(searchInput));

    setShowResults(dummyResults.length > 0);
  };

  return (
    <div className={`${styles.xPaddings} max-w-[1400px] m-auto float-none relative`}>
      <div className="w-full float-left">
        <div>
          <div
            className="md:p-6 p-5 md:mb-6 mb-5 rounded-[3px] bg-white border-[1px]
        border-[#e1e3df] m-0"
          >
            <div className="md:mb-6 mb-5">
              <h2 className={`${styles.subTitle} font-medium mb-[6px]`}>
                Información del anuncio
              </h2>
              <p className={`${styles.blockText} font-light`}>
                Cuéntale al mundo por qué le va a encantar tu artículo.
              </p>
            </div>
            <div className="flex flex-col float-none relative m-0">
              <div>
                <div id="title" className="md:mb-4 mb-3">
                  <div className="md:w-[33.66%] float-left">
                    <label className={`${styles.smallText} mb-1 font-bold`}>
                      Título *
                    </label>
                    <div className="mb-3">
                      <p className={`${styles.blockText} mb-3`}>
                        Incluye palabras clave que los compradores usarían para encontrar el artículo.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[66.33%] md:mb-0 mb-3 w-full md:px-12 float-left">
                    <div className="relative">
                      <input
                        id="title-input"
                        type="text"
                        name="title"
                        placeholder="Ejemplo: Regalos personalizados para cumpleaños"
                        className="rounded border-[rgba(0,0,0,.15)] border-t-[rgba(0,0,0,.2)] border-[1px]
                      text-black py-2 px-3 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <fieldset className="md:mb-4 w-full mb-3">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <span className={`${styles.smallText} mb-1 font-bold`}>
                      Información sobre este anuncio *
                    </span>
                    <p className={`${styles.blockText} mb-3`}>
                      <a href="#" className="underline">
                        Obtén más información sobre los tipos de artículos permitidos en Folklore.
                      </a>
                    </p>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 float-left">
                    <div className="float-none relative">
                      {
                        InformationAdSelectorOptions.map((option, idx) => (
                          <ShopSelectorElement
                            key={idx}
                            selectOption={option}
                          />
                        ))
                      }
                    </div>
                  </div>
                </fieldset>
              </div>
              <div>
                <div className="md:mb-4 mb-3 float-none relative">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <label className={`${styles.smallText} mb-1 font-bold`}>
                      Categoría *
                    </label>
                    <p className={`${styles.blockText} mb-3`}>
                      Escribe una descripción de dos o tres palabras sobre tu artículo para obtener sugerencias de categoría que ayuden a más compradores a encontrarlo.
                    </p>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 float-left">
                    <div>
                      <div className="relative">
                        <div
                          className="left-0 mt-0 px-3 z-20 rounded-bl-3 rounded-tl-3 translate-y-[-50%] absolute
                        top-[50%]"
                        >
                          <span className="inline-block h-[24px] align-middle w-[24px] text-[#757575] fill-current">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z" />
                              <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z" />
                            </svg>
                          </span>
                        </div>
                        <input
                          id="taxonomy-search"
                          type="search"
                          name="title"
                          placeholder="regalos personalizados, cuadros para el hogar"
                          className="rounded border-[rgba(0,0,0,.15)] border-t-[rgba(0,0,0,.2)] border-[1px]
                      text-black py-2 pl-11 pr-3 w-full"
                          value={selectedValue || searchInput}
                          onChange={handleInputChange}
                        />
                      </div>
                      {showResults && searchInput && (
                        <div className="relative w-full">
                          <div className="z-50 w-full absolute mt-2 border border-[#e1e3df] bg-white rounded-sm
                          overflow-hidden"
                          >
                            <ul id="results-list">
                              {searchResults.map((result: string[] | string, index) => (
                                <li key={index} className="px-2 py-3 hover:bg-[#faf9f5]">
                                  <a
                                    className="text-sm font-normal text-black cursor-pointer"
                                    onClick={() => {
                                      const selected = typeof result === 'object' ? result[result.length - 1] : result;
                                      setSelectedValue(selected);
                                      setShowResults(false);
                                      setSearchInput('');
                                    }}
                                  >
                                    {
                                      typeof (result) === 'object'
                                        ? result.map((cat: string, idx: number) => (
                                          <span key={idx}>
                                            {
                                              idx > 0
                                                ? ` ▸ ${cat}`
                                                : cat
                                            }
                                          </span>
                                        ))
                                        : result
                                    }
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:mb-4 mb-3 float-none relative">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <label className={`${styles.smallText} mb-1 font-bold`}>
                      Tipo *
                    </label>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 float-left">
                    <div className="float-none relative">
                      <div className="md:w-[43.33%] w-full pr-4 float-left">
                        <label className="md:inline-block only:inline-flex md:mr-2 relative md:pl-5">
                          <input
                            className="hidden"
                            aria-label="Producto físico"
                            type="checkbox"
                            value="physical"
                            onChange={handleInputProductTypeChange}
                          />
                          <div
                            className={`w-[18px] h-[18px] min-w-[18px] flex items-center cursor-pointer
                             justify-center rounded-full border-2 transition-colors duration-200
                             ${selectedProductTypeValue === 'physical' ? 'bg-[#f56400]' : ''}`}
                          />
                          <span className={`${styles.smallText} ml-1 inline-block align-middle`}>
                            Físico
                            <p className={`${styles.blockText}`}>
                              Un artículo tangible que enviarás a los compradores.
                            </p>
                          </span>
                        </label>
                      </div>
                      <div className="float-none relative">
                        <div className="md:w-[43.33%] w-full pr-4 float-left">
                          <label className="md:inline-block md:mr-2 relative md:pl-5 only:inline-flex">
                            <input
                              className="hidden"
                              aria-label="Product digital"
                              type="checkbox"
                              value="digital"
                              onChange={handleInputProductTypeChange}
                            />
                            <div
                              className={`w-[18px] h-[18px] min-w-[18px] flex items-center cursor-pointer
                             justify-center rounded-full border-2 transition-colors duration-200
                             ${selectedProductTypeValue === 'digital' ? 'bg-[#f56400]' : ''}`}
                            />
                            <span className={`${styles.smallText} ml-1 inline-block align-middle`}>
                              Digital
                              <p className={`${styles.blockText}`}>
                                Un archivo digital que los compradores descargarán.
                              </p>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:mb-4 mb-3 float-none relative">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <label className={`${styles.smallText} mb-1 font-bold`}>
                      Descripción *
                    </label>
                    <div>
                      <p className={`${styles.blockText} mb-3`}>
                        Comienza con una breve descripción de las mejores cualidades del artículo. Los compradores solo verán las primeras
                        líneas de la descripción al principio, así que escógelas sabiamente.
                      </p>
                      <p className={`${styles.blockText} mb-3`}>
                        ¿No sabes qué más decir? A los compradores también les gusta saber qué proceso sigues y cuál es la historia del artículo
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 md:my-3 my-2 float-left">
                    <div id="description-box">
                      <div className="relative">
                        <textarea
                          className="rounded border-[#222] border-[1px] p-1 w-full"
                          name="description-box"
                          id="description-box"
                          cols={30}
                          rows={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <fieldset className="md:mb-4 w-full mb-3">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <span className={`${styles.smallText} mb-1 font-bold`}>
                      Variantes <span className={`${styles.blockText} font-normal`}>(opcional)</span>
                    </span>
                    <p className={`${styles.blockText} mb-3`}>
                      Añadir las opciones disponibles, como el color o la talla. Los compradores elegirán
                      entre estas al hacer su compra. Puedes añadir hasta 3 variantes
                    </p>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 float-left">
                    <div className="flex lg:flex-row flex-col float-none relative">
                      {
                        [0, 1, 2].map((idx) => (
                          <AddVariantsButton key={idx} idx={idx} />
                        ))
                      }
                    </div>
                  </div>
                </fieldset>
              </div>
              <div>
                <div className="md:mb-4 mb-3 float-none relative">
                  <div className="md:w-[33.66%] md:my-0 my-2 float-left">
                    <label className={`${styles.smallText} mb-1 font-bold`}>
                      Personalización <span className={`${styles.blockText} font-normal`}>(opcional)</span>
                    </label>
                    <div>
                      <p className={`${styles.blockText} mb-3`}>
                        Recopila la información que necesitas para este anuncio.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[66.33%] w-full md:px-12 md:my-3 my-2 float-left">
                    <div className="flex lg:flex-row flex-col border-[1px] border-[#e1e3df]">
                      <div className="py-6 px-1 grow shrink basis-[0%]">
                        <div className="px-2">
                          <div className="flex">
                            <div>
                              <label
                                id="personalization-instructions-title"
                                htmlFor="personalization_instructions"
                                className={`${styles.smallText} font-bold mb-2`}
                              >
                                Instrucciones para los compradores
                              </label>
                              <p className={`${styles.blockText} mb-3`}>
                                Escribe las instrucciones de personalización que quieres que vean los compradores.
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div
                              id="personalization_instructions"
                              className=""
                            >
                              <textarea
                                name="personalization_instructions"
                                id="personalization_instructions-input"
                                rows={4}
                                placeholder="Ejemplo: escribe el nombre de la persona para el regalo. Máximo 12 caracteres. ¡Gracias!"
                                className="overflow-auto right-auto resize-y rounded-sm p-2 w-full border-[1px] border-[rgba(0,0,0,.15)]"
                                value={personalizationText}
                                onChange={handlePersonalizationChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex px-2 mt-1">
                          <label className="flex md:mr-2 relative items-center justify-center">
                            <input
                              className="opacity-0 mr-0 absolute left-0 top-[1px] inline-block h-[16px] w-[16px]
                          align-middle cursor-pointer"
                              type="checkbox"
                              value={isPersonalizationOptional}
                              onChange={handleIsPersonalizationOptional}
                            />
                            <div
                              className={`w-[18px] h-[18px] min-w-[18px] flex items-center cursor-pointer
                             justify-center rounded-full border-2 transition-colors duration-200
                             ${isPersonalizationOptional === 'is-optional' ? 'bg-[#f56400]' : ''}`}
                            />
                            <span className={`${styles.smallText} ml-1 inline-block align-middle`}>
                              La personalización es opcional
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="p-6 md:border-l-[1px] md:border-t-[0px] border-t-[1px] md:border-l-[#e1e3df] border-l-transparent border-t-[#e1e3df] bg-[#faf9f5]
                    grow shrink basis-[0%]"
                      >
                        <div>
                          <div className="w-full">
                            <label
                              htmlFor="personalization_preview"
                              className={`${styles.smallText} font-bold mb-4 text-center block w-full`}
                            >
                              Lo que verá el comprador
                            </label>
                            <div
                              className="mx-auto block rounded-sm bg-white border-[1px] border-[#e1e3df]
                              border-b-[#cbccc9] mb-3 max-w-[430px]"
                            >
                              <div className="my-0 p-4">
                                <label
                                  id="personalization-field-label"
                                  className="mb-1 block"
                                >
                                  <span className={`${styles.smallText} font-bold text-left`}>
                                    Añade tu personalización
                                  </span>
                                </label>
                                <div>
                                  <p
                                    id="personalization-instructions"
                                    className="break-words whitespace-pre-wrap"
                                  >
                                    <span className="text-[14px]">
                                      {personalizationText || 'Lee la descripción del artículo para ver los detalles.'}
                                    </span>
                                  </p>
                                  <textarea
                                    id="personalization-input"
                                    rows={1}
                                    className="bg-[#faf9f5] border-[0.5px] border-[#cbccc9] cursor-default my-4 rounded-sm
                                  w-full p-2"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdInfoSection;

