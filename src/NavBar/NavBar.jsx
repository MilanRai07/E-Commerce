import React from 'react';
import '../scss/NavBar.scss';
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as HamBurger } from "../assets/Ham.svg";
import { useState } from 'react';
import HamBurgerMenu from './HamburgerMenu';
const NavBar = () => {
    const [showham, setShowHam] = useState(false);  //for showing and not showng hamburger nav menu
    const ToggleHamburger = () => {  //toggle hamburger menu nav
        setShowHam(!showham);
    }
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Logo className='logo' />
                </div>
                <div>
                    <ul className='navbar-list'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Our Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Testimonial
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
                                Contact Us
                            </NavLink>
                        </li>

                        <HamBurger className='ham-icon' onClick={ToggleHamburger} />

                    </ul>
                </div>
            </div>
            {showham ?        //toggle hammenu by hamburger icon
                <HamBurgerMenu /> :
                ""
            }
            <Outlet />
        </>
    )
}
export default NavBar;