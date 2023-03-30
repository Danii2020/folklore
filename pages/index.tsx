import { NavBar } from '../sections/index';
import { Hero, RecentlyViewed, Collections } from '../sections/landing/index';

const Page = () => (
  <div
    className="bg-[#FFFFFF]"
  >
    <NavBar />
    <Hero />
    <RecentlyViewed />
    <Collections />
    {/* <Navbar />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer /> */}
  </div>
);

export default Page;
