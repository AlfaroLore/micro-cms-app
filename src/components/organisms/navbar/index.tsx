import React, { FC } from 'react';
import BrandLogo from '../../atoms/brandLogo';
import SearchBar from '../../molecules/searchBar';
import PrimaryNavigation from '../../molecules/primaryNavigation';

const Navbar: FC = () => {
  return (
    <div className="flex justify-between p-1 items-center flex-wrap md:flex-nowrap lg:flex-nowrap">
      <div className="flex gap-10 items-end">
        <BrandLogo />
        <PrimaryNavigation />
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
