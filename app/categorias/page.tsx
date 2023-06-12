/* eslint-disable import/no-unresolved */
import { fetchCategories } from '../../helpers/apis/helpers';
import { GeneralHeaderBar, ListingCategoryProducts } from '../../sections/category';

interface CategoryProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

type Product = {
  id: string,
  imgUrl: string;
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
  numberOfReviews: number;
  type: string;
}

type Category = {
  products: Product[];
  subCategories?: Category[];
}

const CategoriesPage = async ({ searchParams }: CategoryProps) => {
  const articleType = searchParams?.article_type;
  const maxPrice = searchParams?.max_price;
  const minPrice = searchParams?.min_price;
  const sortBy = searchParams?.sort_by;

  const getAllProducts = (categories: Category[]): Product[] => {
    const products: Product[] = [];

    categories.forEach((category) => {
      products.push(...category.products);

      if (category.subCategories) {
        const subProducts = getAllProducts(category.subCategories);
        products.push(...subProducts);
      }
    });

    return products;
  };

  const categories = await fetchCategories();
  let products = getAllProducts(categories);

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
  console.log(products);
  console.log(products.length);

  return (
    <div className="bg-[#FFFFFF]">
      <div className="w-full bg-[rgba(19,122,132,0.14)]">
        <GeneralHeaderBar
          querySlug={[]}
          categories={categories}
          numberOfProducts={numberOfProducts}
        />
      </div>
      <div className="w-full">
        <ListingCategoryProducts
          category={{ id: '', imgUrl: '', description: '', slug: 'categorias', title: 'Todas las categorias' }}
          categories={categories}
          products={products}
          selectedMenuOptionSlug={sortBy?.toString()}
        />
      </div>
    </div>
  );
};

export default CategoriesPage;
