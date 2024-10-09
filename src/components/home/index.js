'use client'
import React, { useRef, useEffect } from 'react'
import Hero from './hero'
import Services from './services'
import TeamMembers from './team-members'
import Testimonials from './testimonials'
import Contacts from './contacts'
import { useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, } from 'framer-motion'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const serviceRef = useRef(null)
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current, // Element to trigger the animation
        scrub: 1, // Smooth scrubbing (can be adjusted)

      }
    });
    tl.to('#hero-section-content', {
      duration: 0.4,
      y: 200,
      opacity: 0,
      filter: 'blur(5px)',
      ease: "power4.out",

    }, 'a')
      .to('#hero-wireframe', {
        filter: 'blur(30px)',
      }, 'a')
      .to('#navbar', {
        y: '-100%',
        filter: 'blur(5px)',
      }, 'a')
  }, [])
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
