import React, { useEffect, useState } from 'react'
import RelatedProductCard from './RelatedProductCard';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../../Data/ProductData';

const SelectedProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id } = useParams();
  const DD = ProductData;
  let productId = parseInt(id);
  useEffect(() => {
    window.scrollTo(0, 0);

    let theProduct = DD.find((element) => {
      return element.id === productId
    })
    setData(theProduct)
  }, [])
  setTimeout(() => {
    setIsLoading(false);
  }, 0.000009)

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
                  <p>Nrs. {data.price}</p>
                  <button>Add to cart</button>
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
              <RelatedProductCard />
            </div>
          </div>
      }

    </>
  )
}

export default SelectedProduct;