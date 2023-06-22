/* eslint-disable import/no-unresolved */

import Link from 'next/link';
import styles from '../../styles';

const About = () => (
  <section
    className={`${styles.xPaddings} flex md:mt-8 mt-5 py-2
    max-w-[1400px] w-full m-auto justify-center items-center`}
  >
    <div
      className="flex flex-col justify-center items-center
      py-3"
    >
      <h2
        className={`${styles.heroSubtitle} text-center mb-6`}
      >
        ¿Qué es Folklore?
      </h2>
      <div
        className="flex md:flex-row flex-col text-left
        pt-3 mb-4"
      >
        <div
          className="flex flex-col grow shrink basis-0 mb-0"
        >
          <h3
            className={`${styles.heroSubSubtitle} md:text-left text-center`}
          >
            Una plataforma con impacto social
          </h3>
          <p
            className={`${styles.paragraph} md:text-left text-center inline`}
          >
            Folklore es una plataforma enfocada en causar un impacto significativo
            en la sociedad ecuatoriana dándoles la oportunidad a emprendedores
            independientes de vender sus productos a un público de millones de personas.
          </p>
        </div>
        <div
          className="flex flex-col grow shrink basis-0
          md:mx-12 md:mt-0 mt-10 mb-10"
        >
          <h3
            className={`${styles.heroSubSubtitle} md:text-left text-center`}
          >
            Enfocada totalmente en las personas
          </h3>
          <p
            className={`${styles.paragraph} md:text-left text-center inline`}
          >
            Detrás de cada producto que se vende en Folklore hay una persona con
            sueños e ilusiones de salir adelante. Es por eso que nosotros nos preocupamos
            por que la experiencia de los vendedores y compradores sea la mejor posible.
          </p>
        </div>
        <div
          className="flex flex-col grow shrink basis-0 mb-0"
        >
          <h3
            className={`${styles.heroSubSubtitle} md:text-left text-center`}
          >
            Y en ayudar al medio ambiente
          </h3>
          <p
            className={`${styles.paragraph} md:text-left text-center inline`}
          >
            Folklore alienta a sus vendedores a fabricar productos con recursos
            100% reciclables, y recomienda a los compradores ahorrarse dinero comprando
            estos hermosos productos.
          </p>
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center
        py-2 my-2"
      >
        <h4
          className={`${styles.subTitle} font-medium text-center mb-3`}
        >
          ¿Alguna pregunta?
        </h4>
        <Link
          className="items-center rounded-full border-[2.5px]
          border-[#373434] p-3 font-normal text-[16px]
          transition duration-300 ease-in-out
          transform hover:scale-103 hover:shadow-lg"
          href="/ayuda"
        >
          Ir al centro de ayuda
        </Link>
      </div>
    </div>
  </section>
);

export default About;
