/* eslint-disable import/no-unresolved */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles';
import SearchBar from './SearchBar';
import SinginButton from './buttons/SinginButton';
import FavoritesButton from './buttons/FavoritesButton';
import CarButton from './buttons/CarButton';
import { navCategories } from '../constants/index';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header role="banner">
      <div
        className={`${styles.xPaddings} py-2 max-w-[1400px] w-full m-auto
      flex justify-between items-center flex-wrap bg-[#F6F6F6]`}
      >
        <h2 className={`${styles.brandName} mr-4`}>Folklore</h2>
        <nav
          role="navigation"
          className="flex md:ml-4 md:order-last
        md:mb-0 mb-2"
        >
          <ul
            className="flex justify-between items-center"
          >
            <li><SinginButton /></li>
            <li><FavoritesButton /></li>
            <li><CarButton /></li>
          </ul>
        </nav>
        <button
          type="button"
          className="md:hidden ml-2 mr-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            width="24"
            height="24"
            src="/hamburger-menu.svg"
            alt="hamburger menu"
          />
        </button>
        <SearchBar />
      </div>
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
    </header>
  );
};

export default Navbar;
