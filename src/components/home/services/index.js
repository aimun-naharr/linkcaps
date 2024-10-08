'use client'
import Container from '@/components/layouts/Container'
import Image from 'next/image'
import React, { forwardRef } from 'react'
import Wireframe from '@/assets/decore/service-wireframe.svg'


const Services = forwardRef((props, ref) => {

  const services = [
    {
      title: 'Website Development',
      description: 'Our team offers secure web development to introduce your organization or business to the digital world. We can provide you with a customized solution where you get 24/7 support.'
    },
    {
      title: 'Mobile Development',
      description: 'Our team offers secure web development to introduce your organization or business to the digital world. team offers secure web development'
    },
    {
      title: 'UI/UX Design',
      description: 'Our team offers secure web development to introduce your organization or business to the digital world. team offers secure web development'
    },
    {
      title: 'Logo Design',
      description: 'Our team offers secure web development to introduce your organization or business to the digital world. team offers secure web development'
    },
    {
      title: 'API Development',
      description: 'Our team offers secure web development to introduce your organization or business to the digital world. team offers secure web development'
    },

  ]
  return (
    <div ref={ref} className='bg-[--black] text-white pt-20 relative pb-10 rounded-md'>
      {/* <div className="absolute    w-full  -left-1/2 opacity-[0.4] top-0">
        <Image src={Wireframe} alt="wireframe" className="w-full h-full  object-cover" />
      </div> */}
      <Container>
        <div className='relative'>
          <h1 className='mb-20 text-3xl font-semibold'>Services we offer</h1>
          <div className='flex flex-col  sticky top-0'>
            {
              services.map((service, index) => {
                return (
                  <div style={{ top: `${index * 90}px` }} key={`${service.title}-${index}`} className='grid grid-cols-1 md:grid-cols-2 border-t-2 border-white/5 py-10 sticky bg-[--black]'>
                    <h2 className='text-5xl hidden md:block'>({index + 1})</h2>
                    <div className='max-w-[650px] flex flex-col gap-2 '>
                      <h3 className='text-3xl font-bold'>{service.title}</h3>
                      <p className='text-base'>{service.description}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </div>
  )
})
Services.displayName = 'Services';
export default Services;