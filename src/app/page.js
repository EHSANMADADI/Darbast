import Image from "next/image";
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import Tooltip from "@/Componnent/Tooltip";
import CyrcleImg from "@/Componnent/CyrcleImg";
import Footer from "@/Componnent/Footer";

export default function Home() {
  return (
    <div>

      <div className="flex justify-center sticky top-0 bg-white p-3">
        <div>
          <h1 className='sm:text-5xl font-black text-2xl  sm:font-medium p-2 my-3'>داربست فلزی و کفراژ صابر</h1>

          <h2 className='text-xl font-black inline  text-gray-800 pb-2  border-b-black border-b-4'>شماره تماس :09121204958 </h2>

        </div>
      </div>



      <div className="container mx-auto w-4/5 mt-16 h-full">
        <p className='leading-8  text-lg '>داربست فلزی و کفراژ صابر با 30 سال سابقه در تمامی نقاط تهران و شهر های اطراف آن  آماده ارائه خدمات با بالاترین کیفیت و نازل ترین قیمت  در سطح شهر تهران و شهرستان های اطراف آن به شما عزیزان میباشد</p>
        <p className="leading-8  text-lg">نصب داربست ایمن  با نازل ترین قیمت و بالاترین کیفیت را از ما بخواهید. </p>
        <p className="leading-8 text-2xl font-black my-5 text-blue-800">برای کسب اطلاعات بیشتر با ما تماس بگیرید:09121204958</p>
        <div className="border-b-2 text-lg pb-5"></div>

        <div>
          <h2 className="text-2xl  font-bold p-4">معرفی داربست </h2>
          <p className="px-5 text-lg">
            داربست‌ها یکی از اجزای حیاتی در صنعت ساخت و ساز و تعمیرات ساختمان‌ها هستند.
            این ساختارهای موقتی به کارگران این امکان را می‌دهند تا به نقاط بلند و دشوار دسترسی پیدا کنند و به راحتی و
            ایمنی به کارهای خود بپردازند. داربست‌ها انواع مختلفی دارند که هر کدام برای کاربردهای خاصی طراحی شده‌اند.
          </p>

        </div>
        <div className="my-10">
          <CyrcleImg />
        </div>
        <h2 className="text-2xl  font-bold p-4">اهمیت داربست در تهران و کرج</h2>
        <p className="text-lg px-5">
          با توجه به توسعه روزافزون ساخت و ساز در شهرهای بزرگ مانند تهران و کرج،
          استفاده از داربست‌ها به یک ضرورت تبدیل شده است. این شهرها با پروژه‌های عمرانی متعدد، از ساختمان‌های بلند گرفته تا پروژه‌های زیرساختی، نیازمند داربست‌های ایمن و کارآمد هستند.
          داربست‌ها علاوه بر فراهم کردن امنیت برای کارگران، نقش مهمی در تسریع و بهبود کیفیت پروژه‌های ساختمانی ایفا می‌کنند.
        </p>
        <h2 className="text-2xl  font-bold p-4">انواع داربست و کاربردهای آنها:</h2>
        <p className="text-lg px-5">
          داربست‌ها به طور کلی به دو دسته اصلی فلزی و چوبی تقسیم می‌شوند. داربست‌های فلزی به
          دلیل دوام و مقاومت بالاتر، بیشتر در پروژه‌های بزرگ و پیچیده مورد استفاده قرار می‌گیرند. این نوع داربست‌ها به راحتی قابل نصب و جابجایی هستند و می‌توانند بارهای سنگین را تحمل کنند.
          از طرف دیگر، داربست‌های چوبی به دلیل سبک بودن و هزینه کمتر، برای پروژه‌های کوچکتر و موقتی مناسب‌تر هستند.
        </p>

        <h2 className="text-2xl font-bold p-4">خدمات داربست در تهران، کرج و شهرهای حومه</h2>
        <p className="text-lg px-5">
          ما در شهر های تهران ,کرج و شهر های حومه آماده ارائه خدمات به هموطنان عزیز هستیم
        </p>
        <p className="text-lg my-2 text-blue-600 border-b-2">
          شما میتوانید برای دریافت مشاوره واطلاعات بیشتر با شماره تلفن  09121204958  تماس حاصل نمایید
        </p>

        <h2 className="text-2xl  font-bold p-4">نکات ایمنی در استفاده از داربست</h2>
        <p className="text-lg px-5">
          ایمنی در استفاده از داربست‌ها از اهمیت بالایی برخوردار است.
          استفاده صحیح از تجهیزات حفاظتی مانند کلاه
          ایمنی، دستکش و کمربند ایمنی، همچنین نصب صحیح و محکم داربست‌ها، از جمله مواردی است که باید به آنها توجه ویژه داشت.
          علاوه بر این، بازرسی منظم داربست‌ها به منظور اطمینان از سالم بودن آنها، می‌تواند از وقوع حوادث ناگوار جلوگیری کند.
        </p>

      </div>

      <div className="bg-blue-600 p-10 rounded-md mt-10 flex flex-col">
        <Footer />
      </div>
  
      <div className='sticky mx-auto flex bottom-0 w-full lg:hidden text-center animate-bounce justify-center'>
        <div className=" bg-green-600  flex items-center px-5 rounded-md">
          <BsFillTelephoneFill className="text-white text-3xl " />
          <Link href='tel:09121204958' className=' mx-auto  p-5 text-center   rounded-lg text-white text-4xl hover:bg-blue-800 transition-all'>تماس فوری </Link>
        </div>

      </div>


      <div className="bottom-0 left-10 lg:flex justify-end hidden  sticky">
        <span className="tooltip text-7xl border-dashed border-2 text-blue-900 p-3 border-blue-800 rounded-full animate-pulse hover:animate-none">
          <GiRotaryPhone />
          <span className="tooltiptext text-sm">09121204958</span>
        </span>
      </div>






    </div>
  )

}
