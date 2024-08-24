import { ProjectType } from '@/types';
import styles from './Projects.module.scss';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Projects({
  projects,
  numProjects,
}: {
  projects: ProjectType[];
  numProjects: number;
}) {
  return (
    <div className={styles.root}>
      {projects.slice(0, numProjects).map((project: ProjectType) => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
}

function Project({ project }: { project: ProjectType }) {
  return (
    <Link
      key={project.slug}
      className={styles.project}
      href={`/projects/${project.slug}`}
    >
      <div className={styles.projectInfo}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <ArrowRight />
    </Link>
  );
}
