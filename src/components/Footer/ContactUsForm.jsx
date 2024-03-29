import React, { useEffect, useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikController from "../../FormikController/FormikController";
const initialValues = {
    name: '',
    email: '',
    number: '',
    message: ''
}
const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    number: Yup.string().required('phone number is required'),
    message: Yup.string().required('message is required')
})

const ContactUsForm = () => {
    const [sentMessage, setSentMessage] = useState(false);

    const onSubmit = (values, onSubmitProps) => {
        console.log('formData', values);
        console.log('onsubmitprops', onSubmitProps)
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
            setSentMessage(true);
        }, 2500)
    }
    useEffect(() => {
        if (sentMessage === true) {
            setTimeout(() => {
                setSentMessage(false)
            }, 1200)
        }
    })
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {
                    (formik) => (
                        <Form>
                            <div className="form-box">
                                <div className="input-container">
                                    <FormikController
                                        control='input'
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                    />
                                    <FormikController
                                        control='input'
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                    />
                                    <FormikController
                                        control='input'
                                        type='number'
                                        name='number'
                                        placeholder='Number'
                                    />
                                </div>

                                <div className="textbox-container">
                                    <FormikController
                                        control='textarea'
                                        type='textarea'
                                        name='message'
                                        placeholder='Message'
                                    />
                                </div>
                            </div>
                            <div className="button-div">
                                <button type='submit' className="form-button" disabled={!formik.isValid || formik.isSubmitting}>
                                    {
                                        formik.isSubmitting ? 'Submitting...' : 'Submit'
                                    }
                                </button>
                                {sentMessage ?
                                    <p>Your message has been sent!</p>

                                    :
                                    ''
                                }
                            </div>
                        </Form>
                    )
                }
            </Formik>

        </>
    )
}
export default ContactUsForm;