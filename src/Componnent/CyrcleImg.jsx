import React from 'react';
import Image from 'next/image';
export default function CyrcleImg() {
  return (
    <div className="flex justify-around mt-10 mb-10 w-full flex-wrap">  
      <div className=' w-56 sm:mt-0 mt-5'>
        <Image width={300} height={300} className='w-full h-full rounded-2xl' src='/images/1.jpg' alt="داربست صابر" />
      </div>
      <div className='w-56 sm:mx-0 mx-1 sm:mt-0 mt-5'>
        <Image width={300} height={300} className='w-full h-full rounded-2xl' src='/images/2.jpg' alt="داربست صابر" />
      </div>
      <div className=' w-56 sm:mt-0 mt-5 '>
        <Image width={300} height={300} className='w-full h-full rounded-2xl' src='/images/3.jpg' alt="داربست صابر" />
      </div>
     
    </div>
  );
}
