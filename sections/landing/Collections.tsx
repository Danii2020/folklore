/* eslint-disable import/no-unresolved */

import styles from '../../styles';
import { collections } from '../../constants';

const Collections = () => (
  <section
    className={`${styles.xPaddings} md:mt-5 mt-5 py-2
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
    <div
      className="flex justify-center items-center"
    >
      <ul
        className="flex flex-row justify-between"
      >
        {
          collections.map((collection) => (
            <li
              className="md:mb-10 mb-3"
              key={collection.id}
            >
              <div
                className="flex md:w-[241px] md:h-[210px]
                rounded-[15px] border-[0.3px] boder-[#565454]
                w-[150px] h-[130px]"
              >
                s
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  </section>
);

export default Collections;
