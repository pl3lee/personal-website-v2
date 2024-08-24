import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';
import { Projects } from '@/components/Projects/Projects';

export default function Home() {
  console.log(data);
  return (
    <main className={styles.root}>
      <section className={styles.about}>
        <SectionHeader>
          <div className={styles.title}>
            <h1>Billy Lee</h1>
            <h2>Full Stack Developer</h2>
          </div>
        </SectionHeader>

        <div className={styles.introduction}>
          <p>
            I am a Math graduate from the University of Waterloo, and I am
            currently working on my Master&apos;s in Computer Science at Georgia
            Tech. As an aspiring full-stack developer with a deep passion for
            technology, I constantly seek opportunities to innovate and learn.
          </p>
          <p>
            I love to tinker with technology. I built a home server using{' '}
            <a href='https://unraid.net/'>Unraid</a> and have set up numerous
            self-hosted services for me and my friends&apos; needs.
          </p>
          <p>
            When I am not working on tech projects, you can find me playing
            badminton or bouldering.
          </p>
        </div>
      </section>
      <section className={styles.experience}>
        <SectionHeader>
          <h1>Experience</h1>
          <Link href='/experience'>See all experience</Link>
        </SectionHeader>
        <div className={styles.latestExperienceContainer}>
          <div>
            <h2>{data.experience[0].company}</h2>
            <div className='text-sm'>{data.experience[0].position}</div>
            <div className='text-sm'>{data.experience[0].date}</div>
          </div>
          <div>{data.experience[0].description}</div>
        </div>
      </section>

      <section className={styles.projects}>
        <SectionHeader>
          <h1>Projects</h1>
          <Link href='/projects'>See all projects</Link>
        </SectionHeader>
        <Projects projects={data.projects} numProjects={2} />
      </section>
    </main>
  );
}
