import '../../scss/HamBurger.scss';
import React from 'react';
import { NavLink } from "react-router-dom";
const HamBurgerMenu = (props) => {
    const { ToggleHamburger, listItem } = props;
    return (
        <>
            <div className="hamburger-container">
                {
                    listItem.map((element, index) => {
                        const { path, name } = element;
                        return (
                            <div key={index}>
                                <NavLink to={path}
                                    className={({ isActive }) => isActive ? 'ham-active' : 'hamburger-navlink'}
                                    onClick={ToggleHamburger}
                                >
                                    {name}
                                </NavLink>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default HamBurgerMenu;