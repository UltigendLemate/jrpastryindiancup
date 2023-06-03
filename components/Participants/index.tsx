import React from 'react'
import Image from 'next/image'
import data from "../Participants/participants.json"
import { useCollapse } from 'react-collapsed'


const index = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
  return (
    
    
<div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="mb-12 space-y-2 text-center">
            <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">Participants</h2>
            
        </div>     
        <div  className="grid gap-12 lg:grid-cols-4">

       
      {
      data.map((item) => (
        <div key={item.id}>
          {

          item.id % 4 !== 0 ? (
           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image width={200} height={50} className='w-[100%]'  src={item.imagePath} alt=" "/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-700">{item.text}</p>

                </div>
            </div>
          ) : (
             <div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-4">
                            <p className="text-base xl:text-sm 2xl:text-[19px]  mt-2">{item.normalText}</p>
                        <div className=" text-base hidden lg:block">
                            <section className='xl:text-sm 2xl:text-[19px]' {...getCollapseProps()}> {item.expandedText}</section>
                            <button className="text-lg hidden xl:block text-gray-500 animate-pulse tracking-widest"
                            {...getToggleProps()}>
                                {isExpanded ? 'Collapse' : 'Expand'}
                            </button>
                        </div>
                            </div>
                         </div>
            </div>
          
          )}
       </div>
      ))}
    
  


        </div>
    </div>
</div>
    
  )

  }
export default index

