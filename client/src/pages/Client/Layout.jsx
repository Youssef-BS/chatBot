import React from 'react';
import NavBar from '../../components/navbar/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="content">
        {children}
      </div>
    </>
  );
};

export default Layout;