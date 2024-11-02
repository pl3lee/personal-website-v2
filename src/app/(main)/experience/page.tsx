import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <section className={styles.experience}>
      <SectionHeader>
        <h1>Experience</h1>
        <Link href='/resume.pdf' className={styles.linkHover} target='_blank'>
          View my Resume
        </Link>
      </SectionHeader>
      {data.experience.map((experience) => {
        return (
          <div
            className={styles.experienceContainer}
            key={`${experience.company}-${experience.position}`}
          >
            <div>
              <h2>{experience.company}</h2>
              <div className='text-sm'>{experience.position}</div>
              <div className='text-sm'>{experience.date}</div>
            </div>
            {experience.description && (
              <div className={styles.description}>{experience.description}</div>
            )}
            <ul className={styles.experienceKeypoints}>
              {experience.keypoints.map((keypoint) => {
                return <li key={keypoint}>{keypoint}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
