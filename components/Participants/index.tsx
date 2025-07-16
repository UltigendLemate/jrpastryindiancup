import React from 'react'
import Image from 'next/image'
import {data} from "./participants.jsx"
import { UserPlus } from 'phosphor-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
  
}

const Index = () => {  
  return (
    <>
      <div id='Participants' className="pb-10 bg-white">  
        <div className="container m-auto text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="font-ProzaLibre text-5xl md:text-7xl text-primary mt-12 mb-6 text-center special-font">Participanting Teams</h2>
          </div>     
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 md:gap-8 text-black">
            {data.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                {item.id % 4 !== 0 && item.isMentor === false ? (
                  // Regular participant
                  <div className="card mx-auto rounded-md bg-gradient-to-t from-transparent to-rose-300 relative w-full max-w-md aspect-square flex flex-col justify-center group">
                    <div className="flex-1 flex items-center justify-center p-3">
                      <img 
                        alt={item.name} 
                        src={item.imagePath} 
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <p className='absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center p-1 bg-pink-700 rounded-xl text-white px-3 text-xs font-semibold'>
                      {item.name}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200'>
                          <UserPlus size={16} className="text-gray-700" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className='text-black'>{item.name}</DialogTitle>
                        </DialogHeader>
                        <div className="p-2">
                          {item.imagePath && (
                            <div className="mb-6 flex justify-center">
                              <img 
                                src={item.imagePath} 
                                alt={item.name}
                                className="w-48 h-48 object-cover rounded-lg shadow-md"
                              />
                            </div>
                          )}
                          
                          {item.normalText && (
                            <div>
                              {/* <h5 className="text-md font-medium text-gray-700 mb-2">About:</h5> */}
                              <p className="text-gray-600 leading-relaxed">{item.normalText}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : item.id % 4 !== 0 && item.isMentor === true ? (
                  // Mentor
                  <div className="card rounded-md border-t-[3px] border-l-[3px] border-r-[3px] border-l-yellow-300 border-r-yellow-300 border-t-yellow-300 bg-gradient-to-t from-transparent to-rose-300 relative w-full max-w-md aspect-square flex flex-col justify-center group">
                    <div className="flex-1 flex items-center justify-center p-3">
                      <img 
                        alt={item.name} 
                        src={item.imagePath} 
                        className='w-full h-full object-cover rounded-md'
                      />
                    </div>
                    <p className='absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center p-1 bg-pink-700 rounded-xl text-white px-3 text-xs font-semibold'>
                      {item.name}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className='absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200'>
                          <UserPlus size={16} className="text-gray-700" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className='text-black'>
                            {item.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="p-2">
                          {item.imagePath && (
                            <div className="mb-6 flex justify-center">
                              <img 
                                src={item.imagePath} 
                                alt={item.name}
                                className="w-48 h-48 object-cover rounded-lg shadow-md"
                              />
                            </div>
                          )}
                          
                          {item.normalText && (
                            <div>
                              {/* <h5 className="text-md font-medium text-gray-700 mb-2">About:</h5> */}
                              <p className="text-gray-600 leading-relaxed">{item.normalText}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  // Institution/Team logo
                  <div className="flex justify-center flex-col items-center w-full max-w-md aspect-square rounded-lg group relative">
                    <div className="flex-1 flex items-center justify-center">
                      <img 
                        src={item.institute} 
                        alt={item.city}
                        className='w-full h-full object-contain'
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

