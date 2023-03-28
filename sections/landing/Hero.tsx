/* eslint-disable import/no-unresolved */

import styles from '../../styles';
import { HeroCategories } from '../../components/index';

const Hero = () => (
  <div
    className={`${styles.xPaddings} flex pt-3 pb-6
    justify-center items-center bg-[rgba(19,122,132,0.14)]
    `}
  >
    <div
      className="flex flex-col"
    >
      <h2
        className={`${styles.heroHeading} mb-5 text-center`}
      >
        Apoya el emprendimiento nacional,
        encuentra cosas que te enamoren en Folklore.
      </h2>
      <HeroCategories />
    </div>
  </div>
);

export default Hero;
