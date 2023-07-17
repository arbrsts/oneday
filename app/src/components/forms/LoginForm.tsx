"use client";

import Link from 'next/link'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import Auth from '@/util/Auth';
import FormField from './FormField';

interface Values {
    username: string;
    password: string;
}

interface Errors {
    username?: string;
    password?: string;
}

const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {

    Auth.login(values).then(
        res => {
            alert(JSON.stringify(res));
            setSubmitting(false);
        }
    );

}

const validate = (values: Values): Errors => {
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
        <div className='flex flex-col justify-center' >
            <h1 className="text-center text-gray-800 text-4xl font-serif font-bold leading-normal mb-5">Login</h1>
            <Formik
                className='flex flex-col justify-center'
                initialValues={{ username: '', password: '' }}
                validate={validate}
                onSubmit={handleSubmit}
            >{({ errors, touched }) => 
                (<Form className='flex flex-col justify-center'>
                    <FormField
                        type="text"
                        id="username"
                        name="username"
                        label="Username"
                        error={errors.username && touched.username ? errors.username : undefined}
                    />

                    <FormField
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        error={errors.password && touched.password ? errors.password : undefined}
                    />

                    <button type='submit' className='text-xl bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded mb-5' >Login</button>
                </Form>)}
            </Formik>
            <div className='flex justify-center'>
                <p className='mr-1 text-gray-600 text-base font-sans font-normal leading-normal' >Don&apos;t have an account?</p> 
                <Link className='text-[#6CA390]' href='/auth/signup'>Sign up here</Link>
            </div>
        </div>
    )
}

export default LoginForm;