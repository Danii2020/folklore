/* eslint-disable import/no-unresolved */
import styles from '../styles';
import SearchBar from './SearchBar';
import SinginButton from './buttons/SinginButton';
import FavoritesButton from './buttons/FavoritesButton';
import CarButton from './buttons/CarButton';

const Navbar = () => (
  <nav
    className={`${styles.xPaddings} py-2 max-w-[1400px] w-full m-auto
    flex justify-between items-center flex-wrap bg-[#F6F6F6]`}
  >
    <h2 className={`${styles.brandName} mr-4`}>Folklore</h2>
    <div
      className="flex md:ml-4 md:order-last
      md:mb-0 mb-2 justify-between"
    >
      <SinginButton />
      <FavoritesButton />
      <CarButton />
    </div>
    <SearchBar />
  </nav>
);

export default Navbar;
