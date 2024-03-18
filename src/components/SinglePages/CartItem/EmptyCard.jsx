import React from 'react'
import { ReactComponent as EmptyCart } from '../../../assets/emptyCart.svg';

const EmptyCard = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <EmptyCart />
            <h2>looks like your cart is empty</h2>
            <p>Take your time to roam around and make choice of yours</p>
        </>
    )
}

export default EmptyCard