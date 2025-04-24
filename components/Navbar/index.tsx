// "use Client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react'
import Image from "next/image"
import Logo from "../../public/logo.jpg"
type Props = {}
import Data from "./Data"
import { FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion"

const Index = () => {
  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = React.useState(false)
  return (
    <div>





      <nav className="w-full absolute top-0 left-0 right-0 z-50 bg-white">
        <div className="justify-between px-4 mx-auto width-screen lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between py-3  lg:block">
              <Link href="/">
                <Image src={Logo} alt='' width={1080} height={1080} className='h-20 md:h-24 w-auto' />
              </Link>
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  <Hamburger toggled={navbar} toggle={setNavbar} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center py-2 lg:flex lg:flex-row mt-3 lg:mt-0 align-middle">
                <div className='flex lg:flex-row flex-col align-middle justify-center'>
                  {Data.map((Part, i) => (
                    <div key={i}>
                      <li className="lg:text-base text-base mb-4 text-black lg:px-4 lg:mb-0 text-center font-semibold hover:cursor-pointer hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent">
                        <Link href={`/#${Part}`} onClick={() => setNavbar(!navbar)}>
                          {Part}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
                <li className="lg:text-base text-base mb-4 text-black lg:px-4 lg:mb-0 text-center font-semibold hover:cursor-pointer hover:underline decoration-pink-500 underline-offset-8 lg:hover:text-pink-500 transition-all duration-400 lg:hover:bg-transparent">
                  <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>
                <li className="lg:text-base text-base text-black mx-2 mb-2 px-2 lg:py-2 pb-2 lg:mb-0 text-center font-semibold lg:hover:bg-gray-300 hover:underline-offset-8 decoration-pink-500 underline-offset-8 hover:cursor-pointer lg:hover:text-black transition-all duration-400 rounded-lg">
                  <Link href="/jpic.pdf" onClick={() => setNavbar(!navbar)}>
                    Rules And Regulations
                  </Link>
                </li>
                {/* <li className="lg:text-base text-base bg-primary mb-4 lg:mb-0 hover:bg-primary rounded-lg text-black py-2 lg:px-6 text-center font-semibold hover:cursor-pointer decoration-pink-500 underline-offset-8 lg:hover:text-white transition-all duration-400"> */}
                <li className="lg:text-base text-base text-black mx-2 mb-2 px-2 lg:py-2 pb-2 lg:mb-0 text-center font-semibold lg:hover:bg-gray-300 hover:underline-offset-8 decoration-pink-500 underline-offset-8 hover:cursor-pointer lg:hover:text-black transition-all duration-400 rounded-lg">
                  <Link href="https://tour.jrpastryindiancup.com" onClick={() => setNavbar(!navbar)}>
                    Virtual Tour
                  </Link>
                </li>
                <li className="lg:text-base text-base bg-primary mb-4 lg:mb-0 hover:bg-primary rounded-lg text-black py-2 lg:px-6 text-center font-semibold hover:cursor-pointer decoration-pink-500 underline-offset-8 lg:hover:text-white transition-all duration-400">
                  
                <button  onClick={() => setShowModal(true)}>
                    Register Now!
                  </button>
                </li>
               
              </ul>
            </div>
          </div>
        </div >
      </nav >

      {showModal && (
      <div className='fixed w-screen h-screen  bg-white bg-opacity-50 z-[9999] top-0 left-0'>
        <div className='max-w-xs md:min-w-[40%] w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white border border-primary rounded-2xl h-auto'>
        <button className="text-gray-600 absolute top-3 right-3 hover:text-gray-800 " onClick={() => setShowModal(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-pink-300" />
                            </button>
          <div className='flex flex-col justify-center items-center text-black text-2xl my-4 font-semibold'>
            I want to register as a
            <ul className='flex flex-col mt-5 md:flex-row gap-5'>
              <li className='bg-primary text-center text-white px-5 py-2 text-xl rounded-xl  hover:bg-pink-300 cursor-pointer'>
                <Link href='/register.pdf'>
                Participant
                </Link>
              </li>
              <li className='bg-primary text-center text-white px-5 py-2 text-xl rounded-xl  hover:bg-pink-300 cursor-pointer'>
                <Link href='https://www.ihexpo.com/visitor-registration/'>
                Visitor
                </Link>
              </li>
            </ul>
            </div>
        </div>
      </div>
      )}
    </div >
  )
}

export default Index 