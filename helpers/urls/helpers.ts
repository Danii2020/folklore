type Category = {
  slug: string;
  title: string;
};

type Option = {
  text: string;
  filter_value: string;
};

const formatPriceQueryParam = (price?: string): string => {
  let queryParams = '';

  if (price && price?.length > 1) {
    if (price.startsWith('_')) {
      const maxPrice = price.substring(1);
      queryParams = `max_price=${maxPrice}`;
    } else if (price.endsWith('_')) {
      const minPrice = price.substring(0, price.length - 1);
      queryParams = `min_price=${minPrice}`;
    } else if (price.includes('_')) {
      const [minPrice, maxPrice] = price.split('_');
      queryParams = `min_price=${minPrice}&max_price=${maxPrice}`;
    }
  }

  return queryParams;
};

const buildCategoriesPath = (selectedCategories: Category[] | undefined) => {
  const slugs = selectedCategories?.map((category) => category.slug);
  const path = slugs?.join('/');
  return `/${path}`;
};

const buildFilterURL = (
  selectedCategories: Category[] | undefined,
  selectedPrice: Option | null,
  selectedArticle: Option | null,
  selectedPersonalizedPrice: string | null,
) => {
  const queryParams: string[] = [];
  const { search } = window.location;
  const existingSortQueryParam = search.match(/[?&]sort_by=[^&]+/);

  if (selectedPrice) {
    const priceQueryParam = formatPriceQueryParam(selectedPrice.filter_value);
    if (priceQueryParam !== '') {
      queryParams.push(priceQueryParam);
    }
  }

  if (selectedPersonalizedPrice) {
    const priceQueryParam = formatPriceQueryParam(selectedPersonalizedPrice);
    if (priceQueryParam !== '') {
      queryParams.push(priceQueryParam);
    }
  }

  if (selectedArticle && selectedArticle.text !== 'Todos') {
    queryParams.push(`article_type=${selectedArticle.filter_value}`);
  }

  const queryString = queryParams.join('&');
  const categoriesPath = buildCategoriesPath(selectedCategories);
  const windowPath = window.location.pathname;
  if (existingSortQueryParam) {
    return `${windowPath === '/categorias'
      ? '' : '/categorias'}${queryString ? `?${queryString}&${existingSortQueryParam}` : `${existingSortQueryParam}`}`;
  }
  const url = `${windowPath === '/categorias'
    ? '' : '/categorias'}${categoriesPath}${queryString ? `?${queryString}` : ''}`;

  return url;
};

const buildSortByUrl = (sortOptionSlug: string | null) => {
  const { href, search } = window.location;
  if (search && search.includes('sort_by')) {
    return `${href.replace(/&?sort_by=[^&]+/, '')}&sort_by=${sortOptionSlug}`;
  }
  return `${search ? `${search}&` : '?'}sort_by=${sortOptionSlug}`;
};

export { buildFilterURL, buildSortByUrl };
