/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  root: string;
  querySlug: string[];
}

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const BreadCrumbs = ({ root, querySlug }: Props) => (
  <nav>
    <ol className="flex flex-row align-middle">
      <li className="flex flex-row">
        <a href={`/${root}`}>
          <span
            className="hover:border-b border-black"
          >
            {capitalizeFirstLetter(root)}
          </span>
        </a>
      </li>
      {querySlug.map((segment, index) => (
        <li key={index} className="flex flex-row items-center justify-center">
          <span
            className="mx-1 w-[18px] h-[18px]
            items-center justify-center"
          >
            <svg
              className="block overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10,17a1,1,0,0,1-.707-1.707L12.586,12,9.293,8.707a1,1,0,0,1,1.414-1.414L15.414,12l-4.707,4.707A1,1,0,0,1,10,17Z" />
            </svg>
          </span>
          <a
            href={`/${root}/${querySlug.slice(0, index + 1).join('/')}`}
          >
            <span
              className="hover:border-b border-black align-middle"
            >
              {capitalizeFirstLetter(segment)}
            </span>
          </a>
        </li>
      ))}
    </ol>
  </nav>
);

export default BreadCrumbs;
