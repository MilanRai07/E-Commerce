import React, { useEffect, useState } from "react";
import useAddCart from "../../../CustomHooks/useAddCart";
import '../../../scss/Cart.scss';
import CartProduct from "./CartProduct";
import { ReactComponent as EmptyCart } from '../../../assets/emptyCart.svg';

const CartIndex = () => {
  const { cart, Decrement, Increment, CartManage } = useAddCart();
  const [cartSum, setCartSum] = useState();
  const [shipping, setShipping] = useState(parseInt(150));
  const [grandTotal, setGrandTotal] = useState();
  const [isCart, setIsCart] = useState(true);

  useEffect(() => {
    const cartTotal = cart.reduce((accumulator, currentVal) => { //function to find the sum of subTotal method in the cart array  
      return accumulator + currentVal.subTotal();
    }, 0)
    setCartSum(cartTotal);
    setGrandTotal(cartTotal - shipping);

    if (cart.length !== 0) {   //show empty cart reminder or not in the cart page
      setIsCart(false)
    } else {
      setIsCart(true)
    }
  })
  return (
    <>
      {isCart ?
        <div className="emptyCart-container">
          <EmptyCart />
          <h2>looks like your cart is empty</h2>
          <p>Take your time to roam around and make choice of yours</p>
        </div>
        :
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
              cart.map((element, index) => {
                const { id, name, image, price, quantity } = element;
                return (
                  <div key={id} className="cart-product">
                    <CartProduct
                      id={id}
                      name={name}
                      image={image}
                      price={price}
                      quantity={quantity}
                      subTotal={element.subTotal()}
                      Decrement={Decrement}
                      Increment={Increment}
                      CartManage={CartManage}
                    />
                  </div>
                )
              })
            }
          </div>
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div className="cart-total-table">
              <div>
                <h4>Subtotal</h4>
                <p>Nrs. {cartSum.toLocaleString()}</p>
              </div>
              <div>
                <h4>Shipping</h4>
                <p>Nrs. {shipping}</p>
              </div>
              <div>
                <h4>GrandTotal</h4>
                <p>Nrs. {grandTotal.toLocaleString()}</p>
              </div>
            </div>
            <div>
              <button className="cart-total-checkout">Proceed to checkout</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default CartIndex;