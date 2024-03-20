import React, { useContext, useEffect } from 'react';
import '../../scss/NavBar.scss';
import { NavLink, Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as HamBurger } from "../../assets/Ham.svg";
import { ReactComponent as Cart } from '../../assets/cart-icon.svg';
import { useState } from 'react';
import HamBurgerMenu from './HamburgerMenu';
import { ParentData } from './NavBarIndex';
import useAddCartContext from '../../CustomHooks/useAddCartContext';

const NavBar = () => {
    const { cart } = useAddCartContext();
    const [showham, setShowHam] = useState(false);  //for showing and not showng hamburger nav menu
    const context = useContext(ParentData); //context api consuming
    const [cartNumber, setCartNumber] = useState(0)
    const { isNavFixed } = context; //destructuring context
    const [listItem, setListItem] = useState([
        { path: '/', name: 'Home' },
        { path: '/service', name: 'Service' },
        { path: '/team', name: 'Team' },
        { path: '/shop', name: 'Shop' },
        { path: '/signup', name: 'Sign up' },
    ])

    //function that returns number of total product in cart 
    useEffect(() => {
        if (cart.length === 0) {
            setCartNumber(0)
        } else if (cart.length === 1) {
            setCartNumber(cart[0].quantity);
        } else {
            let one = cart.reduce((accumulator, currentVal) => {
                return accumulator + currentVal.quantity
            }, 0)
            setCartNumber(one);
        }
    })

    const ToggleHamburger = () => {  //toggle hamburger menu nav
        setShowHam(!showham);
    }
    return (
        <>
            <div className={`navbar-container ${isNavFixed ? 'fixed' : ''}`}>
                <div className="navbar-logo">
                    <Logo className='logo' />
                </div>
                <div>
                    <ul className='navbar-list'>
                        {
                            listItem.map((element, index) => {
                                const { path, name } = element;
                                return (
                                    <li key={index}>
                                        <NavLink to={path}
                                            className={({ isActive }) => isActive ? 'active' : 'navlink'}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                        <div>
                            <Link to='/cartItem'>
                                <Cart className='cart-icon' />
                                <sup className='cart-number'>{cartNumber}</sup>
                            </Link>
                        </div>
                        <HamBurger className='ham-icon' onClick={ToggleHamburger} />
                    </ul>
                </div>
                {showham ?        //toggle hammenu by hamburger icon
                    <HamBurgerMenu ToggleHamburger={ToggleHamburger} listItem={listItem} />
                    :
                    ""
                }
            </div>

            <Outlet />
        </>
    )
}
export default NavBar;