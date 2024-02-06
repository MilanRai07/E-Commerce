import React from "react";
import useAddCart from "../../../CustomHooks/useAddCart";
import '../../../scss/Cart.scss';
import {ReactComponent as Close} from '../../../assets/close.svg';
const CartItem=()=>{
    const {cart}=useAddCart();
    return(
        <>
           <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-list">
                <div className="cart-heading">
                  <p>Products</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                </div>
               {
                cart.map((element,index)=>{
                  const {id,name,image,price}=element;
                  return(
                    <div key={id} className="cart-product">
                        <Close/>
                        <img src={image} className="cart-image"></img>
                        <p>{name}</p>
                        <input type="number" className="cart-quantity"></input>
                        <p>{price}</p>
                    </div>
                  )
                })
               }
           </div>
           </div>
        </>
    )
}
export default CartItem;