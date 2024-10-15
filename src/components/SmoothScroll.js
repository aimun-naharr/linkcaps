"use client";
import React, { useEffect, useRef } from "react";
import { Lenis, ReactLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function SmoothScroll({
  children,
}) {
  const lenisRef = useRef()
  const lenisOptions = {
    lerp: 0.08,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
    smoothWheel: true,
  };

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
