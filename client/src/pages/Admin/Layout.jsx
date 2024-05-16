import React from 'react';
import SideBar from '../../components/siderbar/SideBar';

const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className="content">
        {children}
      </div>
    </>
  );
};

export default Layout;