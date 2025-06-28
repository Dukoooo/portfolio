import { StrictMode } from "react";
import styles from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";

function Hero() {
  return (
    <section className={`container ${styles.hero}`} id="hero">
      <h3>Hi, my name is</h3>
      <h1 className={styles.heading}>
        <TypeAnimation
          sequence={["Juraj Golian,"]}
          wrapper="h1"
          speed={5}
          className={styles.heading}
          repeat={0}
          cursor={false}
        />
      </h1>
      <h2>a passionate web developer with a strong love for React.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae qui
        consequuntur quisquam veritatis nam. Possimus iste repudiandae
        necessitatibus voluptas vel blanditiis ipsa incidunt corporis? Quod aut
        neque earum dignissimos ipsam.
      </p>
      <Button>Check out my resume!</Button>
    </section>
  );
}

export default Hero;
