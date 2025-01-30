"use client"
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";


export default function ItemsComponents({
     title,
     discription,
     link,
     bgClassName,
}) {

     return (
          <div

               className="flex z-10 flex-col cursor-pointer justify-between  w-[22rem] overflow-hidden  bg-white border border-gray-200 rounded-tl-3xl rounded-tr-3xl shadow mb-5 hover:border-blue-700 hover:border-2 duration-100"

          >
               <Link href={link}>
                    <div
                         className={`${bgClassName} w-full  rounded-tl-3xl rounded-tr-3xl sm:h-60 h-[17.8rem] relative overflow-hidden`}
                    >
                         <div
                              target="_blank"
                              href={link}
                              className="sm:absolute inset-0 sm:flex hidden bg-black  bg-opacity-30 sm:h-[20.7rem]  items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity duration-300"
                         >
                              <span className="text-3xl">
                                   <HiExternalLink />
                              </span>
                         </div>
                    </div>

                    {/* بخش توضیحات */}
                    <div className="md:p-5 p-3 flex flex-col h-auto">

                         <h2 className=" text-2xl text-center font-bold tracking-tight text-blue-900">
                              <strong>{title}</strong>
                         </h2>

                         <p
                              className="font-medium text-lg text-gray-700 mt-3"
                              style={{ textAlign: "justify" }}
                         >
                              {discription}
                         </p>
                    </div>
               </Link>

          </div>
     );
}