import ServiceIndex from "./components/OurService/ServiceIndex";
import TeamIndex from "./components/Team/TeamIndex";
import React, { useEffect, useState } from 'react';
import TestimonialIndex from "./components/Testimonial/TestimonialIndex";
import ShopIndex from "./components/Shop/ShopIndex";
import Banner from "./components/Banner/Banner";
import HeroIndex from "./components/HeroSection/HeroIndex";

const HomeIndex = () => {
  return (
    <>
      <HeroIndex />
      <ServiceIndex />
      <Banner />
      <TeamIndex />
      <TestimonialIndex />
      <ShopIndex />
    </>
  )
}
export default HomeIndex;