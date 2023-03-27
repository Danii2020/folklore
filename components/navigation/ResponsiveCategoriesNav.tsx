import { navCategories } from '../../constants/index';
import styles from '../../styles';

const ResponseiveCategoriesNav = () => (
  <nav
    role="navigation"
    className={`${styles.xPaddings} py-4 bg-[#F6F6F6]
  block `}
  >
    <ul
      className="flex flex-col
    text-left"
    >
      {navCategories.map((category) => (
        <li
          className="py-1"
          key={category.id}
        >
          <a
            className="font-normal md:text-[16px] text-[20px]"
            href={category.href}
          >
            {category.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>

);

export default ResponseiveCategoriesNav;
