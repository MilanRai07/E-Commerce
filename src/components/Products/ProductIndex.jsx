import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProductData } from '../../Data/ProductData';
import '../../scss/ProductIndex.scss';
import SideNavBar from '../SideNavBar/SideNavbar';
import CommonCard from '../CommonCard/CommonCard';
import Pagination from './Pagination';

const ProductIndex = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Data, setData] = useState();
  const [otherData, setOtherData] = useState();
  const [totalPage, setTotalPage] = useState();
  const [numb, setNumb] = useState([1, 2])
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  window.scrollTo(0, 0)

  //changes the current page to one once category from useparam is changed
  useEffect(() => {
    setCurrentPage(1);
  }, [category])

  useEffect(() => {
    //fetch the data and slice it according to number of items in one page
    const fetchItems = (recordsPerPage) => {
      //made category form parameter with first letter small to match the catgeory in data
      const cat = `${category.charAt(0).toLowerCase()}${category.slice(1)}`

      const getData = ProductData.filter((element) => {
        return element.category === cat;
      })
      const otherData = ProductData.filter((element) => {
        return element.category !== cat;
      })
      const LastIndex = currentPage * recordsPerPage;
      const firstIndex = LastIndex - recordsPerPage;
      const records = getData.slice(firstIndex, LastIndex);
      setData(records);
      setOtherData(otherData);
      const nPages = Math.ceil(getData.length / recordsPerPage);
      const numbers = [...Array(nPages + 1).keys()].slice(1);
      setNumb(numbers)
      setTotalPage(nPages)
    }
    fetchItems(recordsPerPage)
    setIsLoading(false)
  }, [category, currentPage]) //re render when the category and current page is changed

  //for previous items change
  const prev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  //for next items change
  const next = () => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  //change the page by clicking the page numbers
  const changePage = (id) => {
    setCurrentPage(id)
  }
  return (
    <>
      {isLoading ?
        ''
        :
        <div className='product-container'>
          <div className='product-container__header'>
            <h2>{category}</h2>
            <p>Pick Your Favourite {category}</p>
          </div>
          <div>
            <div className='navigation topNavigation'>
              <button onClick={prev}>Prev</button>
              <div className='navigation-number'>
                <Pagination numb={numb} currentPage={currentPage} changePage={changePage} />
              </div>
              <button onClick={next}>Next</button>
            </div>
            <div className='product-container__body'>
              <div className='product-container__products'>
                {
                  Data.map((element) => {
                    const { id, img, name, price } = element;
                    return (
                      <div key={id}>
                        <CommonCard
                          Id={id}
                          Img={img}
                          Name={name}
                          Price={price}
                        />
                      </div>
                    )
                  })
                }
              </div>
              <div className='product-container__sideNav'>
                <SideNavBar otherData={otherData} category={category} />
              </div>
            </div>
          </div>
        </div>
      }
      <div className='navigation bottomPage' >
        <button onClick={prev}>Prev</button>
        <div className='navigation-number'>
          <Pagination numb={numb} currentPage={currentPage} changePage={changePage} />
        </div>
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}

export default ProductIndex;