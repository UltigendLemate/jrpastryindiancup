import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
    img : string,
    mini : string,
    text:string,
    link? : string,
    appLinks?: {
      android?: string,
      ios?: string
    }
}
const Organizer = (props : Props) => {
    const [showModal, setShowModal] = React.useState(false)
    //stop scroll when modal is open
    React.useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [showModal])
    const hasAppLinks = props.appLinks && (props.appLinks.android || props.appLinks.ios);
  return (
    <div className="max-w-xs md:max-w-xl  mb-5 sm:mb-0 mx-auto p-2 sm:p-5 shadow-xl  bg-white rounded-md overflow-hidden ">
    <div className="flex w-full  h-32 sm:h-36 justify-center">
      {hasAppLinks ? (
        <div className="w-80 p-4 cursor-pointer" onClick={() => setShowModal(true)}>
          <img src={props.img} alt="Image1" className='w-full h-full object-contain'/>
        </div>
      ) : (
        <Link href={props.link || "#"}>
          <img src={props.img} alt="Image1" className='w-80 p-4' />
        </Link>
      )}
    </div> <div className="p-4">
      <p className="text-gray-800 text-xs md:text-sm mb-2">{props.mini}<span className='text-primary cursor-pointer' onClick={() => setShowModal(true)}> Know More</span></p>
    </div>
    {showModal && (
                <div className="fixed w-screen h-[100vh]  bottom-0 left-0 z-[999] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md overflow-y-hidden">
                    <div className="bg-white rounded-lg shadow-l z-[999] p-4 pt-0 md:pt-0 md:p-6 max-w-[250px] max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
                        <div className=" flex justify-between py-3 bg-white top-0 right-0">
    
                            <p className='text-xl font-semibold'>Know More</p>
                            <button className="text-gray-600  hover:text-gray-800" onClick={() => setShowModal(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-pink-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg mb-4">{props.text}</p>
                        {hasAppLinks && (
                          <div className="flex gap-4 mt-4 flex-wrap">
                            {props.appLinks?.android && (
                              <a href={props.appLinks.android} target="_blank" rel="noopener noreferrer">
                                <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-12 md:h-14 w-auto" style={{minWidth: 120}} />
                              </a>
                            )}
                            {props.appLinks?.ios && (
                              <a href={props.appLinks.ios} target="_blank" rel="noopener noreferrer">
                                <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-12 md:h-14 w-auto" style={{minWidth: 120}} />
                              </a>
                            )}
                          </div>
                        )}
                    </div>
                </div>
            )}
  </div>
  )
}

export default Organizer