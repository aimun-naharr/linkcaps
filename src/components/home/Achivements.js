import React from 'react'
import Container from '../layouts/Container'
import { cn } from '@/lib/utils'

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
  return (
    <>
      <Container>
        <div className='flex items-center justify-center mt-20'>
          <div className='grid grid-cols-2 lg:grid-cols-4 items-center gap-4'>
            {
              achievements.map((itm, i) => (
                <div key={`${itm.title}-${i + 1}`} className={cn('bg-white flex flex-col items-center justify-center text-center max-w-[200px] h-[130px] p-6 rounded border-2 border-transparent', {
                  'border-[--blue] text-[--blue]': itm.active
                })}>
                  <h2 className={cn('lg:text-5xl text-3xl font-semibold ')}>{itm.title}</h2>
                  <p className=' text-xs w-[80px]'>{itm.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </>
  )
}
