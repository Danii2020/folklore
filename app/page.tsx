import { NavBar } from '../sections/index';
import { Hero } from '../sections/landing/index';

const Page = () => (
  <div
    className="bg-[#F6F6F6] overflow-hidden"
  >
    <NavBar />
    <Hero />
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
