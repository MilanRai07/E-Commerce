import { ErrorMessage, Field } from 'formik';
import React from 'react'
import ErrorText from './ErrorText';
import '../scss/FormikFields.scss';

const Input = (props) => {
  const { name, ...rest } = props;
  return (
    <>
      <div className='formik-field'>
        <Field id={name} name={name} {...rest}></Field>
        <ErrorMessage name={name} component={ErrorText}></ErrorMessage>
      </div>
    </>
  )
}

export default Input