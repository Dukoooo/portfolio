import styles from "./ProjectSmall.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function ProjectSmall({ project }) {
  const { id, name, text, img, technologies } = project;
  return (
    <article
      className={styles.project_container_small}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <aside className={styles.content_small}>
        <h3 className={styles.name_small}>{name}</h3>
        <p className={styles.project_text_small}> {text}</p>
        <ul className={styles.tech_list_small}>
          {technologies.map((tech, index) => (
            <li key={index} className={styles.tech_element_small}>
              {tech}
            </li>
          ))}
          <div className={styles.icons_small}>
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

export default ProjectSmall;
