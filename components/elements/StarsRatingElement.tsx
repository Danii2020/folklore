/* eslint-disable react/require-default-props */
/* eslint-disable no-plusplus */
type Props = {
  numberOfStars: number | undefined;
}

const StarsRatingElement = ({ numberOfStars }: Props) => {
  const stars = [];

  if (numberOfStars !== undefined) {
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(
        <span
          key={i}
          className="w-4 h-4 inline-block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false"><path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z" /></svg>
        </span>,
      );
    }
  }
  return (
    <span
      className="flex flex-row gap-1"
    >
      {stars}
    </span>
  );
};

export default StarsRatingElement;
