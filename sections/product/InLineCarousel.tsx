'use client';

import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  images: string[] | undefined;
};

const InLineCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const newIndex = (currentIndex - 4 + (images?.length ?? 0)) % (images?.length ?? 0);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 4) % (images?.length ?? 0);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mt-3">
      <div className="md:overflow-hidden overflow-x-scroll relative">
        <ul
          className="flex gap-1.5
          transition-transform duration-300 ease-out left-0"
          style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
        >
          {images?.map((image, index) => (
            <Image
              className="w-1/4 md:w-1/5 rounded-md"
              key={index}
              src={image}
              alt="Foto de reseña"
              width="189"
              height="189"
            />
          ))}
        </ul>
      </div>
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-1/2 left-3 transform
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
      {currentIndex + 4 < (images?.length ?? 0) && (
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-1/2 right-0 mr-6 transform
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

export default InLineCarousel;
