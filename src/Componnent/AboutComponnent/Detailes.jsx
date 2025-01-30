import React from 'react'
import img from '../../../public/images/1.jpg'
export default function Detailes() {
     return (
          <>
               <div className="lg:w-4/5 p-2 m-2 w-full mx-auto fontIranSans lg:text-xl text-base">
                    <div className="mx-auto">
                         <img className="w-full rounded-xl  max-h-[26rem]" src='/images/1.jpg' alt='image-darbast' />
                    </div>
                    <div>
                         <h2 className="text-3xl font-bold m-2">درباره ما:</h2>
                         <p>
                              <strong className="text-blue-700">داربست صابر</strong>
                              به عنوان یکی از پیشروان صنعت داربست در تهران، با سال‌ها تجربه و تخصص در زمینه‌ی ارائه خدمات داربست‌بندی، پروژه‌های ساختمانی، صنعتی و عمرانی را با بالاترین استانداردهای ایمنی و کیفیت همراهی می‌کند. ما در داربست صابر با بهره‌گیری از نیروهای مجرب و استفاده از تجهیزات مدرن، آماده‌ی خدمت‌رسانی به مشتریان عزیز در سراسر<strong>تهران</strong> و حومه هستیم
                         </p>

                         <h2 className="text-3xl font-bold m-2">چرا داربست صابر؟</h2>
                         <p>
                              <strong>خدمات گسترده </strong>
                              <span>
                                   از داربست‌بندی ساختمان‌های مسکونی و تجاری تا پروژه‌های صنعتی و عمرانی، ما همه‌ی نیازهای شما در <strong>تهران</strong> کرج وشهرهای حومه را پوشش می‌دهیم
                              </span>
                         </p>

                         <p>
                              <strong>قیمت رقابتی </strong>
                              <span>
                                   با ارائه‌ی منصفانه ترین قیمت‌ها در تهران کرج و شهر های حومه، هزینه‌های پروژه‌های شما را بهینه می‌کنیم
                              </span>
                         </p>
                         <div className="flex items-center justify-center border-dashed border-2 p-5 my-10">
                              <span className="text-red-600 text-center mx-auto text-2xl">برای دریافت مشاوره و استعلام قیمت همین حالا با ما تماس بگیرید</span>

                         </div>


                    </div>

               </div>
          </>

     )
}
