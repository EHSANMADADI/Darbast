import Detailes from "@/Componnent/AboutComponnent/Detailes"
import Footer from "@/Componnent/Footer"
import Header from "@/Componnent/Header"
const page = () => {
     return (
          <>
              
               <div className="w-full h-screen">
                    <Header />
                    <Detailes />
                    <div className="bg-blue-600 p-10 rounded-md mt-10 flex flex-col">
                         <Footer />
                    </div>

               </div>
          </>

     )
}
export default page