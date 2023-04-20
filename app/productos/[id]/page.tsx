import {
  Carousel,
  ResponsiveCarousel,
  ListingProduct,
  ListingInfoProduct,
  ListingReviews,
  ListingOtherProducts,
  ListingInterestProducts,
} from '../../../sections/product/index';

interface ProductProps {
  params: {
    id: string
  }
}

const ProductPage = ({ params }: ProductProps) => {
  const { id } = params;

  return (
    <div
      className="bg-[#FFFFFF]"
    >
      <div
        className="lg:block max-w-[1400px]
        my-0 mx-auto mt-6"
      >
        <Carousel id={id} />
        <ResponsiveCarousel id={id} />
        <div
          className="mx-3"
        >
          <ListingProduct id={id} />
          <ListingInfoProduct id={id} />
          <ListingReviews id={id} />
          <ListingOtherProducts id={id} />
          <ListingInterestProducts id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
