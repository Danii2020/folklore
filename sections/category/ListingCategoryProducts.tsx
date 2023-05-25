'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles';
import { FilterButton, SortByButton } from '../../components/buttons/index';
import { FilterContainer, SortMenuContainer, CategoryProductContainer } from '../../components/containers/index';

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

interface Props {
  categories: Category[];
  category: Category;
  products: Product[];
}

const sortOptions = [
  { option: 'Relevancia', slug: 'most-relevant' },
  { option: 'Más barato', slug: 'price-asc' },
  { option: 'Más caro', slug: 'price-desc' },
  { option: 'Mejor valoración', slug: 'highest-reviews' },
  { option: 'Más reciente', slug: 'date-desc' },
];

const ListingCategoryProducts = ({ categories, products, category }: Props) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isSortMenuOpen, setIsortMenuOpen] = useState<boolean>(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortMenuClick = () => {
    setIsortMenuOpen(!isSortMenuOpen);
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
            />
            {isSortMenuOpen && !isFilterOpen && (
              <SortMenuContainer
                menuOptions={sortOptions}
              />
            )}
          </div>
        </div>
        <div>
          <ol className="flex flex-wrap -m-2 pl-0">
            {
                products.map((product) => (
                  <li
                    key={product.id}
                    className="flex grow basis-[25%] md:max-w-[25%]
                    max-w-[50%] p-2"
                  >
                    <CategoryProductContainer product={product} />
                  </li>
                ))
              }
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ListingCategoryProducts;
