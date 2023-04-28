import React, { FC } from 'react';
import Navbar from '../../organisms/navbar';
import Hero from '../../organisms/hero';

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
