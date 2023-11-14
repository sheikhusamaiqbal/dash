"use client"

import React, { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation'


const SignUp = () => {


    const router = useRouter();

    const handleSubmit = (event) => {
        
        // Perform any necessary form data processing here
        // Then redirect to the "/signin" route
        router.push('/signin');
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };


    return (
        <>


            <div className='w-full min-h-screen items-start    justify-center  bg-[#fafafa]'>
                <div className='flex justify-end py-10 px-20 text-[18px]'>
                  <Link href="/signin" className='cursor-pointer'> <span className='text-[#03A84E] mr-2'>لتسجيل الدخول </span></Link>
                  هل لديك حساب؟ العودة
                </div>

                <div className='flex justify-center '>
                    <div className='w-full'>
                        <div className="bg-gray-50 dark:bg-gray-900">
                            <div className="flex flex-col items-center justify-center px-6 py-8  lg:py-0">


                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight text-right tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            انشاء حساب
                                        </h1>
                                        <form className="space-y-4 md:space-y-4 " action="#">
                                            {/* Input Fields */}


                                            <div className="text-right">
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-[#7D8B85] dark:text-white">الاسم</label>
                                                <input
                                                    type="text"
                                                    name="text"
                                                    id="name"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>

                                            <div className="text-right">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#7D8B85] dark:text-white">الايميل</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder=""
                                                    required
                                                />
                                            </div>




                                            <div className="text-right relative">
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">أدخل كلمة المرور</label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        id="password"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="••••••••"
                                                        required
                                                    />
                                                    <span
                                                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                                        onClick={() => togglePasswordVisibility('password')}
                                                    >
                                                        {showPassword ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" className="fill-current">
                                                            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                                                          </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" className="fill-current">
      <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/>
    </svg>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-right relative">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">أعد إدخال كلمة المرور</label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        id="confirmPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="••••••••"
                        required
                    />
                    <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => togglePasswordVisibility('confirmPassword')}
                    >

                                                        {showConfirmPassword ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" className="fill-current">
                                                            <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                                                          </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" className="fill-current">
      <path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/>
    </svg>
                                                        )}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Accept terms and conditions */}
                                            <div className="text-right">
                                                <div className="flex items-start justify-end">
                                                    <div className="mr-3 text-sm">
                                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                                        أرسل لي تحديثات المنتج والعروض الترويجية الأخرى.<a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                                                            
                                                            </a>
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="terms"
                                                        aria-describedby="terms"
                                                        type="checkbox"
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {/* Confirm Password Field */}
                                            <div className="text-right relative">
                                                {/* Confirm Password field */}
                                            </div>

                                            

                                        </form>

                                        <button
                                            
                                                
                                                className="w-full  bg-[#03A84E] text-[18px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center "
                                            >
                                                <Link href="/signin">
                                                أنشئ حسابك
                                                </Link>
                                                
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp