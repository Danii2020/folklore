import styles from '../../styles';

const AddToCartButton = () => (
  <button
    type="button"
    className={`${styles.paragraph} flex justify-center
    items-center bg-black rounded-full w-full py-2
    transition duration-300 ease-in-out transform
    hover:scale-105 text-white`}
  >
    Añadir al carrito
  </button>
);

export default AddToCartButton;
