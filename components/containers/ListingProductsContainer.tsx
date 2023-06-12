/* eslint-disable import/no-unresolved */
import CategoryProductContainer from './CategoryProductContainer';

type Product = {
  id: string,
  imgUrl: string;
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
  numberOfReviews: number;
}

interface Props {
  products: Product[] | undefined;
}

const ListingProductsContainer = ({ products }: Props) => (
  products && products.length > 0 ? (
    <div>
      <ol className="flex flex-wrap -m-2 pl-0">
        {
          products.map((product) => (
            <li
              key={product.id}
              className="flex grow basis-[25%] md:max-w-[25%]
                    max-w-[50%] p-2"
            >
              <CategoryProductContainer product={product} />
            </li>
          ))
        }
      </ol>
    </div>
  )
    : (
      <div className="items-center justify-center">
        No hay productos con ese filtro por el momento...
      </div>
    )

);

export default ListingProductsContainer;
