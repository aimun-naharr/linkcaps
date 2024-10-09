'use client'

import { motion } from 'framer-motion'
import React from 'react'

export default function HeroText() {
  const fadeUp = {
    hidden: {
      y: '100%',
      opacity: 0
    },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  }
  return (
    <h1 className="lg:text-5xl text-3xl text-[--black]  font-medium text-center  flex flex-col tracking-tighter">
      <div className='overflow-hidden py-1'>
        <motion.span className='inline-block' variants={fadeUp} initial='hidden' animate='show' custom={0}>Transforming ideas into <span className="text-[--blue]">Innovative</span> Software</motion.span>
      </div>
      <div className='overflow-hidden'>
        <motion.span className='inline-block' variants={fadeUp} initial='hidden' animate='show' custom={0.2}>Solutions, Your Trusted Development</motion.span>
      </div>
      <div className='overflow-hidden'>
        <motion.span className='inline-block' variants={fadeUp} initial='hidden' animate='show' custom={0.4}>Partner Since 2016</motion.span>
      </div>
    </h1>
  )
}
