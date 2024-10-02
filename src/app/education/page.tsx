import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';

export default function EducationPage() {
  return (
    <section className={styles.education}>
      <SectionHeader>
        <h1>Education</h1>
      </SectionHeader>
      <div className={styles.educationContainer}>
        <div>
          <h2>Georgia Institute of Technology</h2>
          <div className='text-sm'>Master of Science in Computer Science</div>
          <div className='text-sm'>Expected Aug 2027</div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <div>
          <h2>University of Waterloo</h2>
          <div className='text-sm'>Honours Bachelor of Mathematics</div>
          <div className='text-sm'>Sept 2020 - Aug 2024</div>
        </div>
      </div>
    </section>
  );
}
