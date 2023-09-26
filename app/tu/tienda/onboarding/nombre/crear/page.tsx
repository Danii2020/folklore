/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { useRouter } from 'next/navigation';
import { SetStateAction, useState } from 'react';
import styles from '../../../../../../styles';

const CreateShopPage = () => {
  const router = useRouter();
  const [shopName, setShopName] = useState('');

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setShopName(event.target.value);
  };

  const handleSaveAndContinue = () => {
    if (shopName.trim() !== '') {
      const formattedShopName = shopName.replace(/\s+/g, '-').toLowerCase();
      const redirectUrl = `/tu/tienda/${formattedShopName}/onboarding/inventario/crear`;
      router.push(redirectUrl);
    }
  };

  return (
    <>
      <div className="border-t-[1px] border-[#e1e3df]">
        <div className="md:px-12 px-2 max-w-[1400px] m-auto
      float-none relative"
        >
          <div className="md:px-12 px-6 md:pt-7 pt-6 pb-3 w-full float-left">
            <div>
              <h1 className={`${styles.sellHeroHeading} text-center mb-[6px] text-[#222]`}>
                Ponle nombre a tu tienda
              </h1>
              <div className="flex flex-wrap justify-center max-w-[1400px] m-auto">
                <div className="grow md:basis-[50%] md:max-w-[50%] basis-[100%]
              max-w-[100%] p-0"
                >
                  <div className={`${styles.paragraph} mb-[42px] mt-[12px] text-[#222]`}>
                    ¡No te preocupes! Puedes usar un nombre temporal ahora y cambiarlo más adelante. Muchas veces,
                    los vendedores se inspiran en lo que venden, en su estilo... En cualquier cosa, prácticamente.
                  </div>
                  <div className="mb-[12px] table w-full">
                    <div className="w-full table-cell align-top relative">
                      <div className="relative">
                        <label
                          className="text-left border-0 h-[1px] -m-1 overflow-hidden p-0 w-[1px] hidden"
                          htmlFor="shop-name-input"
                        >
                          Escribe el nombre de tu tienda
                        </label>
                        <input
                          aria-required="true"
                          aria-invalid="false"
                          id="shop-name-input"
                          type="text"
                          placeholder="Escribe el nombre de tu tienda"
                          onChange={handleInputChange}
                          value={shopName}
                          className={`${styles.paragraph} h-[48px] bg-white shadow inset-0 inset-y-1
                        inset-x-0 sm:inset-x-1 sm:inset-y-0 sm:shadow-sm sm:rounded-lg sm:ring-1
                        sm:ring-black sm:ring-opacity-5 border-[rgba(34,34,34,.15)] border-[1px]
                        rounded-md text-[#222] px-3 py-2 w-full`}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pb-[42px]">
                      <div>
                        <div className="flex items-start">
                          <div>
                            <span className="w-[18px] h-[18px]">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="3" fill="#595959" />
                              </svg>
                            </span>
                          </div>
                          <div className="text-[#595959] text-[14px]">
                            Entre 4 y 20 caracteres
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <div>
                            <span className="w-[18px] h-[18px]">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="3" fill="#595959" />
                              </svg>
                            </span>
                          </div>
                          <div className="text-[#595959] text-[14px]">
                            Sin caracteres especiales, espacios ni letras con tilde
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="left-0 bottom-0 right-0 fixed z-50 pb-3
      border-t-[1px] border-[#e1e3df] py-3 bg-white"
      >
        <div className="md:px-4 px-3 float-none relative max-w-[1400px] m-auto">
          <div className="md:text-right text-center w-full md:px-4 px-3 py-6 float-left">
            <button
              type="button"
              className="lg:text-[20px] md:text-[20px] sm:text-[15px] text-[20px] text-white
            font-medium rounded-full z-10 md:px-5 px-4 py-3 my-3 text-center bg-black
            transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg"
              onClick={handleSaveAndContinue}
              disabled={shopName.trim() === ''}
            >
              Guardar y continuar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateShopPage;
