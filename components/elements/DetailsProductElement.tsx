/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styles from '../../styles';

type Props = {
  title: string,
  children: React.ReactNode,
}

const DetailsProductElement = ({ title, children }: Props) => (
  <details open={true} className="my-2">
    <summary
      className={`${styles.detailsText} relative
        rounded-full py-2 px-3 hover:bg-[#E0E0E0]
        cursor-pointer flex justify-between
        transition duration-300 ease-in-out transform
        hover:scale-105 list-none`}
    >
      {title}
      <span
        className="details-arrow"
      />
    </summary>
    <div
      className="flex justify-start items-center mb-2
      p-2"
    >
      {children}
    </div>
  </details>
);

export default DetailsProductElement;
