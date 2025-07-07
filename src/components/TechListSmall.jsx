import styles from "./TechListSmall.module.css";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

function TechListSmall({
  technologies,
  onSelect,
  selectedId,
  currentItem,
  onNext,
  onPrev,
}) {
  return (
    <div className={styles.slider_box}>
      <button className={styles.arrow_left} onClick={onPrev}>
        <IoMdArrowDropleftCircle className={styles.arrow} />
      </button>
      <input
        type="text"
        className={styles.tech_item}
        value={currentItem.name}
        readOnly
      />
      <button className={styles.arrow_right} onClick={onNext}>
        <IoMdArrowDroprightCircle className={styles.arrow} />
      </button>
    </div>
  );
}

export default TechListSmall;
