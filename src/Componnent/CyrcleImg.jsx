import React from 'react'
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
export default function CyrcleImg() {
     return (
          <div className="flex justify-around">
               <div>
                    <img src={img1} alt="داربست صابر" />
               </div>
               <div>
                    <img src={img2} alt="داربست صابر" />
               </div>
               <div>
                    <img src={img3} alt="داربست صابر" />
               </div>
          </div>
     )
}
