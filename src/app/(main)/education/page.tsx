import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import { Education } from '@/components/Education/Education';

export default function EducationPage() {
  return (
    <section className={styles.education}>
      <SectionHeader>
        <h1>Education</h1>
      </SectionHeader>
      <Education />
    </section>
  );
}
