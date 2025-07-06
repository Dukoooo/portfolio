import Button from "./Button";
import styles from "./Footer.module.css";
import Title from "./Title";

function Footer() {
  return (
    <footer className={` container ${styles.footer}`} id="contact">
      <Title>Contact</Title>
      <div className={styles.footer_content}>
        <p>
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
        <p className={styles.foot_text}>Designed & Built by Juraj Duko</p>
      </div>
    </footer>
  );
}

export default Footer;
