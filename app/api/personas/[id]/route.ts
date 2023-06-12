import { NextResponse } from 'next/server';
import { people } from '../../../../constants';

type Collection = {
  id: string;
  slug: string;
  name: string;
  numProducts: number,
  products: {
    id: string;
    imgUrl: string;
  }[]
}

type People = {
  id: string;
  username: string;
  name: string;
  collections: Collection[],
}

type Props = {
  params:{
    id: string;
  }
}

const getPersonById = async (userId: string): Promise<People | undefined> => people.find((person) => person.id === userId);

export async function GET(request: Request, { params }: Props) {
  const person: People | undefined = await getPersonById(params.id);
  return NextResponse.json(person);
}
