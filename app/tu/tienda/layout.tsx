/* eslint-disable import/no-unresolved */

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from '../../../styles';

/* eslint-disable jsx-a11y/anchor-is-valid */
interface Props {
  children: React.ReactNode
}

const ShopLayout: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();
  const paths = pathName?.split('/') || [];
  const currentShopPage = paths[paths.length - 1];
  const previousShopPage = paths[paths.length - 2];
  const shopName = paths[paths.length - 4];

  const nameUrl = `/tu/tienda/${shopName !== 'tienda' ? shopName : ''}/onboarding/nombre/crear`;
  const inventoryUrl = `/tu/tienda/${shopName !== 'tienda' ? shopName : ''}/onboarding/inventario/crear`;
  return (
    <div>
      <div className="bg-white pt-[6px]">
        <div className="flex flex-wrap max-w-[1400px] m-auto">
          <div className="flex-grow basis-full max-w-full">
            <ol className="flex relative z-0 pb-7 w-full">
              <li className="relative text-center flex-grow basis-0 m-0">
                <a
                  className="pointer-events-auto text-[#888888]"
                  href={`${currentShopPage === 'nombre' || previousShopPage === 'nombre' ? '#' : nameUrl}`}
                >
                  <div className="subway__stop__wrapper">
                    <div className={`${currentShopPage === 'nombre' || previousShopPage === 'nombre'
                      ? 'subway__stop--active'
                      : 'subway__stop--passed'}`}
                    />
                  </div>
                  <div className={`${styles.subwayText} font-normal hover:underline`}>
                    Ponle un nombre a tu tienda
                  </div>
                </a>
              </li>
              <li className={`relative text-center flex-grow basis-0 m-0 subway_stop
                ${currentShopPage === 'nombre' || previousShopPage === 'nombre'
                ? 'subway_stop'
                : 'subway_stop--visited'}`}
              >
                <a
                  className={`text-[#888888]
                  ${currentShopPage === 'inventario' || previousShopPage === 'inventario' || shopName !== 'tienda'
                    ? 'cursor-pointer'
                    : 'pointer-events-none'}`}
                  href={currentShopPage === 'inventario' || previousShopPage === 'inventario' ? '#' : shopName !== 'tienda' ? inventoryUrl : ''}
                >
                  <div className={`${currentShopPage === 'inventario' || previousShopPage === 'inventario' || shopName !== 'tienda'
                    ? 'subway__stop__wrapper'
                    : 'block'}`}
                  >
                    <div className={`${currentShopPage === 'inventario' || previousShopPage === 'inventario' || shopName !== 'tienda'
                      ? 'subway__stop--active'
                      : 'subway_stop_dot'}`}
                    />
                  </div>
                  <div className={`${styles.subwayText} font-normal hover:underline`}>
                    Añade inventario a tu tienda
                  </div>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ShopLayout;
