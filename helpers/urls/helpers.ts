type Category = {
  slug:string,
  title:string
}

type Option = {
  text: string;
  filter_value: string;
};

const formatPriceQueryParam = (price?: string): string => {
  let queryParams = '';

  if (price?.startsWith('_')) {
    const maxPrice = price.substring(1);
    queryParams = `max_price=${maxPrice}`;
  } else if (price?.endsWith('_')) {
    const minPrice = price.substring(0, price.length - 1);
    queryParams = `min_price=${minPrice}`;
  } else if (price?.includes('_')) {
    const [minPrice, maxPrice] = price.split('_');
    queryParams = `min_price=${minPrice}&max_price=${maxPrice}`;
  }

  return queryParams;
};

const buildCategoriesPath = (selectedCategories: Category[] | null) => {
  const slugs = selectedCategories?.map((category) => category.slug);
  const path = slugs?.join('/');
  return `/${path}`;
};

const buildFilterURL = (
  selectedCategories: Category[] | null,
  selectedPrice: Option | null,
  selectedArticle: Option | null,
  selectedPersonalizedPrice: string | null,
) => {
  const queryParams: string[] = [];

  if (selectedPrice !== null) {
    const priceQueryParam = formatPriceQueryParam(selectedPrice.filter_value);
    if (priceQueryParam !== '') {
      queryParams.push(priceQueryParam);
    }
  }

  if (selectedPersonalizedPrice !== null) {
    const priceQueryParam = formatPriceQueryParam(selectedPersonalizedPrice);
    if (priceQueryParam !== '') {
      queryParams.push(priceQueryParam);
    }
  }

  if (selectedArticle !== null) {
    queryParams.push(`article_type=${selectedArticle.filter_value}`);
  }

  const queryString = queryParams.join('&');
  const url = `/categorias${buildCategoriesPath(selectedCategories)}${queryString ? `?${queryString}` : ''}`;

  return url;
};

export { buildFilterURL };
