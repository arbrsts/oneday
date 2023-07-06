"use client";

import Link from 'next/link'
import { Formik, Form, Field, FormikHelpers } from 'formik';

interface Values {
    username: string;
    password: string;
}

interface Errors {
    username?: string;
    password?: string;
}

const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
        alert(JSON.stringify(values));
        setSubmitting(false);
    }, 400)
}

const validate = (values: Values) => {
    const errors: Errors = {};

    const required = 'Required';

    if (!values.username) {
        errors.username = required;
    }

    if (!values.password) {
        errors.password = required;
    }

    return errors;
}

const LoginForm = () => {

    return (
        <div className='flex flex-col justify-center flex-shrink-0' >
            <h1 className="text-center text-gray-800 text-4xl font-serif font-bold leading-normal mb-5">Login</h1>
            <Formik
                className='flex flex-col justify-center'
                initialValues={{ username: '', password: '' }}
                validate={validate}
                onSubmit={handleSubmit}
            >{({ errors, touched }) => 
                (<Form className='flex flex-col justify-center'>
                    <label  htmlFor="username" className='text-gray-600 text-base font-sans font-normal leading-normal'>Username</label>
                    {errors.username && touched.username ? <div className='text-sm font-sans font-normal leading-normal text-red-500' >{errors.username}</div> : null}
                    <Field type='text' id='username' name='username' className={'rounded border mb-5 ' + (errors.username && touched.username ? 'border-red-500' : 'border-gray-600')} />

                    <label htmlFor="password" className='text-gray-600 text-base font-sans font-normal leading-normal'>Password</label>
                    {errors.password && touched.password ? <div className='text-sm font-sans font-normal leading-normal text-red-500' >{errors.password}</div> : null}
                    <Field type='password' id='password' name='password' className={'rounded border mb-5 ' + (errors.password && touched.password ? 'border-red-500' : 'border-gray-600')} />

                    <button className='text-xl w-350px h-63px bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded mb-5' >Login</button>
                </Form>)}
            </Formik>
            <div className='flex text-center'>
                <p className='mr-1 text-gray-600 text-base font-sans font-normal leading-normal'>Don't have an account?</p> 
                <Link className='text-[#6CA390]' href='/signup'>Sign up here</Link>
            </div>
        </div>
    )
}

export default LoginForm;