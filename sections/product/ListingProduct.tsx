/* eslint-disable no-shadow */

import Image from 'next/image';
import { StarsRatingElement, SelectorElement } from '../../components/elements/index';
import { AddToCartButton } from '../../components/buttons/index';
import styles from '../../styles';

type Option = {
  title: string,
  options: string[]
}

type Product = {
  id: string,
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
  sales: number,
  options: Option[]
}

interface Props {
  product: Product;
}

const ListingProduct = ({ product }: Props) => (
  <div
    className="flex flex-col lg:w-[32%] lg:float-right"
  >
    <div
      className="flex flex-col items-start
        justify-between md:px-1"
    >
      <h3
        className={`${styles.heroSubSubtitle}`}
      >
        {`USD ${product?.price}`}
      </h3>
      <p
        className={`${styles.paragraph} mb-1`}
      >
        {product?.briefDescription}
      </p>
      <div
        className="flex flex-row justify-center
          items-center"
      >
        <p
          className={`${styles.paragraph}`}
        >
          <a
            className="hover:border-b border-black"
            href={`/sellers/${product?.sellerName}`}
          >
            {product?.sellerName}
          </a>
        </p>
        <small className="px-1">&bull;</small>
        <button
          type="button"
          className="flex flex-row justify-between gap-1
            items-center rounded-full p-2 hover:shadow-lg"
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
      <div
        className="flex flex-row justify-center items-center
          my-1 gap-1"
      >
        <p
          className={`${styles.smallText}`}
        >
          {`${product?.sales} ventas | `}
        </p>
        <a
          aria-label="Califica este producto"
          href="#resenas"
        >
          <StarsRatingElement
            numberOfStars={product?.stars}
          />
        </a>
      </div>
      <div
        className="flex flex-col w-[100%] mt-4"
      >
        {
          product?.options.map((option, index) => (
            <SelectorElement
              key={index}
              title={option.title}
              options={option.options}
            />
          ))
        }
      </div>
      <div
        className="my-3 w-full justify-center items-center"
      >
        <AddToCartButton />
      </div>
    </div>
  </div>
);

export default ListingProduct;
