import React from 'react'
import { FaTimes } from 'react-icons/fa'

type Props = {
    name : string,
    img : string,
    mini : string,
    text:string
}

const JuryCard = (props: Props) => {
    const [showModal, setShowModal] = React.useState(false)
    //stop scroll when modal is open
    React.useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [showModal])
  return (
    <div className='w-full shadow-md shadow-primary/10 flex flex-col'>
        <div className='from-primary to-white bg-gradient-to-b'>
            <img src={props.img} className='w-full h-full object-cover' alt="" />
        </div>

        <div className='p-5'>
            <h2 className='text-xl font-bold mb-2'>{props.name}</h2>
            <p className='text-sm mb-3 line-clamp-2'>{props.mini}</p>
            <p className='text-sm cursor-pointer text-primary underline' onClick={() => setShowModal(true)}>Know More</p>
        </div>

        {showModal && (
                <div className="fixed w-screen h-[100vh] knowmore  bottom-0 left-0 z-[999] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md overflow-y-hidden">
                    <div className="bg-white rounded-lg shadow-l z-[999] p-4 pt-0 md:pt-0 md:p-6 max-w-[250px] max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
                        <div className=" flex justify-between py-3 bg-white top-0 right-0">
    
                            <p className='text-xl font-semibold'>Know More</p>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal(false)}>
                                <FaTimes className="text-primary text-3xl hover:text-pink-300" />
                            </button>
                        </div>
                        <p className="xl:text-sm 2xl:text-lg" dangerouslySetInnerHTML={{__html: props.text}}></p>
                    </div>
                </div>
            )}

        
    </div>
  )
}

export default JuryCard