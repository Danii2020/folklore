/* eslint-disable import/no-unresolved */

import styles from '../../styles';
import { CollectionsCard } from '../../components';

const Collections = () => (
  <section
    className={`${styles.xPaddings} md:mt-5 mt-5 mb-3 py-2
    max-w-[1400px] w-full m-auto bg-[#FFFFFF]
    `}
  >
    <div
      className="flex md:flex-row mb-3 flex-col"
    >
      <h2
        className={`${styles.subTitle} md:text-left text-center`}
      >
        Visita colecciones e inspírate
      </h2>
    </div>
    <CollectionsCard />
  </section>
);

export default Collections;
