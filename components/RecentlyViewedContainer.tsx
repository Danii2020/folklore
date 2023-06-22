import Link from 'next/link';
import { recentlyViewedProducts } from '../constants/index';

const RecentlyViewedContainer = () => (
  <ul
    className="flex flex-wrap justify-between"
  >
    {
      recentlyViewedProducts.map((product) => (
        <li
          className="md:mb-10 mb-3"
          key={product.id}
        >
          <div
            className="flex md:w-[241px] md:h-[190px]
            w-[150px] h-[120px] relative transition duration-300
            ease-in-out transform hover:scale-110
            hover:shadow-lg"
          >
            <Link
              href={product.href}
            >
              <img
                className="w-[100%] rounded-[6px]
                object-contain"
                width="241"
                height="190"
                src={product.imgUrl}
                alt={product.id}
                loading="lazy"
              />
              <div
                className="flex justify-center items-center
                    absolute bottom-1 left-3 rounded-full
                    border-[0.2px] border-[#565454] bg-[#FFFFFF] px-2 py-0.5"
              >
                <p
                  className="md:text-[15px] text-[13px]"
                >
                  {`USD ${product.price}`}
                </p>
              </div>
            </Link>
          </div>
        </li>
      ))
    }
  </ul>

);

export default RecentlyViewedContainer;
