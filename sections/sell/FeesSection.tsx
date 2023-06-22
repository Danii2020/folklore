/* eslint-disable import/no-unresolved */
import styles from '../../styles';
import FeeVector from '../../public/fee';

const FeesSection = () => (
  <section
    id="fees"
    className="bg-[rgba(19,122,132,0.14)] border-[rgba(0,0,0,.1)]
    border-t-[1px] border-t-[#e1e3df] text-center pt-[5%] pb-[10%]"
  >
    <div
      className="max-w-[980px] m-auto"
    >
      <h1 className={`${styles.heroHeading} font-medium md:mb-8 mb-6`}>
        Simple, transparente, seguro
      </h1>
      <div className="md:my-8 my-6 text-center">
        <div
          className="md:p-3 p-2 border-t-[1px] border-b-[1px]
          border-t-[#373737] border-b-[#373737] inline-block
          border-[#222]"
        >
          <div className="md:p-3 p-2 inline-block">
            <h2 className={`${styles.subTitle} font-normal md:mb-2 mb-1`}>
              <span className="tick md:mx-3 mx-2 text-[12px]" />
              Sin tarifas mensuales
            </h2>
          </div>
          <div className="md:p-3 p-2 inline-block">
            <h2 className={`${styles.subTitle} font-normal md:mb-2 mb-1`}>
              <span className="tick md:mx-3 mx-2 text-[12px]" />
              Depósitos automáticos
            </h2>
          </div>
        </div>
      </div>
      <div
        className="flex md:mb-8 mb-7 text-center justify-center"
      >
        <div className="max-w-[700px]">
          <div className="flex md:p-5 p-4 items-center justify-center">
            <div className="md:mr-5 mr-4">
              <span className="md:p-3 p-2 rounded-full inline-block bg-white">
                <span className="w-[36px] h-[36px] inline-block align-middle text-[24px]">
                  <FeeVector />
                </span>
              </span>
            </div>
            <div className="text-left">
              <h2 className={`${styles.subTitle} font-medium md:mb-2 mb-1`}>
                USD 0.20 de comisión por cada artículo vendido en Folklore
              </h2>
              <p className={`${styles.paragraph} font-light`}>
                Tus publicaciones siempre estarán activas de manera gratuita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeesSection;
