import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import NavBarIndex from './components/NavBar/NavBarIndex';
import HomeIndex from './HomeIndex';
import ServiceIndex from './components/OurService/ServiceIndex';
import FooterIndex from './components/Footer/FooterIndex';


function MainRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBarIndex/>}>
        <Route index element={<HomeIndex/>} />
        <Route path='/service' element={<ServiceIndex/>} />
      </Route>
    </Routes>
    <FooterIndex/>
    </BrowserRouter>

  )
}

export default MainRouter;
