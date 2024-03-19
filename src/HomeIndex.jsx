import ServiceIndex from "./components/OurService/ServiceIndex";
import TeamIndex from "./components/Team/TeamIndex";
import React, { useEffect, useState } from 'react';
import TestimonialIndex from "./components/Testimonial/TestimonialIndex";
import ShopIndex from "./components/Shop/ShopIndex";
import Banner from "./components/Banner/Banner";
import HeroIndex from "./components/HeroSection/HeroIndex";
import './scss/HomeIndex.scss';

const HomeIndex = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoading = () => {
    setIsLoading(false)
  }
  useEffect(() => {
    window.addEventListener('load', handleLoading());
    return () => window.removeEventListener('load', handleLoading());
  }, [])

  if (isLoading) {
    return (
      <>
        <div className="page-load">
          <div className="spinner-1">
            <div className="spinner-2">
              <div className="spinner-3">

              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
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
}
export default HomeIndex;