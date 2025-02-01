import React from 'react';
import { Link } from 'react-router-dom';
import {FaFacebook, FaGoogle} from 'react-icons/fa';
const Login = () => {
    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
           <div className='w-[350px] text-[#ffffff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold text-center'>Welcome to Book-Land</h2>
                    <p className='text-sm mb-3 font-medium'>Please Sign In your account</p>

                    <form>
                        

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email' placeholder='Email' required className='p-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' />
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' placeholder='Password' required className='p-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md' />
                        </div>

                        <button type='submit' className='w-full bg-slate-800 hover:shadow-blue-300/50 hover:shadow-lg text-white px-7 py-2 mb-3 rounded-md'>Sign In</button>
                    
                       
                         <div className='flex justify-center items-center gap-3 mb-3'>
                            <p>Don't Have an account ? <Link className='font-bold' to="/register">Sign Up</Link></p>
                        </div>

                        <div className='w-full flex justify-center items-center mb-3'>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center' >
                            <span className='pb-1'>Or</span>
                            </div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>

                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaGoogle /></span>
                            </div>

                            <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                                <span><FaFacebook /></span>
                            </div>
                        </div>
                     
                           
                        
                    </form>
                </div>
           </div>
        </div>
    );
};

export default Login;