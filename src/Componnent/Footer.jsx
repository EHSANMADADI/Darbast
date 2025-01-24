import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import Phone from './Phone';
export default function Footer() {
  return (
    <div className="flex">
     
      <div className="flex flex-col">
        <h4 className="text-white text-2xl px-4 mb-5">راه های ارتباطی</h4>
        <div className=" text-white text-lg px-10 mx-5">
        <div className='flex items-center'>
            <span className="text-white border p-2 rounded-full mx-1"> <BsFillTelephoneFill /></span>
            09121081721
          </div>
          <div className='flex items-center my-3'>
            <span className="text-white border p-2 rounded-full mx-1"> <BsFillTelephoneFill /></span>
            09121204958
          </div>
          <div className='flex items-center'>
            <span className="text-white border p-2 rounded-full mx-1"> <BsFillTelephoneFill /></span>
            09352434329
          </div>
        </div>
      </div>

    </div>
  )
}
