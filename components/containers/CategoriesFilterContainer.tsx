/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../../styles';

type Category = {
  id: string;
  title: string;
  slug: string;
  subCategories?: Category[];
};

type Props = {
  visibility: string;
  categories: Category[] | null;
  onSelectedCategoryChange: (category: {slug:string, title:string}[] | undefined) => void;
};

const CategoriesFilterContainer = ({ categories, visibility, onSelectedCategoryChange }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const onSelectedCategoryChangeRef = useRef(onSelectedCategoryChange);

  const handleCategoryClick = (category: Category) => {
    let newSelectedCategories: Category[];

    const lastSelectedCategory = selectedCategories[selectedCategories.length - 1];

    if (lastSelectedCategory && lastSelectedCategory.subCategories) {
      const isSubCategory = lastSelectedCategory.subCategories.some((subCategory) => subCategory.id === category.id);

      if (isSubCategory) {
        newSelectedCategories = [...selectedCategories, category];
      } else {
        newSelectedCategories = [...selectedCategories.slice(0, -1), category];
      }
    } else {
      newSelectedCategories = [category];
    }

    setSelectedCategories(newSelectedCategories);
  };

  const handleAllCategoriesClick = () => {
    setSelectedCategories([]);
    onSelectedCategoryChange(undefined);
  };

  useEffect(() => {
    onSelectedCategoryChangeRef.current = onSelectedCategoryChange;
  }, [onSelectedCategoryChange]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const selectedCategoriesFilterData: { slug: string; title: string }[] = selectedCategories.map(
        (category) => ({ slug: category.slug, title: category.title }),
      );
      onSelectedCategoryChangeRef.current(selectedCategoriesFilterData);
    }
  }, [selectedCategories]);

  const renderSubCategories = (subCategories: Category[]) => (
    <ul className="pl-6">
      {subCategories.map((subCategory) => (
        <li key={subCategory.id}>
          <Link
            className={`${styles.smallText} py-2 pl-3 border-b-[1px] border-[#f1f1f1]
            block ${selectedCategories.includes(subCategory) ? 'text-[#5d4a4a] font-bold' : 'text-black'}
            ${subCategory.subCategories ? 'underline' : 'no-underline'}`}
            href="#"
            onClick={() => handleCategoryClick(subCategory)}
          >
            {subCategory.title}
          </Link>
          {selectedCategories.includes(subCategory) && subCategory.subCategories && (
            renderSubCategories(subCategory.subCategories)
          )}
        </li>
      ))}
    </ul>
  );

  const renderCategory = (category: Category) => (
    <li key={category.id}>
      <Link
        className={`${styles.smallText} py-2 pl-3 border-b-[1px] border-[#f1f1f1]
        underline block ${selectedCategories.includes(category) ? 'text-[#5d4a4a] font-bold' : 'text-black'}`}
        href="#"
        onClick={() => handleCategoryClick(category)}
      >
        {category.title}
      </Link>
      {selectedCategories.includes(category) && category.subCategories && (
        renderSubCategories(category.subCategories)
      )}
    </li>
  );

  return (
    <div className={`${visibility} w-full z-50`}>
      <div className="pt-0 pb-6 z-20 relative">
        <h1 className={`${styles.heroHeading}`}>Categorias</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link
              className={`${styles.smallText} py-2 pl-3 border-b-[1px] border-[#f1f1f1] block`}
              href="#"
              onClick={handleAllCategoriesClick}
            >
              Todas las categorias
            </Link>
          </li>
          {categories?.map((category) => (
            <React.Fragment key={category.id}>{renderCategory(category)}</React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesFilterContainer;
