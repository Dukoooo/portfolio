import styles from "./AboutMe.module.css";
import img from "../assets/ja.jpeg";
import Title from "./Title";
function AboutMe() {
  return (
    <section className={`container ${styles.wrapper}`} id="about">
      <Title level={1}>About me</Title>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <img src={img} alt="Juraj picture" className={styles.img} />
        </div>
        <p className={styles.paragraph}>
          Hi! I'm Juraj Golian, a frontend web developer. I focus on modern web
          development with HTML, CSS, JavaScript, React, and Next.js. I began my
          journey in 2022 and since then I’ve been continuously improving my
          skills and the quality of the projects I build. While frontend is my
          main direction, I also have foundational experience in other areas
          such as testing (Playwright) and SQL, which help me better understand
          the full development process. I’m originally from Slovakia and will
          soon be moving to Prague, where I’m looking for new opportunities and
          collaborations. If you'd like to work together, feel free to reach
          out!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
