/* eslint-disable import/no-unresolved */

import styles from '../../styles';
import { HeroCategories } from '../../components/index';

const Hero = () => (
  <section
    className={`${styles.xPaddings} flex pt-3 pb-6
    justify-center items-center bg-[rgba(19,122,132,0.14)]
    `}
  >
    <div
      className="flex flex-col"
    >
      <h1
        className={`${styles.heroHeading} mb-5 text-center`}
      >
        Apoya el emprendimiento, encuentra cosas que te enamoren en Folklore.
      </h1>
      <HeroCategories />
    </div>
  </section>
);

export default Hero;
