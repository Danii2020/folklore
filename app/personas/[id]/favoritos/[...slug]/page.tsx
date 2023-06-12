/* eslint-disable import/no-unresolved */
import { fetchPersonById } from '../../../../../helpers/apis/helpers';
import styles from '../../../../../styles';
import { ProductHeader } from '../../../../../sections/people/index';
import { ListingProductsContainer } from '../../../../../components/containers';

interface FavoritiesProps {
  params: {
    id: string;
    slug: string[];
  }
}

const PersonFavoritesPage = async ({ params }: FavoritiesProps) => {
  const { id, slug } = params;
  const person = await fetchPersonById(id);
  const requestedCollection = person.collections.find((collection) => collection.slug === slug[0]);
  return (
    <div className="bg-[#FFFFFF]">
      <div className={`${styles.xPaddings} max-w-[1400px] my-0 mx-auto`}>
        <ProductHeader
          collectionName={requestedCollection?.name}
          numberOfProducts={requestedCollection?.products.length}
          personName={person.name}
          personId={person.id}
        />
        <div className="my-7">
          <ListingProductsContainer products={requestedCollection?.products} />
        </div>
      </div>
    </div>
  );
};

export default PersonFavoritesPage;
