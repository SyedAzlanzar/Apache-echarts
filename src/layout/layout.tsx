import React from 'react'
import SideNavbar from 'src/components/SideNavbar';

function Layout({ children}) {
  return (
    <div className='layout'>
      <div className='children-container'>
        {children}
      </div>
      <SideNavbar  />
    </div>
  );
}

export default Layout;
