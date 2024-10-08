"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({
  children,
}) {
  const lenisOptions = {
    lerp: 0.08,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
    smoothWheel: true,
  };
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
