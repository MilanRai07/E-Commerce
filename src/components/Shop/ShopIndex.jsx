import React, { createContext, useState } from "react";
import '../../scss/ShopIndex.scss';
import ShopCard from "./ShopCard";
import { ProductData } from "../../Data/ProductData";
import { ReactComponent as Left } from '../../assets/left.svg';
import { ReactComponent as Right } from '../../assets/right.svg';

const CartData = createContext();

const ShopIndex = () => {

  const [cardCollection,setCardCollection]=useState([]);
  const LeftScroll = () => {   //click to scroll left
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft - 300;
  }
  const RightScroll = () => {  //click to scroll right
    var slide = document.getElementById("slide");
    slide.scrollLeft = slide.scrollLeft + 300;
  }
  const addToCart = (id) => { //click to add to cart
    console.log(id);
    let selectData=ProductData.filter((ele)=>{
      return ele.id===id;
    }
    )
    setCardCollection((items)=>{
      return [...items,selectData];
    });
    console.log(cardCollection);
  }
  const deleteCart = (id) => {   //click to remove cart
  
  }
  const value = {
    addToCart: addToCart,
    deleteCart: deleteCart
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
        <CartData.Provider value={value}>
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
        </CartData.Provider>
        <div>
          <Right className='right-scroll' onClick={RightScroll} />
        </div>
      </div>
    </>
  )
}
export default ShopIndex;
export { CartData };