'use client';

import React, { useState } from 'react';
import { OtherProductContainer } from '../../components/containers/index';

type Product = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
}

type Props = {
  products: Product[] | undefined;
  username: string | undefined;
}

const OtherProductsInLineCarousel = ({ products, username }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentIndex - 6 + (products?.length ?? 0)) % (products?.length ?? 0);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 6) % (products?.length ?? 0);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mt-3">
      <div className="md:overflow-hidden relative">
        <ul
          className="flex md:flex-nowrap flex-wrap md:gap-2
          gap-3 transition-transform duration-300 ease-out
          md:justify-start md:items-start
          items-center justify-center md:m-0 -m-3"
          style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
        >
          {products?.map((product, index) => (
            <OtherProductContainer
              key={index}
              product={product}
              username={username}
            />
          ))}
        </ul>
      </div>
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-1/3 left-3 transform
          -translate-y-1/2 bg-white rounded-full
          shadow-md p-2 min-w-[45px] min-h-[45px] items-center
          md:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {currentIndex + 6 < (products?.length ?? 0) && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-1/3 right-0 mr-6 transform
          -translate-y-1/2 bg-white rounded-full shadow-md
          p-2 min-w-[45px] min-h-[45px] items-center
          md:block hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default OtherProductsInLineCarousel;
