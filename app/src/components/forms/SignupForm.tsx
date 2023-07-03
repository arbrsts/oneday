"use client";

import Link from 'next/link'
import { Formik, Form, Field, FormikHelpers } from 'formik';
interface Values {
    username: string;
    password: string;
    passwordConfirm: string;
    accept: boolean;
}

const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
        alert(JSON.stringify(values));
        setSubmitting(false);
    }, 400)
}

const SignupForm = () => {

    return (
        <div className='flex flex-col justify-center'>
            <h1 className="text-center text-4xl lg:text-6xl leading-normal tracking-wide font-bold mb-6 text-gray-800">Sign Up</h1>
            <Formik
                className='flex flex-col justify-center'
                initialValues={{ 
                    username: '', 
                    password: '', 
                    passwordConfirm: '', 
                    accept: false 
                }}
                onSubmit={handleSubmit}
            >
                <Form className='flex flex-col justify-center'>
                    <label  htmlFor="username">Username</label>
                    <Field type='text' id='username' name='username' />

                    <label htmlFor="password">Password</label>
                    <Field type='password' id='password' name='password' />

                    <label htmlFor="passwordConfirm">Confirm password</label>
                    <Field type='password' id='passwordConfirm' name='passwordConfirm' />

                    <label className="flex items-center">
                        <Field type='checkbox' name='accept' className="mr-2" />
	                    <span>I accept the terms and privacy policy</span>
                    </label>

                    <button className='text-xl w-350px h-63px bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded' >Create an account</button>
                </Form>
            </Formik>
            <div>
                Already have an account? <Link className='text-[#6CA390]' href='/login'>Login here</Link>
            </div>
        </div>
    )
}

export default SignupForm;