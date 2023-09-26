'use client';

import { usePathname } from 'next/navigation';
import styles from '../../../../../../../styles';
import { ImagesSection, AdInfoSection, PriceSection } from '../../../../../../../sections/create-inventory/index';

const CreateListingPage = () => {
  const pathName = usePathname();
  const paths = pathName?.split('/') || [];
  const shopName = paths[paths.length - 4];
  return (
    <>
      <div className="border-t-[1px] border-[#e1e3df]">
        <div>
          <div className="md:mt-4 md:mb-3 mt-3 mb-2 m-0">
            <div className="md:px-0 px-4 max-w-[1400px] m-auto float-none relative">
              <div className={`${styles.xPaddings} w-full float-left`}>
                <div className="pt-7 md:mb-7 mb-6 text-left">
                  <h3 className={`${styles.heroSubSubtitle}`}>
                    Añade inventario a tu tienda
                  </h3>
                  <p className={`${styles.paragraph} font-light mt-5`}>
                    Añade algunas fotos y detalles sobre el artículo para crear un anuncio.
                    Rellena lo que puedas por ahora, podrás modificarlo más adelante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ImagesSection />
          <AdInfoSection />
          <PriceSection />
        </div>
      </div>
      <div
        className="left-0 bottom-0 right-0 fixed z-50 pb-3
      border-t-[1px] border-[#e1e3df] py-2 bg-white"
      >
        <div className="md:px-4 px-3 float-none relative max-w-[1400px] m-auto">
          <div className="w-full md:px-4 px-2 float-left">
            <div className="float-left">
              <button
                type="button"
                className="flex bg-white border-[0.5px] border-[rgba(0,0,0,.15)] text-[#222] rounded-sm
              text-center h-[38px] font-bold p-2 items-center justify-center select-none"
              >
                Cancelar
              </button>
            </div>
            <div className="float-right">
              <a
                className="flex bg-[#222] border-[0.5px] border-[rgba(0,0,0,.15)] text-white rounded-md
              h-[38px] p-2 text-center font-bold items-center justify-center select-none"
                href={`/tu/tienda/${shopName}/onboarding/inventario`}
              >
                Guardar y continuar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateListingPage;
