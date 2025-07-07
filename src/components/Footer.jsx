import Button from "./Button";
import styles from "./Footer.module.css";
import Title from "./Title";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className={` container ${styles.footer}`} id="contact">
      <Title>Contact</Title>
      <div className={styles.footer_content}>
        <p className={styles.footer_para}>
          I'm currently looking for new opportunities and would be grateful for
          any chance to grow and contribute. If you have a project, a job
          opening, or just want to connect, feel free to reach out — my inbox is
          always open!
        </p>
        <Button
          onClick={() =>
            (window.location.href =
              "mailto:juraj.duko.com?subject=Kontakt z portfólia")
          }
        >
          {" "}
          Say hello
        </Button>
        <div className={styles.social_icons}>
          <a
            href="https://github.com/Dukoooo

"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/juraj-golian-884939220

"
            target="_blank"
          >
            {" "}
            <FaLinkedin />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <p className={styles.foot_text}>Designed & Built by Juraj Duko</p>
      </div>
    </footer>
  );
}

export default Footer;
