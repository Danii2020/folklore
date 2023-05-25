/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';
import { categories } from '../../../constants';

type Category = {
  id: string;
  title: string;
  description: string;
  slug: string;
  subCategories?: Category[];
}

export const getCategory = ():Category[] | null => categories;

export async function GET() {
  const categories: Category[] | null = getCategory();
  return NextResponse.json(categories);
}
