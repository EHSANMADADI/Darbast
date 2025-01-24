
import ItemsComponents from "@/Componnent/FeedsComponnent/ItemsComponents"
import Header from "@/Componnent/Header"

const page = () => {
     return (
          <>
               <Header />
               <div className="flex flex-wrap justify-between items-center lg:m-8 m-4 p-2">
                    <ItemsComponents bgClassName="bg-photo1" link="/all-about-darbast-tehran" title='همه چیز درباره‌ی خدمات داربست فلزی در تهران' discription="خدمات داربست فلزی در تهران یکی از بخش‌های مهم و اساسی در پروژه‌های ساختمانی، صنعتی و حتی تبلیغاتی است. این خدمات به دلیل کاربردهای گسترده و نیاز به ایمنی بالا، همواره مورد توجه پیمانکاران، مهندسان و شرکت‌های مختلف قرار دارد. در این مقاله، به بررسی انواع داربست فلزی، کاربردها، مزایا و نکات کلیدی انتخاب بهترین خدمات داربست فلزی در تهران می‌پردازیم." />

               </div>

          </>

     )
}
export default page