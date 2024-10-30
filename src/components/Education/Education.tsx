import styles from './Education.module.scss';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import Link from 'next/link';

export function Education() {
  return (
    <>
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
          <div className='text-sm'>
            Double major in Computational Mathematics and Combinatorics &
            Optimization. Minor in Computer Science
          </div>
          <div className='text-sm'>Sept 2020 - Aug 2024</div>
        </div>
      </div>
    </>
  );
}
