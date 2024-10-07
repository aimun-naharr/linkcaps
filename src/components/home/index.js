'use client'
import React, { useRef, useEffect } from 'react'
import Hero from './hero'
import Services from './services'
import TeamMembers from './team-members'
import Testimonials from './testimonials'
import Contacts from './contacts'
import { useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, } from 'framer-motion'

export default function Home() {
  const serviceRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const test = scrollYProgress.updateAndNotify()
  console.log(scrollYProgress.get())
  console.log(scrollYProgress)
  return (
    <>
      <Hero />
      <Services ref={serviceRef} />
      <TeamMembers />
      <Testimonials />
      <Contacts />
    </>
  )
}
