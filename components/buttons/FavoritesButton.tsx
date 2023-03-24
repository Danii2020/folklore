'use client';

import Image from 'next/image';

const FavoritesButton = () => (
  <button
    className="mx-3"
    type="button"
  >
    <Image
      width="24"
      height="24"
      src="/favorite.svg"
      alt="favorites"
    />
  </button>

);

export default FavoritesButton;
