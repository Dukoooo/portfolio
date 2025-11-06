import { StrictMode } from "react";
import cv from "../assets/cv.pdf";

import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

function Hero() {
  return (
    <section className={`container ${styles.hero}`} id="hero">
      <h3>Hi, my name is</h3>

      <TypeAnimation
        sequence={["Juraj Golian,"]}
        wrapper="h1"
        speed={5}
        className={styles.heading}
        repeat={0}
        cursor={false}
      />

      <h2>a passionate web developer who loves working with React.</h2>
      <p>
        Welcome to my portfolio! I focus on creating clear, responsive React
        applications and always aim to provide a smooth and enjoyable user
        experience.
      </p>
      <Button>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Check out my resume!
        </a>
      </Button>
    </section>
  );
}

export default Hero;
