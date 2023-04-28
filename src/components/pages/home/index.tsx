import React, { FC } from 'react';
import Navbar from '../../organisms/navbar';
import Hero from '../../organisms/hero';

const Home: FC = () => {
  return (
    <div className="lg:px-48 md:px-24 sm:px-12">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
