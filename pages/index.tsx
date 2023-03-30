import React from 'react';
import { NavBar } from '../sections/index';
import { Hero, RecentlyViewed, Collections, About } from '../sections/landing/index';

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
