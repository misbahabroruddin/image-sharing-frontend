'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Register() {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center h-screen bg-slate-100'>
      <div className='flex justify-center items-center gap-4'>
        <Image
          src={'./story-set-register.svg'}
          width={700}
          height={700}
          alt='Story Set'
          className='hidden lg:w-[700px] lg:block'
        />
        <div className='w-[300px] sm:w-[380px] md:w-[450px] rounded-lg px-4 py-6 bg-white'>
          <h2 className='py-4 text-center font-bold text-2xl'>
            Welcome to SharingIn
          </h2>
          <form
            action=''
            className='flex flex-col gap-2 md:gap-4 p-2 md:p-4 w-full'
          >
            <div className='flex flex-col md:flex-row gap-2 w-full'>
              <div className='flex flex-col grow-0 gap-1 '>
                <label htmlFor='first_name' className='text-base'>
                  First Name
                </label>
                <input
                  type='text'
                  name='first_name'
                  id='first_name'
                  className='w-full px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                  placeholder='John'
                  autoComplete='false'
                />
              </div>
              <div className='flex flex-col grow-0 gap-1 '>
                <label htmlFor='last_name' className='text-base'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='last_name'
                  id='last_name'
                  className='w-full px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                  placeholder='Doe'
                  autoComplete='false'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='username'>Username</label>
              <input
                type='username'
                name='username'
                id='username'
                className='px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                placeholder='johndoe'
                autoComplete='false'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                className='px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                placeholder='johndoe@mail.id'
                autoComplete='false'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                className='px-3 py-2 outline-none border border-navy border-opacity-10 rounded-sm outline-offset-0 focus:outline focus:outline-darkPurple focus:outline-1'
                placeholder='*****'
                autoComplete='false'
              />
            </div>
            <button
              type='submit'
              className='mt-3 font-bold text-lg text-white bg-blue-500 py-2 rounded-full hover:bg-blue-600'
            >
              Register
            </button>
          </form>
          <p className='text-center text-gray-400'>
            Already have an account?
            <span
              className='ml-2 text-navy font-semibold cursor-pointer hover:underline'
              onClick={() => router.push('login')}
            >
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
