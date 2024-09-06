import React, { useState } from 'react';
import logo from '/Images/logo.png'
import { IoEye, IoEyeOff } from 'react-icons/io5';

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='h-screen'>
            <div className="flex">

                <div className="flex-1 flex flex-col justify-center
                ">
                    <div className="bg-[#F5F5F5]
                     p-10 w-[500px] mx-auto">
                        <h2 className='text-3xl font-Barlow font-medium'>Welcome Back!</h2>
                        <p className="text-[#707070] font-medium text-base font-Barlow">Enter your Credentials to access your account</p>
                        <form className='pt-11 space-y-4'>
                            <div className="border bg-white p-1 px-3 rounded-md">
                                <label className="block font-normal text-[#707070] font-Barlow text-xs">
                                    <span className="">Email address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    className="border-none outline-none text-sm text-black"
                                />
                            </div>

                            <div className="border bg-white p-1 px-3 rounded-md">
                                <label className="block font-normal text-[#707070] font-Barlow text-xs">
                                    <span className="">Password</span>
                                </label>
                                <div className='flex justify-between'>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Your password"
                                        className="border-none outline-none text-sm text-black"
                                    /><span
                                        className="text-lg text-[#707070]"
                                        onClick={() => setShowPass(!showPass)}>
                                        {showPass ? <IoEyeOff /> : <IoEye />}</span>
                                </div>
                            </div>

                            <p className="text-[#1E99F5] text-end text-sm font-medium">Forgot Password</p>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="terms" id="" />
                                <label className="ml-2" htmlFor="terms">Accept our Terms and condition</label>
                            </div>


                            <button className='w-full border-none rounded-lg
                             bg-black text-white py-4'>Sign In</button>
                        </form>
                    </div>
                </div>


                <div className='flex-1 hidden lg:block bg-[url(/Images/banner.png)] 
                 bg-cover bg-no-repeat  h-screen'

                >
                    <div className="flex flex-col  items-center justify-center h-full
                     ">
                        <img src={logo} className='w-20' alt="" />
                        <h2 className='text-4xl py-4  text-white font-bold'>Furni<span className='text-[#1E99F5]'>Flex</span></h2>
                        <p className='text-[#C8C4C4] w-[445px] text-center'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;