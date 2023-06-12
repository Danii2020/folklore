import { NextResponse } from 'next/server';
import { people } from '../../../../../../constants';

type Collection = {
  id: string;
  slug: string;
  name: string;
  products: {
    id: string;
    imgUrl: string;
  }[]
}

// type People = {
//   id: string;
//   username: string;
//   name: string;
//   collections: Collection[],
// }

type Props = {
  params:{
    slug:string;
    id: string;
  }
}

const getCollectionBySlugAndId = async (slug: string, userId: string): Promise<Collection | undefined> => {
  const personRequested = people.find((person) => person.id === userId);
  return personRequested?.collections.find((collection) => collection.slug === slug);
};

export async function GET(request: Request, { params }: Props) {
  const collection: Collection | undefined = await getCollectionBySlugAndId(params.slug[0], params.id);
  return NextResponse.json(collection);
}
