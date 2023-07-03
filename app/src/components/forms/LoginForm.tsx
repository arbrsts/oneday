"use client";

import Link from 'next/link'
import { Formik, Form, Field, FormikHelpers } from 'formik';

interface Values {
    username: string;
    password: string;
}

const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
        alert(JSON.stringify(values));
        setSubmitting(false);
    }, 400)
}

const LoginForm = () => {

    return (
        <div className='flex flex-col justify-center'>
            <h1 className="text-center text-4xl lg:text-6xl leading-normal tracking-wide font-bold mb-6 text-gray-800">Login</h1>
            <Formik
                className='flex flex-col justify-center'
                initialValues={{ username: '', password: '' }}
                onSubmit={handleSubmit}
            >
                <Form className='flex flex-col justify-center'>
                    <label  htmlFor="username">Username</label>
                    <Field type='text' id='username' name='username' />

                    <label htmlFor="password">Password</label>
                    <Field type='password' id='password' name='password' />

                    <button className='text-xl w-350px h-63px bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded' >Login</button>
                </Form>
            </Formik>
            <div>
                Don't have an account? <Link className='text-[#6CA390]' href='/signup'>Sign up here</Link>
            </div>
        </div>
    )
}

export default LoginForm;