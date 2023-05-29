/* eslint-disable no-shadow */
import Image from 'next/image';
import styles from '../../styles';
import { OtherProductsInLineCarousel } from './index';

type OtherProduct = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

type Product = {
  sellerName: string;
  otherProducts: OtherProduct[];
}

interface Props {
  product: Product;
}

const ListingOtherProducts = ({ product }: Props) => (
  <div
    className="clear-both mt-10"
  >
    <div>
      <div className="relative md:pl-1 lg:pl-12">
        <div
          className="flex flex-wrap justify-between
            md:mb-0 mb-6"
        >
          <div
            className="flex items-center pb-3 md:gap-2
              gap-0"
          >
            <h2
              className={`${styles.heroHeading}`}
            >
              Más artículos del vendedor

            </h2>
            <button
              type="button"
              className="flex flex-row justify-center gap-1
                  items-center rounded-full p-2 hover:shadow-lg
                  border-2 border-black px-4 py-1"
            >
              <Image
                width="20"
                height="20"
                src="/favorite.svg"
                alt="Favorito"
              />
              <p
                className={`${styles.paragraph}`}
              >
                Seguir
              </p>
            </button>
          </div>
          <a href={`/sellers/${product?.sellerName}`}>
            <button
              type="button"
              className="flex flex-row justify-center gap-1
                items-center rounded-full p-2 hover:shadow-lg
                border-2 border-black px-4 py-1"
            >
              Ver más
            </button>
          </a>
        </div>
        <OtherProductsInLineCarousel
          products={product?.otherProducts}
          username={product?.sellerName}
        />
      </div>
    </div>
  </div>
);

export default ListingOtherProducts;
