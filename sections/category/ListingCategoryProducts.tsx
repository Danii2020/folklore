/* eslint-disable react/require-default-props */
/* eslint-disable arrow-body-style */

'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles';
import { FilterButton, SortByButton } from '../../components/buttons/index';
import { FilterContainer, SortMenuContainer, ListingProductsContainer } from '../../components/containers/index';

type Product = {
  id: string,
  imgUrl: string;
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
  numberOfReviews: number;
}

type Category = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  slug: string;
  subCategories?: Category[];
}

type MenuOption = {
  option: string;
  slug: string;
}

interface Props {
  categories: Category[];
  category: Category;
  products: Product[];
  selectedMenuOptionSlug?: string;
}

const sortOptions = [
  { option: 'Relevancia', slug: 'most-relevant' },
  { option: 'Más barato', slug: 'price-asc' },
  { option: 'Más caro', slug: 'price-desc' },
  { option: 'Mejor valoración', slug: 'highest-reviews' },
  { option: 'Más reciente', slug: 'date-desc' },
];

const ListingCategoryProducts = (
  {
    categories,
    products,
    category,
    selectedMenuOptionSlug = sortOptions[0].slug,
  }: Props,
) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isSortMenuOpen, setIsortMenuOpen] = useState<boolean>(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortMenuClick = () => {
    setIsortMenuOpen(!isSortMenuOpen);
  };

  const findOptionBySlug = (options: MenuOption[], slug: string): MenuOption| undefined => {
    return options.find((option) => option.slug === slug);
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isFilterOpen]);

  return (
    <div
      className={`${styles.xPaddings} grow basis-[100%]
      max-w-[1400px] my-0 mx-auto`}
    >
      <div
        className="mt-1 mb-2"
      >
        <div>
          <h2
            className={`${styles.heroHeading}`}
          >
            Encuentra algo que te enamore
          </h2>
        </div>
        <div
          className="flex justify-between items-start my-3"
        >
          <FilterButton onClick={handleFilterClick} />
          {isFilterOpen && (
            <FilterContainer
              categories={categories}
              category={[category]}
              onHandleClose={() => setIsFilterOpen(false)}
            />
          )}
          <div className={`${!isFilterOpen ? 'relative' : ''}`}>
            <SortByButton
              onClick={handleSortMenuClick}
              isSortMenuOpen={isSortMenuOpen}
              isFilterOpen={isFilterOpen}
              selectedMenuOption={findOptionBySlug(sortOptions, selectedMenuOptionSlug)}
            />
            {isSortMenuOpen && !isFilterOpen && (
              <SortMenuContainer
                selectedMenuOption={
                  findOptionBySlug(sortOptions, selectedMenuOptionSlug) || sortOptions[0]
                }
                menuOptions={sortOptions}
              />
            )}
          </div>
        </div>
        <ListingProductsContainer products={products} />
      </div>
    </div>
  );
};

export default ListingCategoryProducts;
