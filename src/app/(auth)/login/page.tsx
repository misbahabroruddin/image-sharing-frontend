'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Login() {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100'>
      <div className='flex flex-col md:flex-row justify-center  items-center gap-4 p-4'>
        <Image
          src={'./story-set-login.svg'}
          width={700}
          height={700}
          alt='Story Set'
          className='hidden lg:w-[700px] lg:block'
        />
        <div className='w-[300px] sm:w-[380px] md:w-[450px] rounded-lg px-4 py-6 bg-white'>
          <h2 className='text-center font-bold text-2xl'>
            Log in to your account
          </h2>
          <form action='' className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='usernameOrEmail' className='text-base'>
                Username/Email
              </label>
              <input
                type='text'
                name='usernameOrEmail'
                id='usernameOrEmail'
                className='px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                placeholder='Insert username or email'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                className='px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                placeholder='******'
                required
              />
            </div>
            <button
              type='submit'
              className='mt-3 font-bold text-lg text-white bg-blue-500 py-2 rounded-full hover:bg-blue-600'
            >
              Login
            </button>
          </form>
          <p className='text-center text-gray-400'>
            New to SharingIn?
            <span
              className='ml-2 text-navy font-semibold cursor-pointer hover:underline'
              onClick={() => router.push('register')}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
