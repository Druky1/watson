"use client"

import React from 'react'
import Link from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'

function Navbar() {

  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate([
      {
        opacity: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0.2,
        transform: 'translateY(-35%)'
      }
    ], {
      duration: 1000,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)"
    });

    document.documentElement.animate([
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      }, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
      }
    ], {
      duration: 1000,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)"
    })
  }

  return (
    <nav className="nav">
      <div className="logo">
        <div className='link'>
          <Link href={"/"} onClick={(e) => {
            e.preventDefault();
            router.push("/", {
              onTransitionReady: slideInOut
            });
          }}>Watson</Link>
        </div>
      </div>
      <div className="links">
        <div className='link'>
          <Link href={"/projects"} onClick={(e) => {
            e.preventDefault();
            router.push("/projects", {
              onTransitionReady: slideInOut
            });
          }}><span className='hover-underline-animation'>Projects</span></Link>
        </div>
        <div className="link">
          <Link href={"/about"} onClick={(e) => {
            e.preventDefault();
            router.push("/about", {
              onTransitionReady: slideInOut
            });
          }}><span className='hover-underline-animation'>About</span></Link>
        </div>
      </div>

    </nav>
  )
}

export default Navbar