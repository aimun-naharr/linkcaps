'use client'
import React from 'react'
import Logo from './Logo'
import Container from './layouts/Container'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const navItems = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Services',
      link: '/services',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ]
  return (
    <div className='sticky top-0'>
      <Container>
        <div className='py-8' id='navbar'>
          <div className='overflow-hidden'>
            <motion.nav
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className='flex items-center justify-between  '>
              <Logo />

              <ul className='flex gap-4'>
                {
                  navItems.map(itm => <li key={itm.link} className={cn('text-sm  pr-4 pt-2 relative text-gray-600 before:content-[""] before:absolute before:h-1 before:w-0 before:bg-transparent before:bottom-0 hover:before:w-4 hover:before:bg-[--blue] before:transition-width', {
                    'before:content-[""] before:absolute before:h-1 before:w-4 before:bg-[--blue] before:bottom-0 text-[--black] ': pathname === itm.link
                  })} >
                    <Link href={itm.link}>{itm.name}</Link>

                  </li>)
                }
              </ul>
            </motion.nav>
          </div>
        </div>
      </Container>
    </div>
  )
}
