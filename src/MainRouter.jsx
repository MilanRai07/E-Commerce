import { Routes, Route } from 'react-router-dom';
import NavBarIndex from './NavBar/NavBarIndex';
import HomeIndex from './HomeIndex';
import ServiceIndex from './OurService/ServiceIndex';
import React from 'react';

function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<NavBarIndex />}>
        <Route index element={<HomeIndex />} />
        <Route path='/service' element={<ServiceIndex />} />
      </Route>
    </Routes>

  )
}

export default MainRouter;
