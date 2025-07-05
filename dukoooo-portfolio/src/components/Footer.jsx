import styles from "./Footer.module.css";
import Title from "./Title";

function Footer() {
  return (
    <div className={` container ${styles.wrapper}`} id="contact">
      <Title>Contact</Title>
    </div>
  );
}

export default Footer;
