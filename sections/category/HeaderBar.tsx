/* eslint-disable import/named */
/* eslint-disable no-shadow */

import Link from 'next/link';
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
  category: Category;
  numberOfProducts: number;
}

const HeaderBar = ({ querySlug, category, numberOfProducts }: Props) => {
  const subCategories: Category[] | undefined = category?.subCategories;
  return (
    <section
      className={`${styles.xPaddings} py-10 flex pb-6 justify-start
      items-center max-w-[1400px] my-0 mx-auto`}
    >
      <div className="flex md:flex-row flex-col">
        <div className="mr-2 grow shrink basis-[0%] md:max-w-[35%]">
          <div
            className="pb-2"
          >
            <div>
              <h1 className={`${styles.heroHeading}`}>
                {category?.title}
              </h1>
              <p
                className={`${styles.smallText} text-[#525252]`}
              >
                {category?.description}
              </p>
            </div>
          </div>
          <div>
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
        {
          subCategories && (
            <div
              className="flex flex-grap items-center relative
            grow shrink basis-[0%] md:max-w-[70%]"
            >
              <div>
                <div
                  className="flex flex-row gap-2"
                >
                  {
                    subCategories.map((subCategory) => (
                      <div
                        key={subCategory.id}
                        className="py-1 break-words text-center px-2
                      md:w-[50%] w-[30%]"
                      >
                        <Link
                          key={category?.id}
                          href={`/categorias/${querySlug.join('/')}/${subCategory.slug}`}
                        >
                          <img
                            className="rounded-full
                            transition duration-300 ease-in-out transform
                            hover:scale-110 hover:shadow-lg mb-1"
                            width="300"
                            height="300"
                            src={subCategory?.imgUrl}
                            alt={subCategory.title}
                          />
                          <p
                            className={`${styles.paragraph} text-center pt-1`}
                          >
                            {subCategory.title}
                          </p>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default HeaderBar;

