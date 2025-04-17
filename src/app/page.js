"use client";
import { useRef } from 'react';
import { ReactLenis} from 'lenis/react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

gsap.registerPlugin(useGSAP);

export default function Home() {

  const container = useRef();

  useGSAP(() => {
    const hero = new SplitType(".home h1", { types: "char" });
    gsap.set(hero.chars, {y: 400});
    gsap.to(hero.chars, {
      y: 0,
      duration: 1,
      stagger: 0.075,
      ease: "power4.out",
      delay: 1
    })
  }, {scope: container});


  return (
    <ReactLenis root>
    <div className="home" ref={container}> 
      <h1 >
        Watson
      </h1>
    </div>
    </ReactLenis>
  );
}
