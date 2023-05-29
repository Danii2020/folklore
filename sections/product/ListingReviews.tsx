/* eslint-disable no-shadow */
import { StarsRatingElement } from '../../components/elements/index';
import { TabsContainer } from '../../components/containers/index';
import { InLineCarousel } from './index';
import styles from '../../styles';

type Review = {
  numberOfStars: number,
  comment: string,
  userImgUrl: string,
  userName: string,
  publishDate: string,
}

type Product = {
  id: string;
  stars: number;
  numberOfReviews: number;
  productReviews: Review[];
  sellerReviews: Review[];
  reviewImages: string[];
}

type Props = {
  product: Product,
}

const ListingReviews = ({ product }: Props) => {
  const productReviews = product?.productReviews;
  const sellerReviews = product?.sellerReviews;

  return (
    <div
      className="lg:w-[60%] clear-left"
    >
      <div>
        <div
          className="max-w-[100%] min-w-[0%] items-start md:pl-1
          lg:pl-12"
        >
          <div
            className="flex flex-row gap-2 items-center"
          >
            <h2 className={`${styles.subText}`}>
              {`${(productReviews?.length ?? 0) + (sellerReviews?.length ?? 0)} reseñas`}
            </h2>
            <StarsRatingElement
              numberOfStars={product?.stars}
            />
          </div>
          <div>
            <TabsContainer
              productReviews={productReviews}
              sellerReviews={sellerReviews}
            />
          </div>
          <div
            className="flex flex-col mt-3 mb-6"
          >
            <h2 className={`${styles.subText}`}>
              <div className="w-full">
                Fotos de reseñas
                <InLineCarousel
                  images={product?.reviewImages}
                />
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingReviews;
