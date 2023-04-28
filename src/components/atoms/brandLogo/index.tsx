import React, { FC } from 'react';
import reactLogo from './assets/react.svg';

interface BrandLogoProps {
  classes?: string;
}

const BrandLogo: FC<BrandLogoProps> = (props) => {
  return <img alt="Logo" {...props} src={reactLogo} />;
};

export default BrandLogo;
