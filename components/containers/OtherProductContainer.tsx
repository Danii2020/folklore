import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles';

type Product = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

type Props = {
  product: Product;
  username: string | undefined;
}

const OtherProductContainer = ({ product, username }: Props) => (
  <div className="flex md:max-w-[16.1%] max-w-[45%] md:py-2">
    <Link
      className="w-[100%] inline-block"
      href={`/productos/${product.id}`}
    >
      <Image
        className="w-full rounded-md mb-2
        cursor-pointer transition duration-300
        ease-in-out transform hover:scale-90
        hover:shadow-lg"
        src={product.imgUrl}
        alt={product.name}
        width="189"
        height="189"
      />
      <div className="py-1 whitespace-normal">
        <h3
          className={`font-light ${styles.paragraph} overflow-hidden
          text-ellipsis whitespace-nowrap`}
        >
          {product.name}
        </h3>
        <small
          className={`font-light ${styles.smallText}`}
        >
          {username}
        </small>
        <p
          className={`${styles.paragraph} font-medium`}
        >
          {`USD ${product.price}`}
        </p>
      </div>
    </Link>
  </div>
);

export default OtherProductContainer;
