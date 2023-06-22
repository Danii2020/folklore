import styles from '../../styles';

const SupportSection = () => (
  <section
    id="support"
    className="border-t-[1px] border-t-[#e1e3df] pt-[5%] pb-[10%]"
  >
    <div className="max-w-[980px] m-auto">
      <div className="md:mb-8 mb-7 md:px-4 px-3 relative float-none">
        <div
          className="md:px-4 px-3 text-center float-none mx-auto
          md:w-[60.67%] w-full"
        >
          <h1 className={`${styles.heroHeading} font-medium`}>
            Ayuda cuando lo necesites
          </h1>
          <p className={`${styles.anchorButton} font-light text-[#222]`}>
            Estamos comprometidos a ayudar a todos nuestros vendedores a potenciar su negocio
          </p>
        </div>
      </div>
      <div className="md:px-4 px-3 relative">
        <div className="md:px-4 px-3 w-full">
          <div className="flex flex-row md:mt-8 mt-7 items-center justify-center">
            <div className="pr-3 align-middle">
              <img
                src="https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Chat2.svg"
                alt="Habla con nosotros"
                width={110}
                loading="lazy"
              />
            </div>
            <div className="w-full align-middle md:max-w-[50%]">
              <h2 className={`${styles.subTitle} font-medium text-left`}>
                Habla con nosotros
              </h2>
              <p className={`${styles.anchorButton} text-[#222222] text-left`}>
                Ponte en contacto con nuestro equipo de soporte a través de correo electrónico o si quieres puedes escribirnos en nuestras redes sociales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SupportSection;
