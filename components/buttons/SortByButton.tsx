import { MouseEventHandler } from 'react';
import styles from '../../styles';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSortMenuOpen: boolean;
  isFilterOpen: boolean;
}

const SortByButton = ({ onClick, isSortMenuOpen, isFilterOpen }: Props) => (
  <button
    type="button"
    className={`flex flex-row rounded-full justify-center items-center
            py-1 px-2 transition duration-300 ease-in-out
            border-2 ${!isSortMenuOpen
      ? 'border-black hover:scale-105 hover:shadow-lg gap-1'
      : 'border-transparent'}
        ${!isFilterOpen ? 'z-30 relative' : ''}`}
    onClick={onClick}
  >
    <span className={`${styles.smallText} font-light`}>
      Ordenar por:
    </span>
    <span className={`${styles.smallText} font-medium`}>
      Relevancia
    </span>
    <span
      className="w-[18px] h-[18px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <polygon points="16.5 10 12 16 7.5 10 16.5 10" />
      </svg>
    </span>
  </button>
);

export default SortByButton;
