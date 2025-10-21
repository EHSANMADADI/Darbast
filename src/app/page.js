'use client'
import Image from "next/image";
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import Footer from "@/Componnent/Footer";
import Head from 'next/head';
import FerstPageArticle from "@/Componnent/FerstPageArticle";
import Header from "@/Componnent/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>09121081721|داربست فلزی  صابر | خدمات داربست در تمامی نقاط تهران و کرج</title>
        <meta name="description" content="خدمات داربست تهران با کیفیت بالا و قیمت مناسب. اجاره و نصب داربست فلزی در تهران و حومه. برای مشاوره رایگان تماس بگیرید" />
        <meta name="keywords" content="داربست , داربست در تهران ,داربست در شهر ری ,داربست تهران, داربست فلزی ,بنر, لوله داربست,انجام داربست در تهران, داربست بنر , داربست تبلیغاتی ,داربست غرب تهران,داربست جنوب تهران,داربست شمال تهران,داربست مرکز تهران,داربست  شهر ری, داربست ساختمان , داربست ایستگاه صلواتی" />
        <meta name="author" content="Ehsan Madadi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="23nfA0DTEfGUtcIwj8N/fA" async></script>
        <meta charSet="UTF-8" />

        {/* افزودن Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://darbastsaber.com/" />
      </Head>

      <Header />
      <div>
        <FerstPageArticle />
      </div>

      <div className="bg-blue-600 p-10 rounded-md mt-10 flex flex-col">
        <Footer />
      </div>

      <div className='sticky mx-auto flex bottom-0 w-full lg:hidden text-center animate-bounce justify-center'>
        <div className=" bg-green-600  flex items-center px-5 rounded-md">
          <BsFillTelephoneFill className="text-white text-3xl " />
          <Link href='tel:09121081721' className=' mx-auto  p-5 text-center   rounded-lg text-white text-4xl transition-all'>تماس فوری </Link>
        </div>

      </div>


      <div dir="ltr" className="bottom-0 w-11/12 mx-auto  lg:block hidden  sticky">
        <span className="tooltip text-7xl border-dashed border-2 text-blue-900 p-3 border-blue-800 rounded-full animate-pulse hover:animate-none">
          <GiRotaryPhone />
          <span className="tooltiptext text-sm">09121081721</span>
        </span>
      </div>
    </div>
  )

}
