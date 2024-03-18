import React, { useEffect, useState } from "react";
import '../../scss/ShopIndex.scss';
import ShopCard from "./ShopCard";
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Right } from '../../assets/right.svg';
import useProductContext from "../../CustomHooks/useProductContext";

const ShopIndex = () => {
  window.scrollTo(0, 0);
  const { newProducts } = useProductContext();
  const LeftScroll = () => {   //click to scroll left
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft - 300;
  }
  const RightScroll = () => {  //click to scroll right
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft + 300;
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
              newProducts.map((element, index) => {
                const { id, img, name, price } = element;
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
