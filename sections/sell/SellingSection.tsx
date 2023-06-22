import styles from '../../styles';

const SellingSection = () => (
  <section
    id="selling"
    className="pt-[5%] pb-[10%] text-center bg-white border-t-[1px]
    border-t-[#e1e3df]"
  >
    <div className="max-w-[980px] m-auto">
      <div className="md:px-4 px-2 relative float-none">
        <h1 className={`${styles.heroHeading} font-medium md:mb-8 mb-7`}>
          ¿Qué puedes vender en Folklore?
        </h1>
      </div>
      <div className="md:px-4 px-2 md:mb-8">
        <div className="md:w-[33.33%] w-full md:px-4 px-2 md:mb-10 mb-10 float-left">
          <div className="border-[1px] border-[#e1e3df] bg-white rounded-md overflow-hidden">
            <div className="table">
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/handmade-1-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/handmade-2-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/handmade-3-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/handmade-4-US.jpg"
                alt="Productos hechos a mano"
              />
            </div>
            <h2 className={`${styles.anchorButton} font-medium m-4`}>
              Productos hechos a mano
            </h2>
          </div>
        </div>
        <div className="md:w-[33.33%] w-full md:px-4 px-2 mb-10 float-left">
          <div className="border-[1px] border-[#e1e3df] bg-white rounded-md overflow-hidden">
            <div className="table">
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/supply-2-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/supply-2-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/supply-3-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/supply-4-US.jpg"
                alt="Productos hechos a mano"
              />
            </div>
            <h2 className={`${styles.anchorButton} font-medium m-4`}>
              Productos artesanales
            </h2>
          </div>
        </div>
        <div className="md:w-[33.33%] w-full md:px-4 px-2 md:mb-10 mb-10 float-left">
          <div className="border-[1px] border-[#e1e3df] bg-white rounded-md overflow-hidden">
            <div className="table">
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/vintage-1-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/vintage-2-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/vintage-3-US.jpg"
                alt="Productos hechos a mano"
              />
              <img
                className="overflow-hidden float-left w-[50%]"
                src="https://www.etsy.com/images/sell/items/vintage-4-US.jpg"
                alt="Productos hechos a mano"
              />
            </div>
            <h2 className={`${styles.anchorButton} font-medium m-4`}>
              Productos reciclados
            </h2>
          </div>
        </div>
      </div>
      <div className="md:px-4 px-3 float-none relative">
        <div className="float-none mx-auto md:w-[83.33%] w-full md:px-4 px-3">
          <p className={`${styles.paragraph} font-light text-[#222]`}>
            Folklore es un mercado de millones de personas que se conectan para hacer, vender, y comprar productos únicos. En Folklore puedes vender productos hechos a mano, artesanales y reciclados.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SellingSection;
