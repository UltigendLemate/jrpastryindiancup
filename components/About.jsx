import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [ref2, inView2] = useInView({ threshold: 0 });

  useEffect(() => {
      if (inView2) {
          controls.start("visible");
      }
  }, [controls, inView2]);
  return (
    <section ref={ref} id='About' className='bg-white font-mon text-black flex items-center flex-col max-w-screen-xl mx-auto px-5 '>
      <h1 className='font-ProzaLibre text-5xl md:text-7xl text-primary mt-5 mb-6 text-center special-font'>Inspiring the Future of Pastry</h1>
      {/* <h2 className='font-ProzaLibre text-3xl md:text-4xl text-primary mb-8 text-center'>Inspiring the Future of Pastry</h2> */}
      
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }}
        className='space-y-6 text-md'
      >
        <p>
          The Junior Pastry Indian Cup 2025 is more than just a competition—it&apos;s a launchpad for young Indian pastry chefs aspiring to shine on the global stage. Designed as a preparatory ground for major international events, the competition celebrates the passion, skill, and creativity of the next generation, while upholding the core values of the profession: quality, collaboration, innovation, and mutual respect.
        </p>

        <p>
          This prestigious team-based event will take place during the IHE Expo 2025 at the India Expo Centre & Mart, Greater Noida, on August 3–4, 2025. Each team consists of two contestants (26 years of age) and one mentor, who also serves on the event&apos;s jury. The winning team will represent India at the Junior Pastry World Cup 2026, held at SIGEP WORLD in Rimini, Italy, with all travel and accommodation expenses fully covered.
        </p>

        <motion.div className='grid md:grid-cols-2 gap-10 py-10' ref={ref2}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }}>
        <div>
          <Image ref={ref} width={600} height={600}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.8 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }} src="/pics/IMG_4232.webp" alt="Pastry Competition" className='rounded-md' />
        </div>

        <div>
          <Image ref={ref} width={600} height={600}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 100 },
            }} src="/pics/IMG_4439.webp" alt="Pastry Showcase" className='rounded-md hidden md:block' />
        </div>
      </motion.div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h3 className='text-2xl font-ProzaLibre text-primary mb-4'>Competition Theme: Music & Melody</h3>
          <p>
            Participants will draw inspiration from music, crafting desserts that capture the emotion, rhythm, and harmony of genres such as jazz, classical, rock, or opera—creating a symphony of flavour, form, and presentation.
          </p>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h3 className='text-2xl font-ProzaLibre text-primary mb-4'>Eligibility</h3>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Open to Indian pastry chefs (male or female) born on or after January 20, 2000.</li>
            <li>Contestants must be 26 years of age as of January 20, 2026.</li>
          </ul>
        </div>

        <div className='bg-gray-50 p-6 rounded-lg'>
          <h3 className='text-2xl font-ProzaLibre text-primary mb-4'>Event Schedule</h3>
          <div className='space-y-4'>
            <p><span className='font-semibold'>Venue:</span> Hall No. 16, Bakery & Pastry Arena, India Expo Centre & Mart, Greater Noida, NCR</p>
            <p><span className='font-semibold'>Dates:</span> August 3–4, 2025</p>
            <div className='space-y-2'>
              <p><span className='font-semibold'>Day 1:</span> 8:00 AM – 5:00 PM</p>
              <p><span className='font-semibold'>Day 2:</span> 8:00 AM – 4:00 PM</p>
              <p><span className='font-semibold'>Setup:</span> August 2, 2025 | 3:00 PM – 6:00 PM (No setup allowed after this)</p>
            </div>
          </div>
        </div>
      </motion.div>

    
    </section>
  )
}
