/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-shadow */

'use client';

import { useEffect, useState, FormEvent } from 'react';
import styles from '../../styles';
import { FilterCheckboxGroup } from '../checkboxes/index';
import { CategoriesFilterContainer } from './index';
import { buildFilterURL } from '../../helpers/urls/helpers';

type Category = {
  id: string;
  title: string;
  slug: string;
  subCategories?: Category[];
}

type Option = {
  text: string;
  filter_value: string;
}

type Props = {
  categories: Category[] | null;
  category: Category[] | null;
  onHandleClose: () => void;
}

const priceOptions = [
  { text: 'Cualquier precio', filter_value: '_' },
  { text: 'Menos de 25 USD', filter_value: '_25' },
  { text: 'USD 25 a USD 50', filter_value: '50_200' },
  { text: 'USD 50 a USD 100', filter_value: '50_100' },
  { text: 'Más de USD 100', filter_value: '100_' },
  { text: 'Personalizado', filter_value: 'custom' },
];

const productTypeOptions = [
  { text: 'Todos', filter_value: '' },
  { text: 'Hecho a mano', filter_value: 'amano' },
  { text: 'Reciclado', filter_value: 'reciclado' },
];

const FilterContainer = ({ categories, onHandleClose, category }: Props) => {
  const [categoriesIsVisible, setCategoriesIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{slug:string, title:string}[] | null>(category);
  const [selectedPrice, setSelectedPrice] = useState<Option | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Option | null>(null);
  const [selectedPersonalizedPrice, setSelectedPersonalizedPrice] = useState<string | null>(null);

  const handleSelectedCategoryChange = (selectedCategory: {slug:string, title:string}[] | null) => {
    setSelectedCategory(selectedCategory);
  };

  const handleSelectedPrice = (selectedPrice: Option | null) => {
    setSelectedPrice(selectedPrice);
  };

  const handleSelectedArticle = (selectedArticle: Option | null) => {
    setSelectedArticle(selectedArticle);
  };

  const handleSelectedPersonalizedPrice = (selectedPrice: string | null) => {
    setSelectedPersonalizedPrice(selectedPrice);
  };

  const handleFormSubmit = async (event:FormEvent) => {
    event.preventDefault();

    window.location.href = buildFilterURL(
      selectedCategory,
      selectedPrice,
      selectedArticle,
      selectedPersonalizedPrice,
    );
  };

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  return (
    <div
      className="flex overflow-y-auto overflow-x-hidden
  fixed top-0 right-0 bottom-0 left-0 overscroll-contain
  w-[100%] h-[100%] z-80 bg-[#222222a6]"
    >
      <div
        className="max-w-[480px] w-[480px] min-w-[37px]
        h-[100%] z-10 ml-0 relative md:flex md:justify-between
        md:flex-row"
      >
        <div
          className="flex flex-col h-full justify-between bg-white
          shadow-lg w-full"
        >
          <div
            className="overflow-y-auto p-7 h-full"
          >
            <div>
              <div
                className={`pb-3 z-20 relative ${categoriesIsVisible
                  ? 'hidden'
                  : 'block'}`}
              >
                <h1
                  className={`${styles.heroHeading}`}
                >
                  Filtros
                </h1>
              </div>
              <form
                method="GET"
                className="mt-5"
                id="filter-form"
                onSubmit={handleFormSubmit}
              >
                <div>
                  <div
                    className={`${categoriesIsVisible
                      ? 'hidden'
                      : 'block'}`}
                  >
                    <div>
                      <fieldset className="mb-3">
                        <legend className="mb-2 w-full">
                          <h3 className={`${styles.smallText} font-medium mb-2`}>
                            Filtrar por categoría
                          </h3>
                          <button
                            type="button"
                            className="flex rounded-full border-2 border-black
                          justify-between items-center px-3 py-1 w-full
                          transition duration-300 ease-in-out transform
                          hover:scale-105 hover:shadow-lg"
                            onClick={() => setCategoriesIsVisible(true)}
                          >
                            {`${selectedCategory
                              ? selectedCategory[selectedCategory.length - 1]?.title
                              : 'Todas las categorias'}`}
                            <span
                              className="w-[12px] h-[12px] inline-block align-middle"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M8 21a1 1 0 01-.664-1.747L15.5 12 7.336 4.747a1 1 0 011.328-1.494L18.5 12l-9.836 8.747A.994.994 0 018 21z" />
                              </svg>
                            </span>
                          </button>
                        </legend>
                      </fieldset>
                    </div>
                    <div>
                      <fieldset className="mb-3">
                        <legend className="mb-2 w-full">
                          <h3 className={`${styles.smallText} font-medium mb-2`}>
                            Precio ($)
                          </h3>
                          <div>
                            <div>
                              <FilterCheckboxGroup
                                options={priceOptions}
                                onSelectedoOptionChange={handleSelectedPrice}
                                onRangeValueChange={handleSelectedPersonalizedPrice}
                                filter="price"
                              />
                            </div>
                          </div>
                        </legend>
                      </fieldset>
                    </div>
                    <div>
                      <fieldset className="mb-3">
                        <legend className="mb-2 w-full">
                          <h3 className={`${styles.smallText} font-medium mb-2`}>
                            Tipo de artículo
                          </h3>
                          <div>
                            <div>
                              <FilterCheckboxGroup
                                options={productTypeOptions}
                                filter="article"
                                onRangeValueChange={handleSelectedPersonalizedPrice}
                                onSelectedoOptionChange={handleSelectedArticle}
                              />
                            </div>
                          </div>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                  <CategoriesFilterContainer
                    categories={categories}
                    visibility={`${categoriesIsVisible
                      ? 'block'
                      : 'hidden'}`}
                    onSelectedCategoryChange={handleSelectedCategoryChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            className="flex justify-around items-center w-full min-h-[80px]
          bg-[#fff] border-t shadow-top gap-3 z-70"
          >
            <button
              type="button"
              form="filter-form"
              className={`${styles.subTitle} rounded-full bg-white border-2 border-black
              z-10 px-4 md:py-3 py-1 relative text-center items-center inline-block justify-center
              min-w-[48px] min-h-[48px] align-middle mt-5 ml-3 mb-3 w-full
              transition duration-300 ease-in-out transform
              hover:scale-105 hover:shadow-lg ${categoriesIsVisible
                ? 'hidden'
                : 'block'}`}
              onClick={onHandleClose}
            >
              Cancelar
            </button>
            <div
              className={`float-left py-3 px-4 bg-white text-center ml-4 my-4
              w-full ${categoriesIsVisible
                ? 'block'
                : 'hidden'}`}
            >
              <a
                className={`${styles.subTitle} inline-block relative font-bold
                transition-opacity duration-200 ease-out z-0 back-button`}
                href="#"
                onClick={() => setCategoriesIsVisible(false)}
              >
                Atrás
              </a>
            </div>
            <button
              type="submit"
              form="filter-form"
              className={`${styles.subTitle} text-white rounded-full justify-center
            bg-black z-10 px-4 md:py-3 py-1 relative text-center items-center inline-block
            min-w-[48px] min-h-[48px] align-middle mt-5 mr-3 mb-3 w-full
            transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg`}
            >
              Aplicar
            </button>
          </div>
        </div>
        <button
          type="button"
          aria-label="Cerrar"
          className="flex rounded-full hover:bg-[rgba(157,157,157,0.97)] mt-3 right-2
          p-3 z-10 bottom-auto transition duration-300 ease-in-out md:ml-4
          transform hover:scale-105 w-12 h-12 items-center justify-center"
          onClick={onHandleClose}
        >
          <span
            className="flex w-full h-full align-middle
            items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              fill="#fff"
            >
              <path
                d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
