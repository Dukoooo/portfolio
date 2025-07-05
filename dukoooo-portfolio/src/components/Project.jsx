import styles from "./Project.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Project({ project }) {
  const { id, name, text, img, technologies } = project;
  return (
    <article className={styles.project_container}>
      <a className={styles.figure}>
        <img src={img} alt={name} className={styles.image} />
      </a>

      <aside className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.project_text}> {text}</p>
        <ul className={styles.tech_list}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles.tech_element}>
              {tech}
            </li>
          ))}
          <div className={styles.icons}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className={styles.icon} />
            </a>
            <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
              {" "}
              <FaGithub className={styles.icon} />
            </a>
          </div>
        </ul>
      </aside>
    </article>
  );
}

export default Project;
