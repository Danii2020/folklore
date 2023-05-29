/* eslint-disable no-shadow */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles';

type typeImage = {
  imgUrl: string,
  name: string
}

type Product = {
  id: string,
  images: typeImage[]
}

interface Props {
  product: Product;
}

const Carousel = ({ product }: Props) => {
  const images = product?.images || [];

  const [selectedImage, setSelectedImage] = useState<typeImage>(images[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  function handleImageClick(image: typeImage) {
    setSelectedImage(image);
  }

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div
      className="mb-9 lg:float-left lg:w-[66%] order-1
      w-[100%] desktop-carousel"
    >
      <div
        className={`flex flex-row justify-center ${styles.xPaddings}
        h-[100%] relative gap-3`}
      >
        <div
          className="overflow-y-scroll no-scrollbar"
        >
          <ul
            className="flex flex-col justify-start items-start"
          >
            {images.map((image, index) => (
              <li
                key={index}
                className="mb-2"
              >
                <Image
                  key={index}
                  width="70"
                  height="70"
                  src={image.imgUrl}
                  alt={image.name}
                  className={`cursor-pointer ${image === selectedImage
                    ? 'border-2 border-black'
                    : 'opacity-30'
                  } rounded-[10px]`}
                  onClick={() => handleImageClick(image)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="w-[100%] h-[100%] flex justify-center
         px-3"
        >
          <img
            className="max-h-[100%] max-w-[100%]
            w-auto h-auto min-w-[0%]
            rounded-[10px] block overflow-hidden
            top-[50%] mx-auto"
            src={selectedImage.imgUrl}
            alt={selectedImage.name}
          />
          <div>
            <button
              type="button"
              className="rounded-full h-12 w-12
          flex items-center justify-center
          mx-5 shadow-lg"
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;
