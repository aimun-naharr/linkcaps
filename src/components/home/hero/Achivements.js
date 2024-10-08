'use client'
import React from 'react'
import Container from '../../layouts/Container'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function Achievements() {
  const achievements = [{
    title: '5',
    description: 'Years of experience',
    active: true
  },
  {
    title: '300',
    description: 'completed projects'
  },
  {
    title: '50k+',
    description: 'happy customers'
  },
  {
    title: '15',
    description: 'team members'
  }
  ]
  const fadeUp = {
    hidden: {
      y: '100%',
      opacity: 0,
      rotate: '10deg'
    },
    show: (i) => ({
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: i,
        // ease: [0.37, 0, 0.63, 1]
      }
    })
  }

  return (
    <>
      <Container>
        <div className='flex items-center justify-center mt-20'>
          <div style={{ transformStyle: 'preserve-3d' }} className='grid grid-cols-2 lg:grid-cols-4 items-center gap-4 overflow-hidden '>
            {
              achievements.map((itm, i) => (
                <motion.div

                  key={`${itm.title}-${i + 1}`}
                  variants={fadeUp}
                  initial='hidden'
                  animate='show'
                  custom={1 + (i * 0.1)}
                  className={cn('bg-white flex flex-col items-center justify-center text-center max-w-[200px] h-[130px] p-6 rounded border-2 border-transparent ', {
                    'border-[--blue] text-[--blue]': itm.active
                  })}>
                  <h2 className={cn('lg:text-5xl text-3xl font-semibold ')}>{itm.title}</h2>
                  <p className=' text-xs w-[80px]'>{itm.description}</p>
                </motion.div>
              ))
            }
          </div>
        </div>
      </Container>
    </>
  )
}
