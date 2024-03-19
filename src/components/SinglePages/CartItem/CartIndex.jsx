import React, { useEffect, useState } from "react";
import useAddCartContext from "../../../CustomHooks/useAddCartContext";
import '../../../scss/Cart.scss';
import CartProduct from "./CartProduct";
import useWindowScroll from "../../../CustomHooks/useWindowScroll";
import EmptyCard from "./EmptyCard";

const CartIndex = () => {
  useWindowScroll();
  const { cart, Decrement, Increment, CartManage } = useAddCartContext();
  const [isCart, setIsCart] = useState(true);
  const [cartTotal, setCartTotal] = useState();
  const [shipping, setShipping] = useState(200);
  
  useEffect(() => {
    const getCartTotal = cart.reduce((accumulator, currentValue) => { //get the total price of all cart
      let { price, quantity } = currentValue;
      accumulator = accumulator + price * quantity;
      return accumulator;
    }, 0)
    setCartTotal(getCartTotal);

    if (cart.length !== 0) {   //show empty cart reminder or not in the cart page
      setIsCart(false)
    } else {
      setIsCart(true)
    }
  }, [cart])
  return (
    <>
      {isCart ?
        <div className="emptyCart-container">
          <EmptyCard />
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
                <p>Nrs. {cartTotal.toLocaleString()}</p>
              </div>
              <div>
                <h4>Shipping</h4>
                <p>Nrs. {shipping}</p>
              </div>
              <div>
                <h4>GrandTotal</h4>
                <p>Nrs. {cartTotal - shipping.toLocaleString()}</p>
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