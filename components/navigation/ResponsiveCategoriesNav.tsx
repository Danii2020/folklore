import Link from 'next/link';
import { categories } from '../../constants/index';
import styles from '../../styles';

const ResponsiveCategoriesNav = () => (
  <nav
    role="navigation"
    className={`${styles.xPaddings} right-0 py-4 w-[100%]
    top-1/2 h-[calc(90vh-50px)] block fixed z-10
    bottom-0 bg-[#FFFFFF]`}
  >
    <ul
      className="flex flex-col
    text-left"
    >
      {categories.map((category) => (
        <li
          className="py-1"
          key={category.id}
        >
          <Link
            className="font-normal md:text-[16px] text-[20px]"
            href={`/categorias/${category.slug}`}
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>

);

export default ResponsiveCategoriesNav;
