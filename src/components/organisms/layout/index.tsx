import React, { FC } from 'react';
import Navbar from '../navbar';
interface LayoutProps {
  children: JSX.Element;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="lg:px-48 md:px-24 sm:px-12">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
