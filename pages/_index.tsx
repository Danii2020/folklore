import { NavBar } from '../sections/index';
import { Hero, RecentlyViewed } from '../sections/landing/index';

const Page = () => (
  <div
    className="bg-[#FFFFFF] overflow-hidden"
  >
    <NavBar />
    <Hero />
    <RecentlyViewed />
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
