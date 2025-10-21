'use client'
import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from 'react'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Header() {
     const [isMenuOpen, setIsMenuOpen] = useState(false)

     return (
          <div className="flex-col  sticky top-0 bg-gray-100 fontIranSans border-b p-3 z-50">
               <div className="flex justify-around items-center py-2">
                    {!isMenuOpen && <div onClick={() => {
                         setIsMenuOpen(!isMenuOpen)

                    }}>
                         <span className="lg:text-5xl text-2xl cursor-pointer text-bold"><CiMenuFries /></span>
                    </div>}

                    <div>
                         <h1 className='sm:text-5xl font-black text-2xl  sm:font-medium p-2 my-3'>داربست فلزی و کفراژ در تهران</h1>
                    </div>


                    <div
                         className={`fixed top-0 right-0 h-full md:w-80 w-full bg-gray-100 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                              } transition-transform duration-300 ease-in-out`}
                    >
                         <div onClick={() => setIsMenuOpen(false)} className="flex justify-end mt-2 text-3xl cursor-pointer text-gray-500">
                              <span><FaRegWindowClose /></span>
                         </div>

                         <ul className="p-4 space-y-4 cursor-pointer text-center">
                              <li className="text-xl font-bold cursor-pointer hover:text-blue-600 py-3 hover:bg-white duration-200 ">
                                   <Link href='/'>
                                        صفحه اصلی
                                   </Link>
                              </li>

                              <li className="text-xl border-b-2 border-t-2 py-3 border-white  hover:bg-white duration-200 font-bold cursor-pointer hover:text-blue-600">
                                   <Link href='/feeds'>
                                        مقالات
                                   </Link>
                              </li>

                              <li className="text-xl font-bold cursor-pointer hover:text-blue-600 py-3 hover:bg-white duration-200 ">
                                   <Link href='/aboutUs'>
                                        درباره ما
                                   </Link>
                              </li>
                              <li>
                                   <div className='sticky mx-auto flex bottom-0 w-full lg:hidden text-center  justify-center '>
                                        <div className=" bg-green-600 hover:bg-green-500 duration-200  flex items-center px-5">
                                             <BsFillTelephoneFill className="text-white text-3xl " />
                                             <Link href='tel:09121081721' className=' mx-auto  p-5 text-center   rounded-lg text-white text-4xl  transition-all'>تماس فوری </Link>
                                        </div>

                                   </div>
                              </li>
                         </ul>
                    </div>
               </div>
               <div className="flex w-full justify-center items-center border-t border-blue-300 py-5 my-2">
                    <h2 className='text-xl font-black inline  text-blue-900 pb-2  border-b-black border-b-4'>شماره تماس :09121081721 </h2>
               </div>
          </div>
     )
}
