import React from 'react'
import Data from './jury.json'
import JuryCard from './JuryCard'


type Props = {}

const Index = (props: Props) => {
  return (
    <div className='w-full' id='Jury'>
        <h2 className='z-20 mx-auto text-5xl md:text-7xl text-primary mb-4  mt-10 text-center special-font'>Jury Committee</h2>


        <div className='md:mx-24 mx-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10'>

        {
            Data.map((item : any) => (
                <JuryCard key={item.img} {...item} />
            ))

        }
        </div>
    </div>
  )
}

export default Index