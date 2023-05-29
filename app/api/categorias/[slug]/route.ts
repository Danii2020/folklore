/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { NextResponse } from 'next/server';
import { categories } from '../../../../constants';
import { getCategoryBySlug } from '../../../../helpers/apis/helpers';

type Category = {
  id: string;
  title: string;
  description: string;
  slug: string;
  imgUrl: string;
  subCategories?: Category[];
}

type Props = {
  params: { slug: string }
}

export async function GET(request: Request, { params }: Props) {
  const category: Category | null = getCategoryBySlug(params.slug, categories);
  return NextResponse.json(category);
}
