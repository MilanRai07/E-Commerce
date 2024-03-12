import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProductData } from '../../../Data/ProductData';
import CommonCard from '../../CommonCard/CommonCard';
import useCartController from '../../../CustomHooks/useCartController';

const SelectedProduct = () => {
  const { addCartShow, addInCart, deleteFromCart } = useCartController();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [relatedData, setRelatedData] = useState([]);
  const allData = ProductData;
  const { id } = useParams();
  let productId = parseInt(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    //finding the selected product from the main json data
    let selectedProduct = allData.find((element) => {
      return element.id === productId
    })
    setData(selectedProduct);

    //for related object with same category
    let selectedCategory = selectedProduct.category;
    //filter all the object with same category
    let relatedCategory = allData.filter((element) => {
      return element.category === selectedCategory;
    })
    //filter the selected product from the object for not repeat in related product section
    let relatedProduct = relatedCategory.filter((element) => {
      return element.id !== selectedProduct.id;
    })
    setRelatedData(relatedProduct.slice(1, 4));
  }, [useLocation()])
  //useLocation as dependency,everytime url changes 
  //useEffect run again and re-render the component with diferent data 

  setTimeout(() => {
    setIsLoading(false);
  }, 0.000001);

  return (
    <>
      {
        isLoading ?
          ''
          :
          <div>
            <div className='selected-product__container'>
              <div>
                <div>
                  <img src={data.img} className='selected-product__image'></img>
                </div>
                <div className='selected-product__headings'>
                  <h2>{data.name}</h2>
                  <p>Nrs. {data.price.toLocaleString()}</p>
                  {
                    addCartShow ?
                      <button onClick={() => addInCart(data.id, data.img, data.name, data.price)}>
                        Add to cart
                      </button>
                      :
                      <button onClick={() => deleteFromCart(data.id)}>
                        Remove from Cart
                      </button>
                  }
                  <p>Category: <span>{data.category}</span></p>
                </div>
              </div>
              <div className='selected-product__description'>
                <h2>Description</h2>
                <p>{data.detail}</p>
              </div>
            </div>
            <div className='related-products'>
              <h2>Related Products</h2>
              <div className='card-container'>
                {
                  relatedData.map((element, index) => {
                    const { id, name, img, price } = element;
                    return (
                      <div key={index}>
                        <CommonCard
                          Id={id}
                          Name={name}
                          Img={img}
                          Price={price}
                        />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
      }

    </>
  )
}

export default SelectedProduct;