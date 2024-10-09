import Container from '@/components/layouts/Container'
import { cn } from '@/lib/utils'
import React, { useRef } from 'react'
import teamStar from '@/assets/decore/team-star.svg'
import Image from 'next/image'
import Linkedin from '@/assets/linkedin.svg'
import portrait1 from '@/assets/portrait-1.png'
import portrait2 from '@/assets/portrait-2.png'
import portrait3 from '@/assets/portrait-3.png'
import portrait4 from '@/assets/portrait-4.png'
import { motion } from 'framer-motion'
import { blurOut, fadeUp } from '@/animations'

export default function TeamMembers() {
  const scrollRef = useRef(null)
  const contentContainerRef = useRef(null)
  const teamMembers = [
    {
      img: portrait1,
      name: 'John Doe',
      role: 'UI/UX Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
    {
      img: portrait2,
      name: 'Emily Johnson',
      role: 'Product Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
    {
      img: portrait3,
      name: 'Emily Johnson',
      role: 'Product Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
    {
      img: portrait4,
      name: 'Emily Johnson',
      role: 'Product Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
  ]


  return (
    <div className='my-20 relative' ref={scrollRef}>
      <div className='absolute right-0 md:right-20 -top-6 opacity-[0.4]'>
        <Image src={teamStar} alt='star' className='h-full w-full object-cover' />
      </div>
      <Container>
        <motion.h1
          initial='hidden'
          whileInView='show'
          variants={blurOut}
          viewport={{ once: true, root: scrollRef, margin: '10px' }} className='mb-10 text-3xl leading-[1.9rem] font-semibold max-w-[250px]'>Meet our team members</motion.h1>

        <div ref={contentContainerRef} className='flex gap-8 flex-wrap justify-center lg:justify-start'>
          {
            teamMembers.map((member, i) => (
              // <div className={cn('grid grid-cols-6 md:grid-cols-12 py-4', {
              //   'border-b-2 border-black/5': i !== teamMembers.length - 1
              // })} key={`${member.name}-${i + 1} `}>
              //   {/* image */}

              //   <div className='col-span-4  flex gap-3'>
              //     <div className='size-16 rounded bg-gray-200'></div>
              //     <div>
              //       <h2 className='text-lg font-bold'>{member.name}</h2>
              //       <h3>{member.role}</h3>
              //     </div>
              //   </div>
              //   <div className='col-span-6 hidden md:block '>
              //     <p className='text-gray-500 text-xs max-w-[500px]'>{member.description}</p>
              //   </div>
              //   <div className='col-span-2  flex justify-end'>
              //     <ExternalLink />
              //   </div>
              // </div>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                custom={(i * 0.1)}
                viewport={{ once: true, root: contentContainerRef, margin: '-120px' }}
                key={`${member.name}-${i + 1} `} className='flex flex-col gap-3'>
                <div className='relative after:content-[""] after:absolute after:w-full after:h-full after:left-2 after:-top-2 after:bg-blue-500/50 after:z-[-1] after:rounded-md hover:after:-top-1 hover:after:left-1 after:transition-all after:duration-500'>
                  <div className='size-[140px] lg:size-[180px] bg-gray-200 rounded overflow-hidden'>
                    <Image src={member.img} alt={member.name} className='w-full h-full object-cover' />
                  </div>
                </div>
                <div className='flex justify-between items-start'>
                  <div className='flex flex-col'>
                    <p className='text-base font-bold'>{member.name}</p>
                    <p className='text-sm'>{member.role}</p>
                  </div>
                  <div className='size-4 lg:size-6'>
                    <Image alt='linkedin' src={Linkedin} className='h-full w-full object-cover' />

                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}
