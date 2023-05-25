/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';
import { fetchCategory } from '../../../../../helpers/apis/helpers';

type Product = {
  id: string,
  imgUrl: string;
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
}

type Props = {
  params:{slug:string}
}

const getProductsByCategorySlug = async (slug: string): Promise<Product[] | null> => {
  const category = await fetchCategory(slug);
  if (category.slug === slug) {
    return category.products;
  }
  return null;
};

export async function GET(request: Request, { params }: Props) {
  const product: Product[] | null = await getProductsByCategorySlug(params.slug);
  return NextResponse.json(product);
}
