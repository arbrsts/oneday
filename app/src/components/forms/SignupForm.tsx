"use client";

import Link from 'next/link'
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { postSignup } from '@/api/auth/signup';
interface Values {
    username: string;
    password: string;
    passwordConfirm: string;
    accept: boolean;
}

interface Errors {
    username?: string;
    password?: string;
    passwordConfirm?: string;
    accept?: string;
}

const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    const body = {username: values.username, password: values.password};
    
    postSignup(body).then(
        res => {
            alert(JSON.stringify(res));
            setSubmitting(false);
        }
    );
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

    if (!values.passwordConfirm) {
        errors.passwordConfirm = required;
    } else if (values.password != values.passwordConfirm) {
        errors.passwordConfirm = 'Password does not match';  
    }

    if (!values.accept) {
        errors.accept = required;
    }

    return errors;
}

const SignupForm = () => {

    return (
        <div className='flex flex-col justify-center'>
            <h1 className="text-center text-gray-800 text-4xl font-serif font-bold leading-normal mb-5">Sign Up</h1>
            <Formik
                className='flex flex-col justify-center'
                initialValues={{ 
                    username: '', 
                    password: '', 
                    passwordConfirm: '', 
                    accept: false 
                }}
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

                    <label htmlFor="passwordConfirm" className='text-base font-sans font-normal leading-normal text-gray-600'>Confirm password</label>
                    {errors.passwordConfirm && touched.passwordConfirm ? <div className='text-sm font-sans font-normal leading-normal text-red-500' >{errors.passwordConfirm}</div> : null}
                    <Field type='password' id='passwordConfirm' name='passwordConfirm' className={'rounded border mb-5 ' + (errors.passwordConfirm && touched.passwordConfirm ? 'border-red-500' : 'border-gray-600')} />

                    {errors.accept && touched.accept ? <div className='text-sm font-sans font-normal leading-normal text-red-500' >{errors.accept}</div> : null}
                    <label className="flex items-center text-gray-600 text-base font-sans font-normal leading-normal mb-7 ">
                        <Field type='checkbox' name='accept' className="mr-2" />
	                    <span>I accept the terms and privacy policy</span>
                    </label>

                    <button type='submit' className='text-xl bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded mb-5' >Create an account</button>
                </Form>)}
            </Formik>
            <div className='flex justify-center'>
                <p className='mr-1 text-gray-600 text-base font-sans font-normal leading-normal'>Already have an account?</p> 
                <Link className='text-[#6CA390]' href='/login'>Login here</Link>
            </div>
        </div>
    )
}

export default SignupForm;