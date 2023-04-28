import React, { FC } from 'react';
import { H1 } from '../../atoms/text';
import reactLogo from '../../../assets/react.svg';

const Hero: FC = () => {
  return (
    <div className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 py-32 my-4">
      <div className="flex items-center justify-center gap-2 w-full ">
        <img alt="Logo" className="animate-spin h-24 w-24" src={reactLogo} />
        <H1>Welcome to Micro CMS Blog Post</H1>
      </div>
    </div>
  );
};

export default Hero;
