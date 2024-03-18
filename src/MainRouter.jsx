import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import NavBarIndex from './components/NavBar/NavBarIndex';
import HomeIndex from './HomeIndex';
import ServiceIndex from './components/OurService/ServiceIndex';
import FooterIndex from './components/Footer/FooterIndex';
import CartIndex from './components/SinglePages/CartItem/CartIndex';
import TeamIndex from './components/Team/TeamIndex';
import ShopIndex from './components/Shop/ShopIndex';
import TestimonialIndex from './components/Testimonial/TestimonialIndex';
import ProductDetail from './components/SinglePages/ProductDetail/ProductDetail';
import ProductIndex from './components/Products/ProductIndex';
import SignUpIndex from './components/SignUp/SignUpIndex';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarIndex />}>
          <Route index element={<HomeIndex />} />
          <Route path='/service' element={<ServiceIndex />} />
          <Route path='/team' element={<TeamIndex />} />
          <Route path='/shop' element={<ShopIndex />} />
          <Route path='/testimonial' element={<TestimonialIndex />} />
          <Route path='/cartItem' element={<CartIndex />} />
          <Route path='/product/:id/:name' element={<ProductDetail />} />
          <Route path='/category/:category' element={<ProductIndex />} />
          <Route path='/signup' element={<SignUpIndex />} />
        </Route>
      </Routes>
      <FooterIndex />
    </BrowserRouter>

  )
}

export default MainRouter;
