import styles from '../../styles';

const OptionsSection = () => (
  <section
    id="intro"
    className="pt-8 pb-[10%] text-center bg-white"
  >
    <div className="max-w-[980px] m-auto">
      <div className="md:pl-4 md:pr-4 pl-2 pr-2 float-none relative">
        <div
          className="float-none ml-auto mr-auto w-[83.33%]
          md:pl-4 md:pr-4 pl-2 pr-2"
        >
          <h1
            className={`${styles.heroSubSubtitle} font-medium text-[#222]
            pb-3 mb-8`}
          >
            Únete al mercado creativo donde compradores gastan miles al año comprando directamente a emprendedores como tú.
          </h1>
        </div>
      </div>
      <div
        className="flex mb-8 md:pl-4 md:pr-4 pl-2 pr-2 float-none relative
        md:flex-row flex-col justify-center items-center"
      >
        <div
          className="md:w-[33.33%] w-full md:pl-4 md:pr-4 pl-2 pr-2
          items-center justify-center mb-7"
        >
          <div className="flex px-3 mb-5 items-start justify-center">
            <img
              src="https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Great_Value.svg"
              alt="Muy rentable"
              width={150}
              loading="lazy"
            />
          </div>
          <h2 className={`${styles.subText} font-medium text-center`}>
            Muy rentable
          </h2>
          <p className={`${styles.paragraph} font-normal text-[#888] mb-1`}>
            Publica artículos gratuitamente y solo paga 0.20 USD por cada transacción cuanto tu articulo se venda.
          </p>
          <p className="mb-1">
            <a
              className={`${styles.paragraph} underline`}
              href="#fees"
            >
              Más información
            </a>
          </p>
        </div>
        <div
          className="md:w-[33.33%] w-full md:pl-4 md:pr-4 pl-2 pr-2
          items-center justify-center mb-7"
        >
          <div className="flex px-3 mb-5 items-start justify-center">
            <img
              src="https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Tools.svg"
              alt="Herramientas potentes"
              width={150}
              loading="lazy"
            />
          </div>
          <h2 className={`${styles.subText} font-medium text-center`}>
            Herramientas potentes
          </h2>
          <p className={`${styles.paragraph} font-normal text-[#888] mb-1`}>
            Nuestras herramientas te permiten administrar y promocionar tu negocio fácilmente.
          </p>
          <p className="mb-1">
            <a
              className={`${styles.paragraph} underline`}
              href="#tools"
            >
              Más información
            </a>
          </p>
        </div>
        <div
          className="md:w-[33.33%] w-full md:pl-4 md:pr-4 pl-2 pr-2
          items-center justify-center mb-7"
        >
          <div className="flex px-3 mb-5 items-start justify-center">
            <img
              src="https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Education.svg"
              alt="Ayuda"
              width={150}
              loading="lazy"
            />
          </div>
          <h2 className={`${styles.subText} font-medium text-center`}>
            Ayuda
          </h2>
          <p className={`${styles.paragraph} font-normal text-[#888] mb-1`}>
            Conecta con el equipo de Folklore siempre que necesites ayuda sobre la plataforma y como administrar tu negocio.
          </p>
          <p className="mb-1">
            <a
              className={`${styles.paragraph} underline`}
              href="#support"
            >
              Más información
            </a>
          </p>
        </div>
      </div>
      <div className="pt-7 md:px-4 px-2">
        <div
          className="md:px-6 px-8 p-8 inline-block border-[1px]
          bg-white rounded-[3px] border-[#e1e3df] border-b-[#cbccc9]
          mb-3"
        >
          <div className="md:px-4 px-2 inline-block bg-white -mt-[50%]">
            <img
              src="https://i.etsystatic.com/site-assets/sell-page/Sell_Page_Icon_Congrats2.svg"
              alt="Empieza ahora mismo"
              width={96}
              loading="lazy"
            />
          </div>
          <h4 className={`${styles.subTitle} font-medium mb-4 mt-3 text-[#484848]`}>
            Empieza a vender hoy mismo
          </h4>
          <a
            className={`${styles.subTitle} font-medium text-white rounded-full z-0
            md:px-5 px-4 py-2 text-center bg-black transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg`}
            href="/tu/tienda/onboarding/nombre/crear"
          >
            Abre tu tienda en Folklore
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default OptionsSection;
