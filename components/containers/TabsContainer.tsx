'use client';

import { useState } from 'react';
import styles from '../../styles';
import { ReviewsContainer } from './index';

type Review = {
  numberOfStars: number,
  comment: string,
  userImgUrl: string,
  userName: string,
  publishDate: string,
}

type Props = {
  productReviews: Review[] | undefined;
  sellerReviews: Review[] | undefined;
}
const TabsContainer = (
  {
    productReviews,
    sellerReviews,
  }:Props,
) => {
  const [activeTab, setActiveTab] = useState('product');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="text-left border-b relative">
        <ul
          className="flex flex-row -mb-px gap-4"
        >
          <li className="mr-2">
            <button
              type="button"
              className={`${activeTab === 'product'
                ? 'border-black'
                : 'border-transparent hover:border-[#c6c6c6]'
              } py-4 cursor-pointer flex border-b-2
              justify-between items-center gap-3 text-left
              ${styles.smallText}`}
              onClick={() => handleTabChange('product')}
            >
              Reseñas del producto
              <span
                className="rounded-full px-3 items-center bg-[#dfdfdf]
                min-w-[24px] break-words justify-center text-center"
              >
                {productReviews?.length}
              </span>
            </button>
          </li>
          <li className="mr-2">
            <button
              type="button"
              className={`${activeTab === 'seller'
                ? 'border-black'
                : 'border-transparent hover:border-[#c6c6c6]'
              } py-4 cursor-pointer flex border-b-2
              justify-between items-center gap-3 text-left
              ${styles.smallText}`}
              onClick={() => handleTabChange('seller')}
            >
              Reseñas del vendedor
              <span
                className="rounded-full px-3 items-center bg-[#dfdfdf]
                min-w-[24px] break-words justify-center text-center"
              >
                {sellerReviews?.length}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div
        className="flex flex-col items-start text-left justify-start
        py-4"
      >
        {activeTab === 'product' ? (
          productReviews?.map((productReview, index) => (
            <ReviewsContainer
              key={index}
              reviewType={productReview}
            />
          ))
        ) : (
          sellerReviews?.map((sellerReview, index) => (
            <ReviewsContainer
              key={index}
              reviewType={sellerReview}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TabsContainer;
