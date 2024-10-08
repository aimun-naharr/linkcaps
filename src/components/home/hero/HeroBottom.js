'use client'
import React from 'react'
import Achievements from './Achivements'
import { motion } from 'framer-motion'

export default function HeroBottom() {
  // motion
  return (
    <>
      <motion.div
        className="flex gap-8 "
        initial={{ filter: 'blur(80px)' }}
        animate={{ filter: 'blur(0)' }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }} >
        <button className="bg-[--blue] text-white px-6 py-3 rounded shadow-md shadow-[--blue]" onClick={() => console.log('contact now')}>Contact Now</button>
        <button className="bg-white text-[--blue] px-6 py-3 rounded shadow-md shadow-[--blue]">Learn More</button>
      </motion.div>

    </>

  )
}
