import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={`container ${styles.hero}`} id="hero">
      <h1 className={styles.title}>Hello from Hero</h1>
    </section>
  );
}

export default Hero;
