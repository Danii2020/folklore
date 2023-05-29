/* eslint-disable no-shadow */

'use client';

// import { useState } from 'react';
// import Image from 'next/image';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

type typeImage = {
  imgUrl: string,
  name: string
}

type Product = {
  id: string,
  images: typeImage[]
}

interface CarouselProps {
  product: Product;
}

const ResponsiveCarousel = ({ product }: CarouselProps) => {
  const images = product?.images || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }

  const updateIndex = (index: number) => {
    let newIndex = index;
    if (index < 0) {
      newIndex = images.length - 1;
    } else if (index >= images.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="md:hidden visible overflow-hidden relative"
    >
      <div className="relative top-3 left-0 flex justify-end">
        <button
          type="button"
          className="rounded-full h-12 w-12
            flex items-center justify-center
            mx-5 shadow-lg absolute
            bg-white z-[999]"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <Image
              width="24"
              height="24"
              src="/favoriteRed.svg"
              alt="Favorito"
            />
          ) : (
            <Image
              width="24"
              height="24"
              src="/favorite.svg"
              alt="Favorito"
            />
          )}
        </button>
      </div>
      <div
        className="whitespace-nowrap transition transform
        duration-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {
          images.map((image, index) => (
            <div
              key={index}
              className={`inline-flex items-center justify-center
              h-[100%] w-[100%]`}
            >
              <img
                src={image.imgUrl}
                alt={image.name}
              />
            </div>
          ))
        }
      </div>
      <div
        className="flex justify-center items-center my-3"
      >
        {
          images.map((image, index) => (
            <span
              key={index}
              className={`rounded-full m-2 w-[8px] h-[8px]
              overflow-hidden inline-block
              ${index === activeIndex
                ? 'bg-[#000000]'
                : 'bg-[#bebebe]'}`}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
