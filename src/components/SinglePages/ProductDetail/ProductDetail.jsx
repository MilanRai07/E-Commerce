import React, { useState, useEffect } from 'react'
import '../../../scss/ProductDetail.scss';
import SelectedProduct from './SelectedProduct';
import SideNavBar from '../../SideNavBar/SideNavbar';
import { useParams } from 'react-router-dom';
import { ProductData } from '../../../Data/ProductData';

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [relatedData, setRelatedData] = useState([]);
  const [otherData, setOtherData] = useState([]);
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

    //for related object with same category excluding the selected product
    let selectedCategory = selectedProduct.category;

    let excludeSelectededProduct = allData.filter((element) => {
      return element.id !== productId;
    })

    let relatedCategory = excludeSelectededProduct.filter((element) => {
      return element.category === selectedCategory;
    })
  
    setRelatedData(relatedCategory.slice(1, 4));

    //getting otherproducts by fltering selectedProduct and related products
    let array1 = new Set(excludeSelectededProduct);
    let array2 = new Set(relatedCategory);

    const difference = [...array1].filter(
      (element) => !array2.has(element)
    );
    setOtherData(difference)
    setIsLoading(false)
  }, [id])

  return (
    <>
      <div className='product-detail-container'>
        <div className='product-header'>
          <h2>Product Details</h2>
          <p>Get to know more about the choosen product</p>
        </div>
        <div className='product-detail'>
          <div className='selected-product'>
            <SelectedProduct
              data={data}
              relatedData={relatedData}
              isLoading={isLoading} />
          </div>
          <div>
            <SideNavBar otherData={otherData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail;