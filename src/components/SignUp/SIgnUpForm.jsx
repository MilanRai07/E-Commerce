import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
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

const SIgnUpForm = () => {
    const [logerror, setLogerror] = useState(false);
    const [signed, setSigned] = useState(false);

    const onSubmit = (values, onSubmitProps) => {
        console.log('formData', values);
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setSigned(true)
        }, 2500)
    }

    useEffect(() => {
        if (signed === true) {
            setTimeout(() => {
                setSigned(false)
            }, 1200)
        }
    })
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
                    <p>
                        {
                            signed ?
                                <p>You have been signed</p>
                                :
                                ''
                        }
                    </p>
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