import Link from 'next/link';
import styles from '../../styles';

const FooterHeroSection = () => (
  <section
    id="footer-hero"
    className="pb-[22%] text-center boder-[#e1e3df]"
  >
    <div className="w-full left-0 lg:top-[30%] top-[45%] absolute">
      <div className="max-w-[980px] m-auto">
        <h1 className={`${styles.sellHeroHeading} font-medium text-white md:mb-4 mb-3`}>
          ¿Empezamos a vender?
        </h1>
        <div className="md:px-4 px-3 float-none relative">
          <div className="md:px-4 px-3 md:mb-4 mb-3 float-none mx-auto md:w-[58.33%] w-full">
            <p className="lg:text-[20px] md:text-[20px] sm:text-[15px] text-[20px] font-light
             text-white"
            >
              Puedes abrir una tienda y empezar a funcionar en minutos
            </p>
          </div>
        </div>
        <Link
          className="lg:text-[20px] md:text-[20px] sm:text-[15px] text-[20px]font-medium text-white rounded-full z-0
            md:px-5 px-4 py-2 text-center bg-black transition duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-lg"
          href="/tu/tienda/onboarding/nombre/crear"
        >
          Abre tu tienda en Folklore
        </Link>
      </div>
    </div>
  </section>
);

export default FooterHeroSection;
