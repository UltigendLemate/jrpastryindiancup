import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' w-[100vw] md:w-[98.8vw] py-16 md:py-2 p-2 relative mt-28   bg-white min-h-[75vh] md:min-h-[90vh] text-primary mainbg grid  justify-center items-center font-pop'>
      {/* <Image src={'/bg_main.png'} fill={true}/> */}
      <div className='absolute w-full h-full bg-[#70e1b2]/60 z-0'></div>
      <div className='z-20'>
        {/* <h3 className='text-white text-lg text-center font-bold uppercase'>Hammer Foods Presents</h3> */}
        <div className='flex flex-col text-center text-white text-3xl font-extrabold'>
          <Link href="https://eurofoods.co.in">
            <img src="/sponsors/millac.png" className='mx-auto  h-20 md:h-32 my-4  rounded-xl ' alt="" />
          </Link>

          <p className='text-lg md:text-2xl text-black font-bold'>Presents</p>
        </div>
        {/* <img src="/pp/delta.png" className='ml-3 inline h-24 bg-white rounded-xl' alt="" /> */}
        {/* <h5 className='text-4xl text-center text-white tracking-[2rem]'>Presents</h5> */}
        <h1 className='special-font text-[3.4rem] text-center sm:text-7xl mb-3 md:text-8xl lg:text-9xl  text-black z-50'>PASTRY EVENT</h1>


        <div className='text-black text-[1.1rem] mx-auto w-full text-center sm:text-3xl lg:text-5xl font-bold uppercase'>
          Junior Pastry Indian Cup 2025 (4th Edition)
          {/* <Typewriter
            options={{
              strings: [' Junior Pastry Indian Cup 2025'],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          /> */}
        </div>
        <h2 className='text-md p-2 text-center sm:text-2xl md:text-2xl mt-3 font-semibold text-black'>03-04 August 2025, Indian Expo Centre & Mart, Greater Noida, NCR, India</h2>

        <div className=' text-center text-black mt-5 italic text-md md:text-2xl font-semibold'>

          Powered By
          <Link href="https://www.zionfoods.in">
            <img src="/sponsors/zion.png" className='-mx-6 mb-3 inline h-20  md:h-36 rounded-xl' alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero