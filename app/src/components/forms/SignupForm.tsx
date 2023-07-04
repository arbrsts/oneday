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
        <div className='flex flex-col justify-center flex-shrink-0'>
            <h1 className="text-center text-gray-800 text-4xl font-serif font-bold leading-normal mb-5">Sign Up</h1>
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
                    <label  htmlFor="username" className='text-gray-600 text-base font-sans font-normal leading-normal'>Username</label>
                    <Field type='text' id='username' name='username' className='rounded border border-gray-600 mb-5' />

                    <label htmlFor="password" className='text-gray-600 text-base font-sans font-normal leading-normal'>Password</label>
                    <Field type='password' id='password' name='password' className='rounded border border-gray-600 mb-5' />

                    <label htmlFor="passwordConfirm" className='text-gray-600 text-base font-sans font-normal leading-normal'>Confirm password</label>
                    <Field type='password' id='passwordConfirm' name='passwordConfirm' className='rounded border border-gray-600 mb-5' />

                    <label className="flex items-center text-gray-600 text-base font-sans font-normal leading-normal mb-7">
                        <Field type='checkbox' name='accept' className="mr-2" />
	                    <span>I accept the terms and privacy policy</span>
                    </label>

                    <button className='text-xl w-350px h-63px bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded mb-5' >Create an account</button>
                </Form>
            </Formik>
            <div className='flex items-center'>
                <p className='mr-1 text-gray-600 text-base font-sans font-normal leading-normal'>Already have an account?</p> 
                <Link className='text-[#6CA390]' href='/login'>Login here</Link>
            </div>
        </div>
    )
}

export default SignupForm;