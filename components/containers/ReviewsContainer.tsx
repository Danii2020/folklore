import Image from 'next/image';
import Link from 'next/link';
import { StarsRatingElement } from '../elements/index';
import styles from '../../styles';

type Review = {
  numberOfStars: number,
  comment: string,
  userImgUrl: string,
  userName: string,
  publishDate: string,
}

type Props = {
  reviewType: Review
}

const ReviewsContainer = ({ reviewType }:Props) => (
  <div
    className="flex flex-col p-1 my-3 text-left"
  >
    <StarsRatingElement
      numberOfStars={reviewType.numberOfStars}
    />
    <div className="mt-2">
      <p
        className={`${styles.paragraph}`}
      >
        {reviewType.comment}
      </p>
    </div>
    <div
      className="flex flex-row justify-start items-center gap-2
      mt-1"
    >
      <Image
        className="rounded-full items-center border border-[#ededed]"
        width="30"
        height="30"
        src={reviewType.userImgUrl || ''}
        alt={reviewType.userName || 'Foto del usuario'}
      />
      <Link
        className={`${styles.smallText} text-[#767676]
        border-b border-[#767676]`}
        href={`/usuarios/perfil/${reviewType.userName}`}
      >
        {reviewType.userName}
      </Link>
      <small className="px-1">&bull;</small>
      <p
        className={`${styles.smallText} text-[#767676]`}
      >
        {reviewType.publishDate}
      </p>
    </div>
  </div>
);

export default ReviewsContainer;
