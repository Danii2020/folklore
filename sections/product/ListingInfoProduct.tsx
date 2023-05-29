/* eslint-disable no-shadow */

import { DetailsProductElement } from '../../components/elements/index';
import { SellerContainer } from '../../components/containers/index';
import styles from '../../styles';

type Product = {
  id: string,
  details: string[],
  description: string,
  sellerName: string,
  sellerImgUrl: string,
}

interface Props {
  product: Product;
}

const ListingInfoProduct = ({ product }: Props) => (
  <div
    className="flex flex-col my-5 lg:w-[32%] lg:float-right
      md:px-4"
  >
    <DetailsProductElement title="Información">
      <ul
        className="px-3"
      >
        {
          product?.details.map((detail, index) => (
            <li
              className={`${styles.paragraph} list-disc`}
              key={index}
            >
              {detail}
            </li>
          ))
        }
      </ul>
    </DetailsProductElement>
    <DetailsProductElement title="Descripción">
      <div className="relative overflow-hidden">
        <p
          className={`${styles.paragraph} break-normal`}
        >
          {product?.description}
        </p>
      </div>
    </DetailsProductElement>
    <DetailsProductElement title="Conoce al vendedor">
      <SellerContainer
        sellerImgUrl={product?.sellerImgUrl}
        sellerName={product?.sellerName}
      />
    </DetailsProductElement>
  </div>
);

export default ListingInfoProduct;
