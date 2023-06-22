import Image from 'next/image';
import Link from 'next/link';
import { people } from '../constants';

const CollectionsCard = () => (
  <div
    className="flex flex-wrap items-center
      md:justify-between justify-center"
  >
    {
      people.map((person) => (
        <div
          key={person.collections[0].id}
          className="flex flex-col md:w-[305px] md:h-[310px]
            rounded-[15px] border-[1px] border-[#BBB5B5]
            w-[305px] h-[310px] mb-3 z-0"
        >
          <div
            className="flex flex-row items-center w-full
              h-[44px] justify-between pt-2 pb-3 px-5"
          >
            <Link
              className="font-semibold text-[18px]"
              href={`/personas/${person.id}/favoritos/${person.collections[0].slug}`}
            >
              {person.collections[0].name}
            </Link>
            <p
              className="text-[15px]"
            >
              {`${person.collections[0].products.length} artículos`}
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
                <Link href={`/productos/${person.collections[0].products[0].id}`}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      transition duration-300 ease-in-out transform
                      hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={person.collections[0].products[0].imgUrl}
                      alt={person.collections[0].name}
                    />
                  </div>
                </Link>
                <div className="py-1" />
                <Link href={`/productos/${person.collections[0].products[1].id}`}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      rounded-bl-[15px] transition duration-300 ease-in-out
                      transform hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={person.collections[0].products[1].imgUrl}
                      alt={person.collections[0].name}
                    />
                  </div>
                </Link>
              </div>
              <div className="px-1" />
              <div
                className="grow shrink"
              >
                <Link href={`/productos/${person.collections[0].products[2].id}`}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      transition duration-300 ease-in-out transform
                      hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={person.collections[0].products[2].imgUrl}
                      alt={person.collections[0].name}
                    />
                  </div>
                </Link>
                <div className="py-1" />
                <Link href={`/productos/${person.collections[0].products[3].id}`}>
                  <div
                    className="relative z-10 m-0 h-[50%]"
                  >
                    <Image
                      className="block w-[100%] h-[100%] object-cover
                      rounded-br-[15px] transition duration-300 ease-in-out
                      transform hover:scale-110 hover:shadow-lg"
                      width="500"
                      height="500"
                      src={person.collections[0].products[3].imgUrl}
                      alt={person.collections[0].name}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))
    }
  </div>

);

export default CollectionsCard;
