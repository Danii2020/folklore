/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';
import { products } from '../../../../constants';

type Review = {
  numberOfStars: number,
  comment: string,
  userImgUrl: string,
  userName: string,
  publishDate: string,
}

type Option = {
  title: string,
  options: string[]
}

type OtherProduct = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

type interestProduct = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  sellerName: string;
}

type Product = {
  id: string;
  price: number;
  briefDescription: string;
  sellerName: string;
  stars: number;
  sales: number;
  numberOfReviews: number;
  productReviews: Review[];
  sellerReviews: Review[];
  reviewImages: string[];
  options:Option[];
  otherProducts: OtherProduct[];
  interestProducts: interestProduct[];
}

type Props = {
  params:{id:string}
}

export const getProductById = (id:string, products:Product[]):Product | undefined => {
  const product: Product | undefined = products.find(
    (product) => product.id === id,
  );
  return product;
};

export async function GET(request: Request, { params }: Props) {
  const product: Product | undefined = getProductById(params.id, products);
  return NextResponse.json(product);
}
