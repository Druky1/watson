"use client";
import React, {useRef} from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

gsap.registerPlugin(useGSAP);

const About = () => {

  const container = useRef();

  useGSAP(() => {
    const words = new SplitType(".info p", { types: "lines", tagName: "div", linesClass: "line" });
    words.lines.forEach((line) => {
      const content = line.innerHTML;
      line.innerHTML = `<span>${content}</span>`;
    });
    gsap.set(".info p .line span", {
      y: 400,
      display: "block",
    })

    gsap.to(".info p .line span", {
      y: 0,
      duration: 2,
      stagger: 0.075,
      ease: "power4.out",
      delay: 0.25
    })

    return () => {
      if(words) {
        words.revert();
      }
    }
  }, {scope: container});


  return (
  
    <ReactLenis root>
      <div className="info" ref={container}>
        <div className="col">
          <img src="/potrait.jpg" alt="About" />
        </div>
        <div className="col">
          <p>
            {" "}
            As the sun dipped below the horizon, painting the sky in hues of
            amber and violet, the old bookstore on the corner seemed to sigh
            with contentment. Its weathered shelves held stories of countless
            lifetimes, each spine whispering secrets to those who dared to
            listen. The scent of yellowed pages and ink mingled with the evening
            air, creating a perfume more intoxicating than any flower.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default About;
