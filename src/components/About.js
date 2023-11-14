import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Hi, I'm Bilal, a software based in Nairobi. With a passion for coding and problem-solving,
        I enjoy working on diverse software projects and contributing to the world of technology.
        Let's build something amazing together!</p>
      <img src={image} alt="I made this" />
    </div>
  );
};
export default About;
