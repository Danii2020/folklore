import Image from 'next/image';
import { collections } from '../constants';

const CollectionsCard = () => (
  <div
    className="flex flex-wrap items-center
      md:justify-between justify-center"
  >
    {
      collections.map((collection) => (
        <div
          key={collection.id}
          className="flex flex-col md:w-[305px] md:h-[310px]
            rounded-[15px] border-[1px] border-[#BBB5B5]
            w-[305px] h-[310px] mb-3 z-0"
        >
          <div
            className="flex flex-row items-center w-full
              h-[44px] justify-between pt-2 pb-3 px-5"
          >
            <a
              className="font-semibold text-[18px]"
              href={collection.href}
            >
              {collection.name}
            </a>
            <p
              className="text-[15px]"
            >
              {`${collection.numProducts} artículos`}
            </p>
          </div>
          <div
            className="flex flex-row justify-between items-center
              h-[256px]"
          >
            <div className="flex h-[100%]">
              <div
                className="grow shrink"
              >
                <a href={collection.images[0].href}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      transition duration-300 ease-in-out transform
                      hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={collection.images[0].imgUrl}
                      alt={collection.name}
                    />
                  </div>
                </a>
                <div className="py-1" />
                <a href={collection.images[1].href}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      rounded-bl-[15px] transition duration-300 ease-in-out
                      transform hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={collection.images[1].imgUrl}
                      alt={collection.name}
                    />
                  </div>
                </a>
              </div>
              <div className="px-1" />
              <div
                className="grow shrink"
              >
                <a href={collection.images[2].href}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      transition duration-300 ease-in-out transform
                      hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={collection.images[2].imgUrl}
                      alt={collection.name}
                    />
                  </div>
                </a>
                <div className="py-1" />
                <a href={collection.images[3].href}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      rounded-br-[15px] transition duration-300 ease-in-out
                      transform hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={collection.images[3].imgUrl}
                      alt={collection.name}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>

);

export default CollectionsCard;
