'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function HeroCustomerAvatar() {
  return (
    <motion.div
      initial={{ filter: 'blur(80px)' }}
      animate={{ filter: 'blur(0)' }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="flex gap-2 items-center">
      {/* avatars */}
      <div className="flex w-[90px] h-[40px] relative ">
        <div className="size-10 absolute rounded-full bg-gray-400"></div>
        <div className="size-10 left-6 absolute rounded-full bg-gray-400"></div>
        <div className="size-10 left-12 absolute rounded-full bg-gray-400"></div>
      </div>
      <span>50k+ satisfied customer</span>
    </motion.div>
  )
}
