import NavBar from "./NavBar";
import React, { createContext, useEffect, useState } from 'react';
const ParentData = createContext();
const NavBarIndex = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  const handleScroll = () => {           //function that makes sure wether to show
    const scrollPosition = window.scrollY; //navbar at top fixed after 350px of scroll down
    const triggerPosition = 380;
    setIsNavFixed(scrollPosition > triggerPosition);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  //functioncall
    return () => {
      window.removeEventListener('scroll', handleScroll);  //cleanup
    };
  }, [])
  const value = {
    isNavFixed: isNavFixed,
  }
  return (
    <>
      <ParentData.Provider value={value}>
        <NavBar />
      </ParentData.Provider>
    </>
  )
}
export default NavBarIndex;
export { ParentData };