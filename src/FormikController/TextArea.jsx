import { ErrorMessage, Field } from 'formik';
import React from 'react'
import ErrorText from './ErrorText';
import '../scss/FormikFields.scss';

const TextArea = (props) => {
    const { name, ...rest } = props;
    return (
        <>
            <div className='formik-field'>
                <Field as='textarea' id={name} name={name} {...rest} /><br></br>
                <ErrorMessage name={name} component={ErrorText} />
            </div>
        </>
    )
}
export default TextArea;