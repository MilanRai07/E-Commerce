import React from 'react'
import Chris from '../../assets/chris.jpg';
import '../../scss/SideNavBar.scss';

const SideNavBar = () => {
    return (
        <>
            <div className='product'>
                <h2>Other Products</h2>
                <div className='product-items'>
                    <div>
                        <h3>Fender stratocaster</h3>
                        <p>Nrs. 200000</p>
                    </div>
                    <img src={Chris} className='product-items__image'></img>
                </div>
                <div className='product-items'>
                    <div>
                        <h3>Fender stratocaster</h3>
                        <p>Nrs. 200000</p>
                    </div>
                    <img src={Chris} className='product-items__image'></img>
                </div>
                <div className='product-items'>
                    <div>
                        <h3>Fender stratocaster</h3>
                        <p>Nrs. 200000</p>
                    </div>
                    <img src={Chris} className='product-items__image'></img>
                </div>
                <div className='product-items'>
                    <div>
                        <h3>Fender stratocaster</h3>
                        <p>Nrs. 200000</p>
                    </div>
                    <img src={Chris} className='product-items__image'></img>
                </div>
            </div>
            <div className='category'>
                <h2>Categories</h2>
                <ul>
                    <li>Guitar</li>
                    <li>Drum</li>
                    <li>Processors</li>
                    <li>Others</li>
                </ul>
            </div>
        </>
    )
}

export default SideNavBar;