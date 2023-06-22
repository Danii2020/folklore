import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles';

type Props = {
  sellerImgUrl: string | undefined,
  sellerName: string | undefined,
}

const SellerContainer = ({ sellerImgUrl, sellerName }: Props) => (
  <div
    className="flex flex-col w-[100%] justify-center"
  >
    <div
      className="flex flex-row items-center p-1 mb-4
      gap-2"
    >
      <Image
        className="rounded-full"
        width="75"
        height="75"
        src={sellerImgUrl || ''}
        alt={sellerName || 'Foto del vendedor'}
      />
      <Link
        className={`${styles.subTitle} font-light hover:border-b
        border-black`}
        href={`/sellers/${sellerName}`}
      >
        {sellerName}
      </Link>
    </div>
    <button
      type="button"
      className="rounded-full w-[100%] justify-center
      items-center p-3 border-[2px] border-black hover:shadow-lg
      transition duration-300 ease-in-out transform
      hover:scale-105"
    >
      {`Enviar mensaje a ${sellerName}`}
    </button>
  </div>
);

export default SellerContainer;
