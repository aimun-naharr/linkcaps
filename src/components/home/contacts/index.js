import Container from '@/components/layouts/Container'
import React from 'react'
import cloud from '@/assets/decore/contact-cloud.svg';
import arrow from '@/assets/decore/contact-arrow.svg'
import Image from 'next/image'

export default function Contacts() {
  return (
    <div className='bg-[--golden-gray] my-20 py-20 md:py-0'>
      <Container>
        <div className='flex md:flex-row flex-col gap-10 md:gap-0 items-center justify-between relative h-[350px] '>
          <div className='absolute h-[200px] -top-48 md:-top-20 -left-10'>
            <Image src={cloud} alt='cloud svg' className='h-full w-full object-cover' />
          </div>

          {/* texts */}
          <div className='max-w-[340px] space-y-2'>
            <h1 className='text-4xl font-bold'>Let&apos;s connect!</h1>
            <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
          {/* form */}
          <div className='max-w-[500px] text-white relative w-full bg-[--form-bg] pt-10  flex flex-col gap-3 px-6  right-0 rounded pb-16'>
            <div className='absolute h-[200px] hidden lg:block -top-10 -left-48'>
              <Image src={arrow} alt='cloud svg' className='h-full w-full object-cover' />
            </div>

            <input type="text" placeholder='Name' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <input type="text" placeholder='Email' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <textarea type="text" placeholder='Message' className='w-full bg-[--dark-input-bg] py-5 px-6 rounded' />
            <button className='w-full bg-[--blue] py-4 text-white rounded mt-4'>Send</button>
          </div>

        </div>
      </Container>
    </div>
  )
}
