import React from 'react'
import Image from 'next/image'



const Gallery = () => {
  return (
    <>
      <h2 className='special-font text-[1.7rem] pb-5 pt-28 bg-white text-center sm:text-6xl md:text-7xl text-primary'>Winners 2025 - APCA Gurugram</h2>
      <div className='bg-white px-3'>
        <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-12 md:grid-rows-2'>
          {/* Left portrait spanning both rows */}
          <div className='md:col-span-2 md:row-span-2'>
            <img src="/winners/winner-01.jpg" alt="Winner 1" className='rounded-md object-cover w-full h-full' />
          </div>
          {/* Top row landscapes */}
          <div className='md:col-span-4 md:row-span-1'>
            <img src="/winners/winner-06.jpg" alt="Winner 6" className='rounded-md object-cover w-full h-full' />
          </div>
          <div className='md:col-span-4 md:row-span-1'>
            <img src="/winners/winner-04.jpg" alt="Winner 4" className='rounded-md object-cover w-full h-full' />
          </div>
          {/* Right portrait spanning both rows */}
          <div className='md:col-span-2 md:row-span-2'>
            <img src="/winners/winner-03.jpg" alt="Winner 3" className='rounded-md object-cover w-full h-full' />
          </div>
          {/* Bottom row: one landscape + two portraits */}
          <div className='md:col-span-4 col-span-2 md:row-span-1'>
            <img src="/winners/winner-02.jpg" alt="Winner 2" className='rounded-md object-cover w-full h-full' />
          </div>
          <div className='md:col-span-2 md:row-span-1'>
            <img src="/winners/winner-05.jpg" alt="Winner 5" className='rounded-md object-cover w-full h-full' />
          </div>
          <div className='md:col-span-2 md:row-span-1'>
            <img src="/winners/winner-07.jpg" alt="Winner 7" className='rounded-md object-cover w-full h-full' />
          </div>
        </div>
      </div>
      
      <h1 className='special-font text-[3.7rem] pb-5 pt-16 bg-white text-center sm:text-7xl md:text-8xl text-primary'>Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 px-3 bg-white gap-3 justify-center items-center'>
        <img src="/jpic2023/IMG_2017.JPG" alt="JPIC 2023 Image 1" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2027.JPG" alt="JPIC 2023 Image 2" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2165.JPG" alt="JPIC 2023 Image 3" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2228.JPG" alt="JPIC 2023 Image 4" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2390.JPG" alt="JPIC 2023 Image 5" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2461.JPG" alt="JPIC 2023 Image 6" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2537.JPG" alt="JPIC 2023 Image 7" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2591.JPG" alt="JPIC 2023 Image 8" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2651.JPG" alt="JPIC 2023 Image 9" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2668.JPG" alt="JPIC 2023 Image 10" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2676.JPG" alt="JPIC 2023 Image 11" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2679.JPG" alt="JPIC 2023 Image 12" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2715.JPG" alt="JPIC 2023 Image 13" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2785.JPG" alt="JPIC 2023 Image 14" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2930.JPG" alt="JPIC 2023 Image 15" className='object-contain rounded-md w-full h-full' />
        <img src="/jpic2023/IMG_2953.JPG" alt="JPIC 2023 Image 16" className='object-contain rounded-md w-full h-full' />

        <img src="/pics/1.webp" alt="" className='object-contain rounded-md col-span-2 md:row-span-2 md:object-cover md:w-full md:h-full' />
        <img src="/pics/DSC_0104.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2 ' />
        <img src="/pics/DSC_0146.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0136.webp" alt="" className='object-contain rounded-md col-span-1' />


        <img src="/pics/DSC_0141.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0145.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0157.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />


        <img src="/pics/DSC_0172.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0227.webp" alt="" className='object-contain row-span-2 rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0173.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0183.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0197.webp" alt="" className='object-contain rounded-md col-span-1' />

        <img src="/pics/DSC_0199.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0225.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1 md:object-cover md:h-full' />

        <img src="/pics/DSC_0238.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2 md:object-cover md:h-full' />
        <img src="/pics/DSC_0239.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0241.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/DSC_0254.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0258.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0275.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />
        <img src="/pics/DSC_0330.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />

        <img src="/pics/DSC_0335.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0344.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0348.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0349.webp" alt="" className='object-contain rounded-md col-span-1' />


        <img src="/pics/DSC_0353.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0354.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0360.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0398.webp" alt="" className='object-contain rounded-md col-span-1' />




        <img src="/pics/DSC_0405.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />
        <img src="/pics/DSC_0407.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0414.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/DSC_0420.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />


        <img src="/pics/DSC_0439.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2' />
        <img src="/pics/DSC_0423.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0435.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/DSC_0447.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0442.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0449.webp" alt="" className='object-contain rounded-md col-span-2' />


        <img src="/pics/DSC_0452.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0446.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2' />
        <img src="/pics/DSC_0462.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/DSC_0454.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2' />
        <img src="/pics/DSC_0466.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/IMG_3980.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/IMG_4016.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/DSC_0464.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2' />
        <img src="/pics/IMG_4050.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />


        <img src="/pics/DSC_0469.webp" alt="" className='object-contain rounded-md col-span-1 row-span-2' />
        <img src="/pics/IMG_4232.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />
        <img src="/pics/IMG_4439.webp" alt="" className='object-contain rounded-md col-span-1 md:object-cover md:h-full' />

        <img src="/pics/IMG_4590.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />
        <img src="/pics/IMG_4595.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/IMG_4601.webp" alt="" className='object-contain rounded-md col-span-1' />
        <img src="/pics/IMG_4612.webp" alt="" className='object-contain rounded-md col-span-2 md:col-span-1' />





      </div>
    </>
  )
}

export default Gallery