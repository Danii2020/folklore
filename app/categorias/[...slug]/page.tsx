/* eslint-disable import/no-unresolved */

import { HeaderBar, ListingCategoryProducts } from '../../../sections/category/index';
import { fetchCategory, fetchCategories, fetchProductsByCategory } from '../../../helpers/apis/helpers';

interface CategoryProps {
  params: {
    slug: string[]
  }
}

const CategoryPage = async ({ params }: CategoryProps) => {
  // const searchParams = useSearchParams();
  // console.log(searchParams);
  const { slug } = params;
  const slugText = slug.slice(-1)[0];

  const category = await fetchCategory(slugText);
  const categories = await fetchCategories();

  const products = await fetchProductsByCategory(slugText);

  return (
    <div className="bg-[#FFFFFF]">
      <div className="w-full bg-[rgba(19,122,132,0.14)]">
        <HeaderBar querySlug={slug} category={category} />
      </div>
      <div className="w-full">
        <ListingCategoryProducts
          category={category}
          categories={categories}
          products={products}
        />
      </div>
    </div>
  );
};

export default CategoryPage;
