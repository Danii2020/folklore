/* eslint-disable import/no-unresolved */

import { HeaderBar, ListingCategoryProducts } from '../../../sections/category/index';
import { fetchCategory, fetchCategories, fetchProductsByCategory } from '../../../helpers/apis/helpers';

interface CategoryProps {
  params: {
    slug: string[]
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const CategoryPage = async ({ params, searchParams }: CategoryProps) => {
  const { slug } = params;
  const articleType = searchParams?.article_type;
  const maxPrice = searchParams?.max_price;
  const minPrice = searchParams?.min_price;
  const sortBy = searchParams?.sort_by;

  const slugText = slug.slice(-1)[0];

  const category = await fetchCategory(slugText);
  const categories = await fetchCategories();
  let products = await fetchProductsByCategory(slugText);

  if (articleType || minPrice || maxPrice) {
    products = products.filter((product) => {
      if (articleType && product.type !== articleType) {
        return false;
      }
      if (minPrice && product.price < Number(minPrice)) {
        return false;
      }
      if (maxPrice && product.price > Number(maxPrice)) {
        return false;
      }
      return true;
    });
  }

  if (sortBy) {
    if (sortBy === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'highest-reviews') {
      products.sort((a, b) => b.stars - a.stars);
    }
  }
  const numberOfProducts = products.length;

  return (
    <div className="bg-[#FFFFFF]">
      <div className="w-full bg-[rgba(19,122,132,0.14)]">
        <HeaderBar querySlug={slug} category={category} numberOfProducts={numberOfProducts} />
      </div>
      <div className="w-full">
        <ListingCategoryProducts
          category={category}
          categories={categories}
          products={products}
          selectedMenuOptionSlug={sortBy?.toString()}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
