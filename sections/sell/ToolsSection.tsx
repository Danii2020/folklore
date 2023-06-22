import styles from '../../styles';

const ToolsSection = () => (
  <section
    id="tools"
    className="bg-white border-[rgba(0,0,0,.1)]
    border-t-[1px] border-t-[#e1e3df] text-center pt-[5%] pb-[10%]
    overflow-x-hidden"
  >
    <div
      className="max-w-[980px] m-auto"
    >
      <h1 className={`${styles.heroHeading} font-medium md:px-4 px-3`}>
        Herramientas sencillas y potentes
      </h1>
      <div className="md:px-4 px-3 items-center justify-center">
        <div className="flex flex-col gap-8 md:px-4 px-3 items-center justify-center">
          <div
            className="flex mt-8 w-full flex-row items-center justify-center"
          >
            <div className="pr-3 align-middle">
              <img
                src="https://www.etsy.com/images/sell/devices.svg"
                alt="Gestiona tu negocio desde cualquier lugar"
                width={110}
                loading="lazy"
              />
            </div>
            <div className="w-full align-middle md:max-w-[50%] max-w-[90%]">
              <h2 className={`${styles.subTitle} font-medium md:mb-3 mb-2 text-left`}>
                Gestiona tu negocio desde cualquier lugar
              </h2>
              <p className={`${styles.anchorButton} text-[#595959] font-normal text-left`}>
                Usa la plataforma para gestionar pedidos, actualizar artículos y responder a tus clientes estés donde estés.
              </p>
            </div>
          </div>
          <div className="flex mt-8 w-full flex-row items-center justify-center">
            <div className="pr-3 align-middle">
              <img
                src="https://www.etsy.com/images/sell/promotion-tools.svg"
                alt="Herramientas de promoción para generar tráfico"
                width={110}
                loading="lazy"
              />
            </div>
            <div className="w-full align-middle md:max-w-[50%] max-w-[90%]">
              <h2 className={`${styles.subTitle} font-medium md:mb-3 mb-2 text-left`}>
                Herramientas de promoción para generar tráfico
              </h2>
              <p className={`${styles.anchorButton} text-[#595959] font-normal text-left`}>
                Promociona tus artículos de manera gratuita para llegar a más compradores.
              </p>
            </div>
          </div>
          <div className="flex mt-8 w-full flex-row items-center justify-center">
            <div className="pr-3 align-middle">
              <img
                src="https://www.etsy.com/images/sell/analytic-tools.svg"
                alt="Acepta pagos sin complicaciones"
                width={110}
                loading="lazy"
              />
            </div>
            <div className="w-full align-middle md:max-w-[50%] max-w-[90%]">
              <h2 className={`${styles.subTitle} font-medium md:mb-3 mb-2 text-left`}>
                Acepta pagos sin complicaciones
              </h2>
              <p className={`${styles.anchorButton} text-[#595959] font-normal text-left`}>
                Administra el procesamientos de pagos para permitir a los compradores pagar del modo que prefieran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ToolsSection;
