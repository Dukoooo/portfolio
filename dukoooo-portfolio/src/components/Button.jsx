import styles from "./Button.module.css";

function Button({ children, className = "", onClick, type = "button" }) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
