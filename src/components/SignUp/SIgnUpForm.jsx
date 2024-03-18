import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import FormikController from "../../FormikController/FormikController";

const initialValues = {
    fullname: '',
    youremail: '',
    password: ''
}
const validationSchema = Yup.object({
    fullname: Yup.string().required('name is required'),
    youremail: Yup.string().email('invalid email').required('email is required'),
    password: Yup.string().required('password is required')
})
const onSubmit = (values, onSubmitProps) => {
    console.log('formData', values);
    setTimeout(() => {
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        console.log('you are signed up')
    }, 2500)
}
const SIgnUpForm = () => {
    const [logerror, setLogerror] = useState(false);
    return (
        <>
            <div className='form'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {
                        (formik) => (
                            <Form className='form-items'>
                                <FormikController
                                    control='input'
                                    type='text'
                                    name='fullname'
                                    placeholder='Full Name'
                                    autoComplete="off"
                                />
                                <FormikController
                                    control='input'
                                    type='email'
                                    name='youremail'
                                    placeholder='Email'
                                    autoComplete="off"
                                />
                                <FormikController
                                    control='input'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    autoComplete="off"
                                />
                                <button type='submit' className="form-button" disabled={!formik.isValid || formik.isSubmitting}>
                                    {
                                        formik.isSubmitting ? 'Submitting...' : 'Sign Up'
                                    }
                                </button>
                            </Form>
                        )
                    }
                </Formik>
                <div>
                    <p>already have an account?
                        <span
                            onMouseEnter={() => setLogerror(true)}
                            onMouseLeave={() => setLogerror(false)}
                        >
                            log in
                        </span>
                    </p>
                    {
                        logerror ?
                            <div>
                                <p>Login feature is not available at the moment</p>
                            </div>
                            :
                            ''
                    }
                </div>

            </div>
        </>
    )
}

export default SIgnUpForm;