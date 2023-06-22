import Link from 'next/link';
import styles from '../../styles';

interface Props {
  collectionName: string | undefined;
  numberOfProducts: number | undefined;
  personName: string;
  personId: string;
}

const ProductHeader = ({ collectionName, numberOfProducts, personName, personId }: Props) => (
  <div className="w-full">
    <div className="flex items-center gap-4 mt-3 mb-5 w-full">
      <h2 className={`${styles.heroSubSubtitle} flex-grow-0`}>
        {collectionName}
      </h2>
      <p className={`${styles.smallText} text-[#525252] relative flex-grow`}>
        {`${numberOfProducts} artículos seleccionados por `}
        <Link
          className={`${styles.smallText} text-[#525252] underline`}
          href={`/personas/${personId}`}
        >
          {personName}
        </Link>
      </p>
    </div>
  </div>
);

export default ProductHeader;
