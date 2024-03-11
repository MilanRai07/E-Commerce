import React from 'react'
import '../../../scss/ProductDetail.scss';
import SelectedProduct from './SelectedProduct';
import SubProduct from './SubProduct';
const ProductDetail = () => {
  return (
    <>
      <div className='product-detail-container'>
        <div className='product-header'>
          <h2>Product Details</h2>
          <p>Get to know more about the choosen product</p>
        </div>
        <div className='product-detail'>
          <div className='selected-product'>
            <SelectedProduct />
          </div>
          <div className='sub-product'>
            <SubProduct />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;