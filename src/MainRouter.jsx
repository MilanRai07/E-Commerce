import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBarIndex from './NavBar/NavBarIndex';
import HomeIndex from './HomeIndex';
import ServiceIndex from './OurService/ServiceIndex';
import React from 'react';
import FooterIndex from './Footer/FooterIndex';

function MainRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBarIndex />}>
        <Route index element={<HomeIndex />} />
        <Route path='/service' element={<ServiceIndex />} />
      </Route>
    </Routes>
    <FooterIndex/>
    </BrowserRouter>

  )
}

export default MainRouter;
