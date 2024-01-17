import NavBar from "./NavBar";
import React, { createContext, useEffect, useState } from 'react';
const ParentData=createContext();
const NavBarIndex = () => {
  const [isNavFixed,setIsNavFixed]=useState(false);
  const handleScroll=()=>{
    const scrollPosition=window.scrollY;
    const triggerPosition=450;
    setIsNavFixed(scrollPosition>triggerPosition);
  }
  useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  },[])
  const value={
    isNavFixed:isNavFixed,
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
export {ParentData};