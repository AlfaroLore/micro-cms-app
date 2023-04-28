import React, { FC } from 'react';
import BrandLogo from '../../atoms/brandLogo';
import SearchBar from '../../molecules/searchBar';
import PrimaryNavigation from '../../molecules/primaryNavigation';

const Navbar: FC = () => {
  return (
    <div className="flex justify-between p-1 items-center">
      <BrandLogo />
      <PrimaryNavigation />
      <SearchBar />
    </div>
  );
};

export default Navbar;
