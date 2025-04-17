"use client";
import React, {useRef} from "react";
import { ReactLenis } from "lenis/react";

const Projects = () => {
  return (
    <ReactLenis root>
    <div className="projects">
      <div className="images">
        <img src="/img1.jpg" alt="Project 1" />
        <img src="/img2.jpg" alt="Project 2" />
        <img src="/img3.jpg" alt="Project 3" />
        <img src="/img4.jpg" alt="Project 4" />
      </div>
    </div>
    </ReactLenis>
  );
};

export default Projects;
