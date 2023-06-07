/* eslint-disable import/named */
/* eslint-disable no-shadow */

import { BreadCrumbs } from '../../components/navigation/index';
import styles from '../../styles';

type Product = {
  id: string,
  imgUrl: string;
  price: number,
  briefDescription: string,
  sellerName: string,
  stars: number,
}

type Category = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  slug: string;
  products: Product[];
  subCategories?: Category[];
}

interface Props {
  querySlug: string[];
  categories: Category[];
  numberOfProducts: number;
}

const GeneralHeaderBar = ({ querySlug, categories, numberOfProducts }: Props) => (
  <section
    className={`${styles.xPaddings} py-10 flex pb-6 justify-start
      items-center max-w-[1400px] my-0 mx-auto`}
  >
    <div className="flex md:flex-row gap-3 flex-col w-full
       md:justify-start md:items-start
       justify-center items-center"
    >
      <div className="mr-2 md:w-[35%]">
        <div className="pr-2">
          <div
            className="pb-2"
          >
            <div>
              <h1 className={`${styles.heroHeading}`}>
                Todas las categorías
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:justify-start md:items-start
            justify-center items-center"
          >
            <BreadCrumbs
              root="categorias"
              querySlug={querySlug}
            />
            <span
              className={`${styles.smallText}`}
            >
              {`(${numberOfProducts} resultados)`}
            </span>
          </div>
        </div>
      </div>
      {
          categories && (
            <div className="flex justify-center w-full">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex flex-col items-center justify-start w-28"
                  >
                    <a
                      href={`/categorias/${querySlug.join('/')}${category.slug}`}
                    >
                      <img
                        className="rounded-full w-full h-28 object-cover transition
                        duration-300 ease-in-out transform hover:scale-110
                        hover:shadow-lg mb-1"
                        src={category?.imgUrl}
                        alt={category.title}
                      />
                      <div className="justify-center items-center">
                        <p className="text-center pt-1">{category.title}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )
        }

    </div>
  </section>
);

export default GeneralHeaderBar;

