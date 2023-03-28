import Image from 'next/image';
import { heroCategories } from '../constants';

const HeroCategories = () => (
  <ul
    className="flex flex-wrap mt-4 md:px-9
    px-5 justify-between items-center"
  >
    {
      heroCategories.map((category) => (
        <li
          className="px-1 max-w-[114px]"
          key={category.id}
        >
          <a
            className="max-w-fit z-0"
            href={category.href}
          >
            <div
              className="flex py-2 justify-center items-center
              flex-col"
            >
              <Image
                className="rounded-full max-w-[114px]
                border-[0.5px] border-[#565454] object-contain"
                width="114"
                height="114"
                src={category.imgUrl}
                alt={category.title}
              />
              <p
                className="font-semibold text-center mt-3 text-[16px] text-black
                leading-[25px]"
              >
                {category.title}
              </p>
            </div>
          </a>
        </li>
      ))
    }
  </ul>

);

export default HeroCategories;
