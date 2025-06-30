import styles from "./Title.module.css";

function Title({ level = 1, children, className = "" }) {
  const Tag = `h${level}`;
  return <Tag className={`${styles.title}${className}`}>{children}</Tag>;
}

export default Title;
