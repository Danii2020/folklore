'use client';

import Image from 'next/image';

// import styles from '../styles';

const SearchBar = () => (
  <form
    className="flex flex-1 relative"
    action="https://www.etsy.com/search"
    method="get"
  >
    <div
      className="flex w-full items-center
      justify-center"
    >
      <input
        className="flex-1 h-[51px] rounded-full
        border-black border-2 pr-12 pl-4"
        type="search"
        name="q"
        placeholder="Busca lo que necesites"
        aria-label="Busca lo que necesites"
      />
      <button
        className="absolute top-2 right-4 flex
        items-center"
        type="submit"
      >
        <Image
          width="30"
          height="30"
          src="/search.svg"
          alt="search"
        />
      </button>
    </div>
  </form>

);

export default SearchBar;
