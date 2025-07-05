import { StrictMode } from "react";
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
        Welcome to my portfolio! I specialize in building clean, responsive, and
        high-quality React applications that deliver great user experiences.
      </p>
      <Button>Check out my resume!</Button>
    </section>
  );
}

export default Hero;
