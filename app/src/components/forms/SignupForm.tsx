"use client";

import Link from 'next/link'
import { useState } from "react";

const SignupForm = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className='flex flex-col justify-center'>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
                <h1 className="text-4xl lg:text-6xl leading-normal tracking-wide font-bold mb-6 text-gray-800">Sign Up</h1>
                <label  htmlFor="inputUsername">Username</label>
                <input type='text' id='inputUsername' name='username' />
                <label htmlFor="inputPassword">Password</label>
                <input type='text' id='inputPassword' name='password' />
                <label htmlFor="inputPassword">Confirm Password</label>
                <input type='text' id='confirmPassword' name='passwordConf' />
                <label className="flex items-center">
                    <input type='checkbox' className="mr-2" />
                    <span>I accept the terms and privacy policy</span>
                </label>
                <button className='text-xl w-350px h-63px bg-[#00A870] py-4 px-8 text-white font-serif font-bold rounded' type='submit'>Login</button>
            </form>
            <div>
                Already have an account? <Link className='text-[#6CA390]' href='/login'>Login here</Link>
            </div>
        </div>
    )
}

export default SignupForm;