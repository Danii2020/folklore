/* eslint-disable import/no-unresolved */
import {
  Carousel,
  ResponsiveCarousel,
  ListingProduct,
  ListingInfoProduct,
  ListingReviews,
  ListingOtherProducts,
  ListingInterestProducts,
} from '../../../sections/product/index';
import { fetchProduct } from '../../../helpers/apis/helpers';

interface ProductProps {
  params: {
    id: string
  }
}

const ProductPage = async ({ params }: ProductProps) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div
      className="bg-[#FFFFFF]"
    >
      <div
        className="lg:block max-w-[1400px]
        my-0 mx-auto mt-6"
      >
        <Carousel product={product} />
        <ResponsiveCarousel product={product} />
        <div
          className="mx-3"
        >
          <ListingProduct product={product} />
          <ListingInfoProduct product={product} />
          <ListingReviews product={product} />
          <ListingOtherProducts product={product} />
          <ListingInterestProducts product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
