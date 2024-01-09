import React from "react";
import '../scss/ShopIndex.scss';
import ShopCard from "./ShopCard";
import { ProductData } from "../Data/ProductData";
import { ReactComponent as Left } from '../assets/left.svg';
import { ReactComponent as Right } from '../assets/right.svg';
const ShopIndex = () => {

  const LeftScroll = () => {
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft - 500;
  }
  const RightScroll = () => {
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft + 500;
  }
  return (
    <>
      <div className="shop-container">
        <div className='shop-header'>
          <h2>Available in our shop</h2>
          <p>We provide you the best product and services</p>
        </div>
        <div>
          <Left className='left-scroll' onClick={LeftScroll} />
        </div>
        <div className='shop-card-container'>
          <div id='slide' className="shop-slider">
            {
              ProductData.map((ele, index) => {
                const { id, img, name, price } = ele;
                return (
                  <div key={index}>
                    <ShopCard
                      Id={id}
                      Img={img}
                      Name={name}
                      Price={price}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          <Right className='right-scroll' onClick={RightScroll} />
        </div>
      </div>
    </>
  )
}
export default ShopIndex;