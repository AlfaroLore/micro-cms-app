import React, { FC } from 'react';
import Navbar from '../../organisms/navbar';
import { H2 } from '../../atoms/text';

const About: FC = () => {
  return (
    <div className="lg:px-48 md:px-24 sm:px-12">
      <Navbar />
      <H2>About Us</H2>
    </div>
  );
};

export default About;
