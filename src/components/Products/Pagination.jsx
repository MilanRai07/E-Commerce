import React from 'react'

const Pagination = (props) => {
  const { numb, currentPage, changePage } = props;
  return (
    <>{
      numb.map((n, i) => {
        return (
          <p key={i} className={currentPage === n ? 'active-num' : ''}
            onClick={() => changePage(n)}
          >
            {n}
          </p>
        )
      })
    }
    </>
  )
}

export default Pagination;