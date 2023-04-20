import { Hero, RecentlyViewed, Collections, About } from '../sections/landing/index';

const Page = () => (
  <div
    className="bg-[#FFFFFF]"
  >
    <Hero />
    <RecentlyViewed />
    <Collections />
    <div
      className="bg-[rgba(228,237,131,0.36)]"
    >
      <About />
    </div>
  </div>
);

export default Page;
