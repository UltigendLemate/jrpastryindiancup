import React from 'react'
import Image from 'next/image'
import image1 from "../images/sigep.webp"
import image2 from "../images/bakery review.png"
import image3 from "../images/juniores pastry wc.png"
import image4 from "../images/ihe.png"
import styles from "../../styles/Organizers.module.css"

const index = () => {
  return (
    
    <div className="bg-[#FB8DA0]/60 " >
        <div className=' text-[#EFEBE0]  text-4xl md:text-5xl p-3 mx-auto  font-semibold   flex justify-center'>Our Organizers</div>
      <div className="sm:grid sm:grid-cols-2 max-w-6xl m-auto gap-4 md:gap-6 p-5 ">
       
        {/* CARD1 */}
   <div className="max-w-xl mb-5 sm:mb-0 mx-auto   bg-white rounded-md  overflow-hidden shadow-md">
        <Image src={image1} alt="Image1" className='w-full p-5' />
        <div className="p-4">
        <p className="text-gray-800 text-xs md:text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad nesciunt consequuntur error modi explicabo ipsum voluptas sit incidunt natus soluta repudiandae eos minima corporis, quisquam, a totam numquam alias. Labore animi, explicabo laudantium impedit dolore a eveniet maiores nobis quae numquam assumenda sunt eos et, earum reprehenderit voluptatem ducimus.</p>
        </div>
    </div>
    {/* CARD2 */}
   <div className="max-w-xl  mb-5 sm:mb-0 mx-auto   bg-white rounded-md overflow-hidden shadow-md">
        <Image src={image2} alt="Image1" className='w-full p-5' />
        <div className="p-4">
        <p className="text-gray-800 text-xs md:text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad nesciunt consequuntur error modi explicabo ipsum voluptas sit incidunt natus soluta repudiandae eos minima corporis, quisquam, a totam numquam alias. Labore animi, explicabo laudantium impedit dolore a eveniet maiores nobis quae numquam assumenda sunt eos et, earum reprehenderit voluptatem ducimus.</p>
          </div>
    </div>
    {/* CARD3 */}
   <div className="max-w-xl mb-5 sm:mb-0  mx-auto  bg-white rounded-md overflow-hidden shadow-md">
        <Image src={image3} alt="Image1" className='w-full p-5' />
        <div className="p-4">
        <p className="text-gray-800 text-xs md:text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad nesciunt consequuntur error modi explicabo ipsum voluptas sit incidunt natus soluta repudiandae eos minima corporis, quisquam, a totam numquam alias. Labore animi, explicabo laudantium impedit dolore a eveniet maiores nobis quae numquam assumenda sunt eos et, earum reprehenderit voluptatem ducimus.</p>
         </div>
    </div>
    {/* CARD4 */}
   <div className="max-w-xl mb-5 sm:mb-0 mx-auto   bg-white rounded-md overflow-hidden shadow-md">
        <Image src={image4} alt="Image1" className='w-full p-5' />
        <div className="p-4">
        <p className="text-gray-800 text-xs md:text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad nesciunt consequuntur error modi explicabo ipsum voluptas sit incidunt natus soluta repudiandae eos minima corporis, quisquam, a totam numquam alias. Labore animi, explicabo laudantium impedit dolore a eveniet maiores nobis quae numquam assumenda sunt eos et, earum reprehenderit voluptatem ducimus.</p>
        </div>
    </div>


      </div>
    </div>
  )
}

export default index
