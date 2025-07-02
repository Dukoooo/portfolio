import styles from "./TechList.module.css";
function TechList({ technologies, onSelect, selectedId }) {
  return (
    <ul className={styles.technologies}>
      {technologies.map((tech) => (
        <li
          key={tech.id}
          onClick={() => onSelect(tech.id)}
          className={
            tech.id === selectedId ? styles.selected : styles.tech_item
          }
        >
          {tech.name}
        </li>
      ))}
    </ul>
  );
}

export default TechList;
