import '../scss/Banner.scss';
import React from 'react';
import shop1 from '../assets/shop2.jpg';
const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <img src={shop1} className='banner-img' ></img>
        <div className='banner-content'>
          <h3>Become close with us for better experience.</h3>
          <button className='banner-btn'>Sign up to become a member</button>
        </div>
      </div>

    </>
  )
}
export default Banner;