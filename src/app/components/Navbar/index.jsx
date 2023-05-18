import React from "react";
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className='bg-gray-800 font-sans font-semibold fixed left-0 right-0 w-screen z-50'>
                <div className='max-w-screen mx-auto py-3 px-10'>
                    <div className='flex justify-between'>
                        <div className='flex items-center space-x-3'>
                            {/* Logo */}
                            <div className='mr-3'>
                            
                                <a className='flex items-center space-x-1' href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className="w-4 h-auto" viewBox="0 0 24 24" id="clothes"><path d="m14.43 3-.29.49a2.5 2.5 0 0 1-4.29 0L9.57 3H6.76L2 5.38V11h4v10h12V11h4V5.38L17.24 3Z" fill="#595bd4" className="color000000 svgShape"></path></svg>
                                    <span className='font-bold logo'>Agaue</span>
                                </a>
                            </div>
                            {/* primary button */}
                            <div className='hidden md:flex items-center space-x-3 '>
                                <Link className='primary-navbar-btn hover:text-gray-500 transition duration-400' href="/">Home</Link>
                                <Link className='primary-navbar-btn hover:text-gray-500 transition duration-400' href="/products">Products</Link>
                                <Link className='primary-navbar-btn hover:text-gray-500 transition duration-400' href="/faq">FAQ</Link>
                            </div>
                        </div>
                        {/* secodary button */}
                        <div className='flex items-end space-x-4'>
                          <a className='flex items-center space-x-2 p-1.5 shadow-md bg-gray-700 text-white rounded hover:bg-indigo-300 hover:text-black transition duration-400' href="#">
                            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="User"><path fill="#595bd4" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3-12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7a7.489 7.489 0 0 1 6-3 7.489 7.489 0 0 1 6 3 7.489 7.489 0 0 1-6 3 7.489 7.489 0 0 1-6-3Z" clip-rule="evenodd" className="color000000 svgShape"></path></svg>
                              <span>Login</span>
                          </a>
                          <a href="#" className="flex items-center space-x-2 p-1.5 text-white hover:text-gray-500 transition duration-400">
                              <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Basket"><path fill="#595bd4" fill-rule="evenodd" d="M9.293 6.172a1 1 0 1 1 1.414 1.414L7.293 11h9.414l-3.414-3.414a1 1 0 0 1 1.414-1.414l4.243 4.242c.164.165.26.372.285.586h1.545a1 1 0 0 1 .98 1.196l-2.6 8a1 1 0 0 1-.98.804H5.82a1 1 0 0 1-.98-.804l-2.6-8A1 1 0 0 1 3.22 11h1.545a.996.996 0 0 1 .285-.586l4.243-4.242ZM7 13.5a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3 0a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Zm3.5-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Zm2.5.5a.5.5 0 1 1 1 0v5a.5.5 0 0 1-1 0v-5Z" clip-rule="evenodd" className="color000000 svgShape"></path></svg>
                              <span>Cart</span>
                          </a>
                        </div>
                    </div>
                </div>
            </nav>
  )
}