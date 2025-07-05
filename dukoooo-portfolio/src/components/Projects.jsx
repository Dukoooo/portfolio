import styles from "./Projects.module.css";
import Title from "./Title";
import projects from "../data/projects";
import Project from "./Project";
function Projects() {
  return (
    <section className={`container ${styles.wrapper} `} id="projects">
      <Title level={1}>Projects</Title>
      <div className={styles.projects_container}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
