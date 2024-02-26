import React from 'react'
import '../scss/FormikFields.scss';

const ErrorText = (props) => {
  return (
    <>
      <div className='error'>{props.children}</div>
    </>
  )
}

export default ErrorText;