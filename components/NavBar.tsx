/* eslint-disable import/no-unresolved */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles';
import SearchBar from './SearchBar';
import SinginButton from './buttons/SinginButton';
import FavoritesButton from './buttons/FavoritesButton';
import CarButton from './buttons/CarButton';
import CategoriesNav from './navigation/CategoriesNav';
import ResponseiveCategoriesNav from './navigation/ResponsiveCategoriesNav';

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
        {
          isMenuOpen && (
            <ResponseiveCategoriesNav />
          )
        }
      </div>
      <CategoriesNav />
    </header>
  );
};

export default Navbar;
