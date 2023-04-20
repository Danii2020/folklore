/* eslint-disable no-shadow */
import { OtherProductContainer } from '../../components/containers/index';
import { products } from '../../constants';
import styles from '../../styles';

type interestProduct = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  sellerName: string;
}

type Product = {
  interestProducts: interestProduct[];
  id: string;
}

interface Props {
  id: string;
}

const ListingInterestProducts = ({ id }: Props) => {
  const product: Product | undefined = products.find(
    (product) => product.id === id,
  );

  return (
    <div
      className="clear-both mt-10 mb-10"
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
                También podría interesarte

              </h2>
            </div>
            <a href={`/productos/${product?.id}/similares/`}>
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
          <div className="relative mt-3">
            <div className="md:overflow-hidden relative">
              <ul
                className="flex flex-wrap md:gap-2
                gap-3 transition-transform duration-300 ease-out
                md:justify-start md:items-start
                items-center justify-center md:m-0 -m-3"
              >
                {product?.interestProducts.map((product, index) => (
                  <OtherProductContainer
                    key={index}
                    product={product}
                    username={product?.sellerName}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInterestProducts;
