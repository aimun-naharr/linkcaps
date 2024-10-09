import Container from '@/components/layouts/Container'
import React, { useRef } from 'react'
import cloud from '@/assets/decore/contact-cloud.svg';
import arrow from '@/assets/decore/contact-arrow.svg'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { blurOut, fadeUp } from '@/animations';

export default function Contacts() {
  const scrollRef = useRef(null)
  return (
    <div ref={scrollRef} className='bg-[--golden-gray] my-20 py-20 md:py-0'>
      <Container>
        <div className='flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-between relative h-[350px] '>
          <div className='absolute h-[200px] -top-48 md:-top-20 -left-10'>
            <Image src={cloud} alt='cloud svg' className='h-full w-full object-cover' />
          </div>

          {/* texts */}
          <motion.div initial='hidden'
            whileInView='show'
            variants={blurOut}
            viewport={{ once: true, root: scrollRef, margin: '-10px' }}
            className='max-w-[340px] space-y-2'>
            <h1 className='text-4xl font-bold'>Let&apos;s connect!</h1>
            <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </motion.div>
          {/* form */}
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 20 }}
            viewport={{
              once: true,
              root: scrollRef,
              margin: '-10px'
            }}
            className='max-w-[500px] text-white relative w-full bg-[--form-bg] pt-10  flex flex-col gap-3 px-6 rounded pb-16 bottom-0 '>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{
                once: true,
                root: scrollRef,
                margin: '-100px'
              }}
              className='absolute h-[200px] hidden lg:block -top-10 -left-48'>
              <Image src={arrow} alt='cloud svg' className='h-full w-full object-cover' />
            </motion.div>

            <motion.input
              initial='hidden'
              whileInView='show'
              variants={blurOut}
              viewport={{
                once: true,
                root: scrollRef,
                margin: '-100px'
              }}
              type="text" placeholder='Name' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <motion.input
              initial='hidden'
              whileInView='show'
              variants={blurOut}
              viewport={{
                once: true, root: scrollRef,
                margin: '-100px'
              }}
              type="text" placeholder='Email' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <motion.textarea
              initial='hidden'
              whileInView='show'
              variants={blurOut}
              viewport={{
                once: true, root: scrollRef,
                margin: '-100px'
              }}
              type="text" placeholder='Message' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <motion.div
              initial='hidden'
              whileInView='show'
              variants={blurOut}
              viewport={{
                once: true, root: scrollRef,
                margin: '-50px'
              }}>
              <button className='w-full bg-[--blue] py-4 text-white rounded mt-4'>Send</button>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </div>
  )
}
