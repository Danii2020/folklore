import styles from '../../styles';

type Props = {
  imageTitle: string;
  imageUrl: string;
}

const PlaceHolderImageBlock = ({ imageTitle, imageUrl }: Props) => (
  <div
    className="max-w-none w-full h-[100%] rounded-[3px] bg-[#faf9f5] border-[1px]
      border-[#e1e3df] relative pb-2 pt-1"
  >
    <div className="bottom-0 left-0 right-0 top-0">
      <div className="relative md:mx-3 mx-2">
        <div className="top-0 w-full h-full text-center pb-4 px-4 pt-2">
          <img
            className="align-middle"
            src={imageUrl}
            alt={imageTitle.toLowerCase()}
          />
          <p className={`${styles.imageBlockText} lg:block hidden mt-2`}>
            {imageTitle}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PlaceHolderImageBlock;
