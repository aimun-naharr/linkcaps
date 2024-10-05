import Container from '@/components/layouts/Container'
import Image from 'next/image'
import React from 'react';
import testimonialsWireframe from '@/assets/decore/testimonials.svg'
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO of google',
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      active: true
    },
    {
      name: 'John Doe',
      role: 'CEO of google',
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },
    {
      name: 'John Doe',
      role: 'CEO of google',
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },
    {
      name: 'John Doe',
      role: 'CEO of google',
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    },

  ]
  return (
    <div className='py-28 relative'>
      <div className='absolute w-[200px] -z-[1] h-[120px] rounded-full bg-[--blue] left-1/2 -translate-x-1/2 blur-[150px] top-1/2'></div>
      <div className='absolute right-0 -top-5 -z-[1]'>
        <Image src={testimonialsWireframe} alt='wireframe' className='w-full h-full object-cover' />
      </div>
      <Container>
        <h1 className='mb-16 text-3xl leading-[1.9rem] font-semibold max-w-[250px]'>Let&apos;s hear from our clients</h1>
        <div className='flex gap-3 items-baseline'>
          {
            testimonials.map((testimonial, index) => (<div key={`${testimonial.name}-${index}`} className={cn('max-w-[450px]  bg-white py-8 px-8 rounded flex flex-col gap-6 flex-shrink-0', {
              'bg-[--black] text-white': testimonial.active
            })}>
              <div>
                <p className='text-sm'>{testimonial.comment}</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='size-12 rounded bg-gray-200'></div>
                <div>
                  <h5 className='font-bold leading-[0.5rem]'>{testimonial.name}</h5>
                  <span className='text-xs'>{testimonial.role}</span>
                </div>
              </div>

            </div>))
          }
        </div>
      </Container>
    </div>
  )
}
