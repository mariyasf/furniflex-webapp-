import React, { useState } from 'react';
import logo from '/Images/logo.png'
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className='h-screen'>
            <Helmet>
                <title>
                    Signup
                </title>
            </Helmet>
            <div className="flex">

                <div className="flex-1 flex flex-col justify-center
                ">
                    <div className="bg-[#F5F5F5]
                     p-10 w-[500px] mx-auto">
                        <div className="text-center text-black">
                            <h3 className='text-2xl font-semibold'>Welcome To</h3>
                            <h2 className='text-4xl font-bold'>Furni<span className='text-[#1E99F5]'>Flex</span></h2>
                            <p className="text-[#707070] font-medium">Enter your Credentials to access your account</p>
                        </div>

                        <form className='pt-4 space-y-4'>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <div className="flex-1 border bg-white p-1 px-3 rounded-md">
                                    <label className="block font-normal text-[#707070] font-Barlow text-xs">
                                        <span className="">First name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        placeholder="Enter Your First name"
                                        className="border-none outline-none text-sm text-black"
                                    />
                                </div>

                                <div className="flex-1 border bg-white p-1 px-3 rounded-md">
                                    <label className="block font-normal text-[#707070] font-Barlow text-xs">
                                        <span className="">Last name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        placeholder="Enter Your Last name"
                                        className="border-none outline-none text-sm text-black"
                                    />
                                </div>

                            </div>
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

                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="terms" id="" />
                                <label className="ml-2" htmlFor="terms">Accept our Terms and condition</label>
                            </div>


                            <button className='w-full border-none rounded-lg
                             bg-black text-white py-4'>Signup</button>
                        </form>
                        <div className=' space-y-2'>
                            <p className='text-center'>or</p>
                            <div className='flex flex-col md:flex-row gap-2'>
                                <button className='flex items-center gap-2 border-2 p-4 rounded-lg'>
                                    <FcGoogle /> Sign in with Google</button>
                                <button className='flex items-center gap-2 border-2 p-4 rounded-lg'>
                                    <BsApple /> Sign in with Apple</button>
                            </div>
                            <p className="text-center pt-4">
                                Have an account? Please  <Link to={'/signin'} className=" text-[#1E99F5] font-bold">Sign In</Link>
                            </p>

                        </div>
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

export default Register;