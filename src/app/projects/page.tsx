import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import { Projects } from '@/components/Projects/Projects';

export default function ProjectsPage() {
  return (
    <section className={styles.projects}>
      <SectionHeader>
        <h1>Projects</h1>
      </SectionHeader>
      <Projects projects={data.projects} />
    </section>
  );
}
