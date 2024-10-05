import Container from '@/components/layouts/Container'
import Image from 'next/image'
import React from 'react'
import Wireframe from '@/assets/decore/service-wireframe.svg'


export default function Services() {
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
    <div className='bg-[--black] text-white pt-20 relative pb-10 overflow-hidden'>
      <div className="absolute    w-full  -left-1/2 opacity-[0.4] -top-1/2">
        <Image src={Wireframe} alt="wireframe" className="w-full h-full  object-cover" />
      </div>
      <Container>
        <h1 className='mb-20 text-3xl font-semibold'>Services we offer</h1>
        <div className='flex flex-col gap-8'>
          {
            services.map((service, index) => {
              return (
                <div key={`${service.title}-${index}`} className='grid grid-cols-1 md:grid-cols-2 border-t-2 border-white/5 py-10'>
                  <h2 className='text-5xl hidden md:block'>({index + 1})</h2>
                  <div className='max-w-[650px] flex flex-col gap-2'>
                    <h3 className='text-3xl font-bold'>{service.title}</h3>
                    <p className='text-base'>{service.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Container>
    </div>
  )
}
