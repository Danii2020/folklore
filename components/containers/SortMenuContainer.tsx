/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-shadow */

'use client';

import { useState } from 'react';
import styles from '../../styles';

type MenuOption = {
  option: string;
  slug: string;
}
type Props = {
  menuOptions: MenuOption[];
}

const SortMenuContainer = ({ menuOptions }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    menuOptions[0].slug,
  );

  return (
    <div
      className="flex z-20 pt-[37.7px] transition-opacity transition-duration-180
              transition-timing-ease-out transition-cubic-bezier-175-885-04-11
              transition-linear shadow-lg opacity-100 transform scale-x-100
              scale-y-100 perspective-1 left-auto right-0 origin-top-right
              min-w-[300px] max-h-[550px] overflow-visible absolute bg-white
              rounded-lg border-[1px] border-[rgba(34,34,34,.15)] max-w-[300px]
              pl-0 top-0 flex-col"
      role="menu"
    >
      {
        menuOptions.map((option, index) => (
          <a
            key={index}
            type="button"
            role="menuitemradio"
            aria-checked={selectedOption === option.slug}
            href={`?sortBy=${option.slug}`}
            onClick={() => setSelectedOption(option.slug)}
            className={`${styles.smallText} hover:bg-[rgba(34,34,34,.05)]
                          text-left py-3 px-4 min-w-full w-max break-words
                          ${selectedOption === option.slug
              ? 'bg-[rgba(34,34,34,.05)]'
              : 'bg-white'}`}
          >
            {option.option}
          </a>
        ))
      }
    </div>
  );
};

export default SortMenuContainer;
