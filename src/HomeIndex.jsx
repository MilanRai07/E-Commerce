import Banner from "./Banner/Banner";
import EnrollIndex from "./EnrollSection/EnrollIndex";
import ServiceIndex from "./OurService/ServiceIndex";
import TeamIndex from "./Team/TeamIndex";
import React from 'react';
import TestimonialIndex from "./Testimonial/TestimonialIndex";
import ShopIndex from "./Shop/ShopIndex";


const HomeIndex = () => {
  return (
    <>
      <EnrollIndex />
      <ServiceIndex />
      <Banner />
      <TeamIndex />
      <TestimonialIndex/>
      <ShopIndex/>
    </>
  )
}
export default HomeIndex;