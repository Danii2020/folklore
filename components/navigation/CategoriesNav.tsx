import { navCategories } from '../../constants/index';
import styles from '../../styles';

const CategoriesNav = () => (
  <nav
    role="navigation"
    className={`${styles.xPaddings} max-w-[1400px] m-auto py-3
  md:block hidden bg-[#F6F6F6]`}
  >
    <ul className="flex justify-between items-center w-full">
      {navCategories.map((category) => (
        <li key={category.id}>
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

export default CategoriesNav;
