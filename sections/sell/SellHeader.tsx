import Link from 'next/link';
import styles from '../../styles';

const SellHeader = () => (
  <div
    className="relative bg-white z-1 sell-header pb-[44%]"
  >
    <div className="w-full left-0 absolute lg:top-[30%] top-[45%] mt-6 sell-header-text">
      <div
        className="md:pl-4 md:pr-4
        pl-2 pr-2 float-none relative"
      >
        <div
          className="float-none ml-auto mr-auto lg:w-[41.67%] w-full md:pl-4 md:pr-4
          pl-2 pr-2 mb-[60px] sell-header-text-container"
        >
          <h1
            className={`${styles.sellHeroHeading} text-center`}
          >
            Millones de compradores impacientes por ver lo que vendes
          </h1>
          <div className="flex items-center justify-center">
            <Link
              className={`${styles.anchorButton} rounded-full bg-white border-2 border-black
              md:py-3 px-4 py-1 relative text-center items-center inline-block justify-center
              max-w-[120px] min-h-[48px] align-middle my-3 w-full
              transition duration-300 ease-in-out transform
              hover:scale-105 hover:shadow-lg`}
              href="/tu/tienda/crear"
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SellHeader;

