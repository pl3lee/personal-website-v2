import { Project } from '@/types';
import styles from './Projects.module.scss';

export function Projects({
  projects,
  numProjects,
}: {
  projects: Project[];
  numProjects: number;
}) {
  return (
    <div className={styles.root}>
      {projects.slice(0, numProjects).map((project: Project) => {
        return (
          <div key={project.name} className={styles.project}>
            <div className={styles.projectInfo}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
            <div className={styles.arrow}>
              <div className={styles.arrowTop}></div>
              <div className={styles.arrowBottom}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
