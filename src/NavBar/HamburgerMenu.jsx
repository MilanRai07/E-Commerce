import '../scss/HamBurger.scss';
import React from 'react';
import { NavLink } from "react-router-dom";
const HamBurgerMenu = () => {
    return (
        <>
            <div className="hamburger-container">
                <div>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Our Services
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Team
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Testimonial
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Shop
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/service' className={({ isActive }) => (isActive ? 'ham-active' : 'hamburger-navlink')}>
                        Contact Us
                    </NavLink>
                </div>

            </div>
        </>
    )
}
export default HamBurgerMenu;