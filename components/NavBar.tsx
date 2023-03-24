'use client';

import styles from '../styles';

const Navbar = () => (
  <nav
    className={`${styles.xPaddings} h-135px px-10
    relative bg-[#F6F6F6]`}
  >
    <div
      className="flex md:flex-row flex-col
      py-5"
    >
      <h2 className={styles.brandName}>Folklore</h2>
    </div>
  </nav>
);

export default Navbar;
