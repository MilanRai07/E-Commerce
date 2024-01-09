import Banner from "./Banner/Banner";
import EnrollIndex from "./EnrollSection/EnrollIndex";
import ServiceIndex from "./OurService/ServiceIndex";
import TeamIndex from "./Team/TeamIndex";
import React from 'react';
import TestimonialIndex from "./Testimonial/TestimonialIndex";


const HomeIndex = () => {
  return (
    <>
      <EnrollIndex />
      <ServiceIndex />
      <Banner />
      <TeamIndex />
      <TestimonialIndex/>
    </>
  )
}
export default HomeIndex;