/* eslint-disable import/no-unresolved */
import styles from '../../styles';

const PriceSection = () => (
  <div className={`${styles.xPaddings} max-w-[1400px] m-auto float-none relative`}>
    <div className="w-full float-left">
      <div>
        <div
          className="md:p-6 p-5 md:mb-6 mb-5 rounded-[3px] bg-white border-[1px]
        border-[#e1e3df] m-0"
        >
          <div className="md:mb-6 mb-5">
            <h2 className={`${styles.subTitle} font-medium mb-[6px]`}>
              Inventario y precios
            </h2>
          </div>
          <div className="flex flex-col float-none relative m-0">
            <div>
              <div id="price" className="md:mb-4 mb-3">
                <div className="md:w-[33.66%] float-left">
                  <label className={`${styles.smallText} mb-1 font-bold`}>
                    Precio *
                  </label>
                  <div className="mb-3">
                    <p className={`${styles.blockText} mb-3`}>
                      Recuerda tener en cuenta los costes de los materiales, la mano de obra y otros gastos del negocio. Si ofreces envío gratis, no olvides incluir el coste del envío para que no se coma tus beneficios.
                    </p>
                  </div>
                </div>
                <div className="md:w-[66.33%] md:mb-0 mb-3 w-full md:px-12 float-left">
                  <div className="flex flex-wrap">
                    <div className="grow md:basis-[25%] md:max-w-[25%] basis-[50%] max-w-[50%]">
                      <div className="relative">
                        <span className="left-0 pl-3 pointer-events-none absolute top-[50%] transform -translate-y-1/2">
                          US$
                        </span>
                        <input
                          id="price_retail-input"
                          type="number"
                          name="price-input"
                          placeholder="0"
                          className="rounded-md border-[rgba(14,14,14,.1803921569)] border-[1px]
                        text-black pl-12 py-2 w-full h-[48px] min-w-0 shadow-md"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="quanticy" className="md:mb-4 mb-3">
                <div className="md:w-[33.66%] float-left">
                  <label className={`${styles.smallText} mb-1 font-bold`}>
                    Cantidad *
                  </label>
                  <div className="mb-3">
                    <p className={`${styles.blockText} mb-3`}>
                      La cantidad de artículos que tienes en stock o están en la capacidad de fabricar.
                    </p>
                  </div>
                </div>
                <div className="md:w-[66.33%] md:mb-0 mb-3 w-full md:px-12 float-left">
                  <div className="flex flex-wrap">
                    <div className="grow md:basis-[25%] md:max-w-[25%] basis-[50%] max-w-[50%]">
                      <div className="relative">
                        <input
                          id="quantity_retail-input"
                          type="number"
                          name="quantity-input"
                          placeholder="1"
                          className="rounded-md border-[rgba(14,14,14,.1803921569)] border-[1px]
                        text-black px-2 py-2 w-full h-[48px] min-w-0 shadow-md"
                          required
                        />
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
);

export default PriceSection;
