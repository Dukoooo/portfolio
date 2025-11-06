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
          Greetings! I'm Juraj Golian, a web developer with experience in HTML,
          CSS, Sass, jQuery, and JavaScript. I began my journey in 2022 and I’m
          always working to improve and do my best in everything I build. I’m
          originally from Slovakia and will soon be moving to Prague, where I'm
          looking for new opportunities and collaborations. If you'd like to
          work together, feel free to reach out!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
