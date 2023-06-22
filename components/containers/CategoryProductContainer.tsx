import Link from 'next/link';
import styles from '../../styles';
import { StarsRatingElement } from '../elements';

type Product = {
  id: string;
  imgUrl: string;
  briefDescription: string;
  price: number;
  stars: number;
  sellerName: string;
  numberOfReviews: number;
}

type Props = {
  product: Product;
}

const CategoryProductContainer = ({ product }: Props) => (
  <div className="h-full max-w-[100%]">
    <div className="mr-0">
      <Link
        className="w-[100%] inline-block"
        href={`/productos/${product.id}`}
      >
        <img
          className="w-full max-h-[249px] rounded-md mb-2
        cursor-pointer transition duration-300
        ease-in-out hover:scale-90
        hover:shadow-lg"
          src={product.imgUrl}
          alt={product.briefDescription}
          width="189"
          height="189"
          loading="lazy"
        />
        <div className="flex flex-col py-1 whitespace-normal">
          <h3
            className={`font-normal ${styles.paragraph} overflow-hidden
          text-ellipsis whitespace-nowrap`}
          >
            {product.briefDescription}
          </h3>
          <small
            className={`font-normal ${styles.smallText}`}
          >
            {product.sellerName}
          </small>
          <span
            className="inline-flex flex-wrap top-[1px] items-center"
          >
            <span
              className="flex flex-row justify-center items-center
              bottom-[1px] gap-1"
            >
              <StarsRatingElement numberOfStars={product.stars} />
              <span
                className={`font-light ${styles.smallText} inline-block
                text-center`}
              >
                {`(${product.numberOfReviews})`}
              </span>
            </span>
          </span>
          <p
            className={`${styles.paragraph} font-medium`}
          >
            {`USD ${product.price}`}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default CategoryProductContainer;
