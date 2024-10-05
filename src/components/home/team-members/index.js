import Container from '@/components/layouts/Container'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import React from 'react'
import teamStar from '@/assets/decore/team-star.svg'
import Image from 'next/image'

export default function TeamMembers() {
  const teamMembers = [
    {
      img: '',
      name: 'John Doe',
      role: 'UI/UX Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
    {
      img: '',
      name: 'Emily Johnson',
      role: 'Product Designer',
      description: 'For athletes, high altitude produces two contradictory effects on performance. For explosive evenFor athletes, high altitude produces two contradictory effects on performance. For explosive events'
    },
  ]
  return (
    <div className='my-20 relative'>
      <div className='absolute right-20 -top-6 opacity-[0.4]'>
        <Image src={teamStar} alt='star' className='h-full w-full object-cover' />
      </div>
      <Container>
        <h1 className='mb-20 text-3xl leading-[1.9rem] font-semibold max-w-[250px]'>Meet our team members</h1>

        <div className='space-y-4'>
          {
            teamMembers.map((member, i) => (
              <div className={cn('grid grid-cols-6 md:grid-cols-12 py-4', {
                'border-b-2 border-black/5': i !== teamMembers.length - 1
              })} key={`${member.name}-${i + 1} `}>
                {/* image */}

                <div className='col-span-4  flex gap-3'>
                  <div className='size-16 rounded bg-gray-200'></div>
                  <div>
                    <h2 className='text-lg font-bold'>{member.name}</h2>
                    <h3>{member.role}</h3>
                  </div>
                </div>
                <div className='col-span-6 hidden md:block '>
                  <p className='text-gray-500 text-xs max-w-[500px]'>{member.description}</p>
                </div>
                <div className='col-span-2  flex justify-end'>
                  <ExternalLink />
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}
