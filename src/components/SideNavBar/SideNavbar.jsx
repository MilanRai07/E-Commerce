import React, { useState } from 'react'
import '../../scss/SideNavBar.scss';
import useNavigateHook from '../../CustomHooks/useNavigateHook';
import { useNavigate } from 'react-router-dom';

const SideNavBar = (props) => {
    const { Navigation } = useNavigateHook();
    const { otherData, category } = props;
    const [categoryList, setCategoryList] = useState(['Guitar', 'Drum', 'Processor', 'Others']);

    //route to products single page
    let path = useNavigate();
    const RouteToCategory = (category) => {
        path(`/category/${category}`)
    }
    return (
        <>
            <div className='sideNav-container'>
                <div className='product'>
                    <h2>Other Products</h2>
                    {
                        otherData.slice(1, 5).map((element, index) => {
                            const { id, img, name, price } = element;
                            return (
                                <div className='product-items' key={index}>
                                    <div>
                                        <h3 onClick={() => Navigation(id, name)}>
                                            {name}
                                        </h3>
                                        <p>Nrs {price.toLocaleString()}</p>
                                    </div>
                                    <img src={img}
                                        alt={name}
                                        className='product-items__image'
                                        onClick={() => Navigation(id, name)}>
                                    </img>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='category'>
                    <h2>Categories</h2>
                    <ul>
                        {
                            categoryList.map((element, index) => {
                                return (
                                    <li key={index}
                                        onClick={() => RouteToCategory(element)}
                                        className={category === element ? 'activeElement' : ''}
                                    >
                                        {element}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNavBar;