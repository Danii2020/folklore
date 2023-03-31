'use client';

import Image from 'next/image';

const CarButton = () => (
  <button
    className="ml-3 rounded-full hover:bg-[rgba(96,165,250,0.25)] md:p-4"
    type="button"
  >
    <Image
      width="24"
      height="24"
      src="/car.svg"
      alt="shooping car"
    />
  </button>

);

export default CarButton;
