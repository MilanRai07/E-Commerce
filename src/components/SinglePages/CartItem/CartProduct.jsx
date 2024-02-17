import React, { useEffect, useState } from "react";
import { ReactComponent as Close } from '../../../assets/close.svg';
import { ReactComponent as Plus } from '../../../assets/plus.svg';
import { ReactComponent as Minus } from '../../../assets/minus.svg';
const CartProduct = (props) => {
    const { id, name, image, price, quantity, Decrement, Increment, CartManage } = props;

    const quantityControl = (numb) => {   //function that allows quantity to stop at 1 while decrementing 
        if (numb <= 1) {
            return 1
        } else {
            return quantity - 1
        }
    }

    return (
        <>
            <div>
                <Close className="product-remove" onClick={() => CartManage('remove', id)} />
            </div>
            <div className="cart-product-head">
                <img src={image} className="cart-image"></img>
                <p>{name}</p>
            </div>
            <div>
                <p>Nrs. {price.toLocaleString()}</p>
            </div>
            <div>
                <Plus className="plus" onClick={() => Increment(id, { quantity: quantity + 1 })} />
                <p>{quantity}</p>
                <Minus className="minus" onClick={() => Decrement(id, { quantity: quantityControl(quantity) })} />
            </div>
            <div>
                <p>Nrs. {price * quantity.toLocaleString()}</p>
            </div>
        </>
    )
}
export default CartProduct;