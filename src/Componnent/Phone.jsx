import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import Image from "next/image";
import Link from 'next/link';
export default function Phone() {
  return (
    <div>
     <div className='sticky mx-auto flex bottom-0 w-full lg:hidden text-center animate-bounce justify-center'>
        <div className=" bg-green-600  flex items-center px-5 rounded-md">
          <BsFillTelephoneFill className="text-white text-3xl " />
          <Link href='tel:09121204958' className=' mx-auto  p-5 text-center   rounded-lg text-white text-4xl transition-all'>تماس فوری </Link>
        </div>

      </div>


      <div dir="ltr" className="bottom-0 w-11/12 mx-auto  lg:block hidden  sticky">
        <span className="tooltip text-7xl border-dashed border-2 text-blue-900 p-3 border-blue-800 rounded-full animate-pulse hover:animate-none">
          <GiRotaryPhone />
          <span className="tooltiptext text-sm">09121204958</span>
        </span>
      </div>
    </div>
  )
}
