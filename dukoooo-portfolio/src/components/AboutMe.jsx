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
          Greetings! I'm Juraj Golian, and my journey into web development began
          in September 2022 when I embarked on a captivating learning adventure
          with the courses of Jonas Schmedtmann on Udemy. The world of HTML,
          CSS, and JavaScript quickly became my playground, and I've been
          devoted to it ever since. I'm delighted to share that I've developed
          proficiency in HTML, CSS, Sass, jQuery and JavaScript and continually
          strive for improvement. Hailing from Slovakia, I currently reside in
          the charming city of Tilburg in the Netherlands. With my roots in
          Slovakia and my heart in the Netherlands, I'm open to collaborations
          and eager to explore new opportunities. So, if you're looking to
          embark on a web development journey or collaborate on exciting
          projects, I'm here and ready to dive in!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
