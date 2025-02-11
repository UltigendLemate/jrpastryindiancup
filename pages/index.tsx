import { Inter } from 'next/font/google'
import Layout from '../components/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About.jsx'
import Contact from '@/components/Contact.jsx'
import Sponsors from '@/components/Sponsors/Sponsors'
import Organizers from '@/components/Organizers/index'
import Participants from '@/components/Participants'
import Jury from '@/components/Jury'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <Layout>

      {/* hero section + about | organizers | sponsors | Rules & Guidelines| Gallery | Participants | Contact | Register Now */}

      {/* className = text-primary or bg-primary will work. this is primary pink */}

      <Hero />
      <About />
      <Organizers />
      <Sponsors />
      <Jury/>
      <Participants />
      {/* <div className='fixed w-10 h-10 top-0 left-0 bg-black'> </div> */}
      <Contact />
<div className='mx-auto mb-10 -mt-10'>
        <h2 className='text-center text-2xl pb-5'>Same Dedication, New Event</h2>

        <Link href="https://pastryqueenindia.com/">
        <img src="banner.jpg" alt="pstry queen event logo" className='max-h-72 aspect-auto' />
        </Link>
      </div>


    </Layout>
  )
}
