import React, { FC } from 'react';
import { H1 } from '../../atoms/text';
import reactLogo from '../../../assets/react.svg';

const Hero: FC = () => {
  return (
    <div className="p-4 flex justify-content">
      <div className="flex items-center gap-2 w-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-8">
        <img alt="Logo" className="animate-spin h-16 w-16" src={reactLogo} />
        <H1>Welcome to Micro CMS</H1>
      </div>
    </div>
  );
};

export default Hero;
