import styles from './Education.module.scss';

export function Education() {
  return (
    <>
      <div className={styles.educationContainer}>
        <h2>Georgia Institute of Technology</h2>
        <div className={styles.detailsContainer}>
          <div className='text-sm'>Master of Science in Computer Science</div>
          <div className='text-sm'>Computing Systems Specialization</div>
          <div className='text-sm'>Expected Jun 2026</div>
        </div>
      </div>
      <div className={styles.educationContainer}>
        <h2>University of Waterloo</h2>
        <div className={styles.detailsContainer}>
          <div className='text-sm'>Honours Bachelor of Mathematics</div>
          <div className='text-sm'>
            Double Major in Computational Mathematics and Combinatorics &
            Optimization
          </div>
          <div className='text-sm'>Minor in Computer Science</div>
          <div className='text-sm'>
            Dean&apos;s Honours List (88.5% Average)
          </div>
          <div className='text-sm'>Sept 2020 - Aug 2024</div>
        </div>
      </div>
    </>
  );
}
