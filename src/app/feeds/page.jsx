
import ItemsComponents from "@/Componnent/FeedsComponnent/ItemsComponents"
import Header from "@/Componnent/Header"
import Footer from "@/Componnent/Footer"
import Head from 'next/head';
const page = () => {
     return (
          <>
            
               <Header />
               <div className="flex flex-wrap gap-x-5 justify-center w-10/12 mx-auto lg:my-8 m-4 p-2">
                    <ItemsComponents bgClassName="bg-photo1" link="/all-about-darbast-tehran" title='همه چیز درباره‌ی خدمات داربست فلزی در تهران' discription="خدمات داربست فلزی در تهران یکی از بخش‌های مهم و اساسی در پروژه‌های ساختمانی، صنعتی و حتی تبلیغاتی است. این خدمات به دلیل کاربردهای گسترده و نیاز به ایمنی بالا، همواره مورد توجه پیمانکاران، مهندسان و شرکت‌های مختلف قرار دارد. در این مقاله، به بررسی انواع داربست فلزی، کاربردها، مزایا و نکات کلیدی انتخاب بهترین خدمات داربست فلزی در تهران می‌پردازیم." />
                    {/* <ItemsComponents bgClassName="bg-photo2" link="/Different-types-darbsat" title=' انواع و اهمیت استفاده از داربست ' discription="  در این مقاله به انواع و کاربرد های داربست و همجنین اهمیت آن در ساخت ساز خواهیم پرداخت  آیا تا به حال به اهمیت داربست ها در ساخت و ساز فکر کرده اید ؟
 داربست   سازه ای فلزی و موقتی و کلیدی است که به گارگران اجازه میدهد به نقاط دشوار یک پروژه دسترسی یابند 
 
" /> */}

               </div>
               <div className="bg-blue-600 p-10 rounded-md mt-10 flex flex-col">
                    <Footer />
               </div>

          </>

     )
}
export default page