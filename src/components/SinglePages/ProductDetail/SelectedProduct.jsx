import React from 'react'
import CommonCard from '../../CommonCard/CommonCard';
import useCartController from '../../../CustomHooks/useCartController';
import { useNavigate } from 'react-router-dom';

const SelectedProduct = (props) => {
  const { isLoading, data, relatedData } = props;
  const { addCartShow, addInCart, deleteFromCart } = useCartController();

  const path = useNavigate()

  const RouteToCategory = (category) => {
    path(`/category/${category}`)
  }
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
                  <p>Category: <span onClick={() => RouteToCategory(data.category)}>{data.category}</span></p>
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