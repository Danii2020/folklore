/* eslint-disable import/no-unresolved */

import styles from '../../styles';
import { RecentlyViewedContainer } from '../../components/index';

const RecentlyViewed = () => (
  <section
    className={`${styles.xPaddings} md:mt-10 mt-5 pt-2 pb-6
    max-w-[1400px] w-full m-auto bg-[#FFFFFF]
    `}
  >
    <div
      className="flex md:flex-row mb-3 flex-col"
    >
      <h2
        className={`${styles.subTitle} md:text-left text-center`}
      >
        Vistos recientemente
      </h2>
    </div>
    <div
      className="flex justify-center items-center"
    >
      <RecentlyViewedContainer />
    </div>
  </section>
);

export default RecentlyViewed;
