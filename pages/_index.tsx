import { NavBar } from '../sections/index';
import { Hero, RecentlyViewed, Collections, About, Footer } from '../sections/landing/index';

const Page = () => (
  <div
    className="bg-[#FFFFFF]"
  >
    <NavBar />
    <Hero />
    <RecentlyViewed />
    <Collections />
    <div
      className="bg-[rgba(228,237,131,0.36)]"
    >
      <About />
    </div>
    <div
      className="bg-[rgba(19,122,132,0.14)]"
    >
      <Footer />
    </div>
  </div>
);

export default Page;
