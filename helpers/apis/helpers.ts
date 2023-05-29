/* eslint-disable no-plusplus */
type Product = {
  id: string;
  imgUrl: string;
  price: number;
  briefDescription: string;
  sellerName: string;
  stars: number;
  numberOfReviews: number;
  type: string;
}

type Category = {
  id: string;
  title: string;
  description: string;
  slug: string;
  imgUrl: string;
  products: Product[];
  subCategories?: Category[];
}

const fetchCategory = async (slug: string):Promise<Category> => {
  const res = await fetch(`https://folklore-xi.vercel.app/api/categorias/${slug}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
};

const fetchCategories = async () => {
  const res = await fetch('https://folklore-xi.vercel.app/api/categorias/', {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
};

const fetchProductsByCategory = async (slug:string):Promise<Product[]> => {
  const res = await fetch(`https://folklore-xi.vercel.app/api/categorias/${slug}/productos`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
};

const getCategoryBySlug = (slug:string, categories:Category[]):Category | null => {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    if (category.slug === slug) {
      return category;
    }
    if (category?.subCategories) {
      const subCategory:Category | null = getCategoryBySlug(slug, category.subCategories);
      if (subCategory) {
        return subCategory;
      }
    }
  }
  return null;
};

const fetchProduct = async (id: string) => {
  const res = await fetch(`https://folklore-xi.vercel.app/api/productos/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
};

export {
  fetchCategory,
  fetchCategories,
  fetchProductsByCategory,
  getCategoryBySlug,
  fetchProduct,
};
