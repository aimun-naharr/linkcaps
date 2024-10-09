'use client'
import Container from '@/components/layouts/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import HeroCustomerAvatar from './HeroCustomerAvatar'
import HeroText from './HeroText'
import HeroBottom from './HeroBottom'
import Achievements from './Achivements'
import Wireframe from '@/assets/decore/hero-wireframe.svg'


export default function Hero() {
  motion
  return (
    <div className='sticky top-0'>
      <section className="relative " >
        <motion.div
          id='hero-wireframe'
          initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
          className="absolute z-[-1]   w-full  top-0 xl:-top-1/2">
          <Image src={Wireframe} alt="wireframe" className="w-full h-full  object-cover" />
        </motion.div>
        {/* hero */}
        <div className="relative my-20  py-20 " id='hero-section-content'>

          <div className="absolute size-[200px] left-1/2 -translate-y-1/2 top-20 z-[-1]  bg-[--blue] blur-[300px]"></div>
          <Container>
            <div className="flex flex-col gap-8  items-center">
              <HeroCustomerAvatar />
              <HeroText />
              <HeroBottom />
            </div>
            <Achievements />

          </Container>

        </div>
      </section>
    </div>
  )
}
