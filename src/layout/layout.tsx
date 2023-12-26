import React, { useLayoutEffect, useState } from 'react'
import SideNavbar from 'src/components/SideNavbar';
import { IoMenu } from "react-icons/io5";
import MobileNav from 'src/components/MovileNav';


function Layout({ children}) {
  const [size, setSize] = useState(0);
  const [open,setOpen]=useState<boolean>(false)

  const menuHandler = ()=>{
    setOpen((prev)=>!prev);
  } 


  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);


  return (
    <div className='layout' 
    style={{position:size<=1024? "relative":'unset'}}
    >
      <div className='children-container' style={{width:size<=1024? "100%":'80%'}} >
        {children}
      </div>
      {size >= 1024 ? <SideNavbar  />:
     <div>
     <IoMenu size={30} style={{padding:3}} onClick={menuHandler} />
      {open && 
        <MobileNav />
      }
     </div>}
    </div>
  );
}

export default Layout;
