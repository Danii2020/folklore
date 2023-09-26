'use client';

import { usePathname } from 'next/navigation';

const ListingPage = () => {
  const pathName = usePathname();
  const paths = pathName?.split('/') || [];
  const shopName = paths[paths.length - 3];

  return (
    <>
      <div>
        <div className="flex md:flex-wrap md:flex-row flex-col justify-center max-w-[1400px] m-auto p-6">
          <div className="md:max-w-[41.667%] align-middle p-6 flex-grow flex-shrink basis-0 md:order-2 order-1">
            <div className="flex flex-wrap justify-center">
              <div className="flex p-2 flex-grow basis-[100%] max-w-full justify-center">
                <div className="relative inline-block">
                  <a href="/1" className="text-[#222]">
                    <div className="text-left cursor-pointer z-10 inline-block max-w-full rounded-xl transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg"
                    >
                      <div className="border-[1px] border-[rgba(14,14,14,.0901960784)] rounded-xl overflow-hidden
                    bg-white"
                      >
                        <img src="https://i.etsystatic.com/44467585/r/il/cf3bdc/5065937426/il_340x270.5065937426_ecv5.jpg"
                          alt="Imagen de tu producto"
                          className="block w-full"
                        />
                        <div className="p-3">
                          <p className="font-normal text-sm overflow-hidden text-ellipsis whitespace-nowrap
                      min-w-0"
                          >
                            Pasteles caseros
                          </p>
                          <p className="font-normal text-sm overflow-hidden text-ellipsis whitespace-nowrap
                      min-w-0 text-[#595959]"
                          >
                            Daniicraft
                          </p>
                          <p className="font-medium text-base mt-2">
                            $10.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow flex-shrink basis-0 md:max-w-[58.333%] text-left pb-3 mt-2 items-center md:order-1 order-2">
            <div>
              <h2 className="font-medium text-3xl pb-3">
                ¡Buen trabajo! Acabas de publicar tu primer anuncio.
              </h2>
              <div className="font-normal text-base text-left">
                Estás un paso más cerca de hacer tu primera venta. Considera añadir algunos anuncios más si lo deseas.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="left-0 bottom-0 right-0 fixed z-50 pb-3
      border-t-[1px] border-[#e1e3df] py-2 bg-white"
      >
        <div className="md:px-4 px-3 float-none relative max-w-[1400px] m-auto">
          <div className="w-full md:px-4 px-2 flex flex-row justify-end gap-5">
            <div className="float-left">
              <button
                type="button"
                className="flex bg-white border-[0.5px] border-[rgba(0,0,0,.15)] text-[#222] rounded-sm
              text-center h-[38px] font-bold p-2 items-center justify-center select-none"
              >
                Hacerlo más tarde
              </button>
            </div>
            <div className="float-right">
              <a
                className="flex bg-[#222] border-[0.5px] border-[rgba(0,0,0,.15)] text-white rounded-md
              h-[38px] p-2 text-center font-bold items-center justify-center select-none"
                href={`/tu/tienda/${shopName}/onboarding/inventario/crear`}
              >
                Añadir más anuncios
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
