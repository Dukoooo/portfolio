import styles from "./Projects.module.css";
import Title from "./Title";
import projects from "../data/projects";
import Project from "./Project";
import ProjectSmall from "./ProjectSmall";
import { useEffect, useState } from "react";
function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 666);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 666);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`container ${styles.wrapper} `} id="projects">
      <Title level={1}>Projects</Title>
      <div className={styles.projects_container}>
        {projects.map((project) =>
          isMobile ? (
            <ProjectSmall key={project.id} project={project} />
          ) : (
            <Project key={project.id} project={project} />
          )
        )}
      </div>
    </section>
  );
}

export default Projects;
