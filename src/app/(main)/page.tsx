import { Education } from '@/components/Education/Education';
import { Projects } from '@/components/Projects/Projects';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import data from '@/data.json';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Summary() {
  return (
    <>
      <section className={styles.about}>
        <SectionHeader>
          <div className={styles.title}>
            <h1>Billy Lee</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <Link href='/resume.pdf' className={styles.linkHover} target='_blank'>
            View my Resume
          </Link>
        </SectionHeader>
        <div className={styles.introduction}>
          <p>
            I am a Math graduate from the University of Waterloo, and I am
            currently working on my Master&apos;s in Computer Science at Georgia
            Tech. As an aspiring full-stack developer with a deep passion for
            technology, I constantly seek opportunities to innovate and learn.
          </p>
          <p>
            My enthusiasm for solving real-world problems led me to create{' '}
            <span className='text-blue-400'>
              <a href='https://uwplan.com' target='_blank'>
                UWPlan
              </a>
            </span>
            , a Next.js-powered degree planning tool that serves over 500 daily
            users, helping students map their courses and visualize their
            academic progress.
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
          <Link href='/experience' className={styles.linkHover}>
            See details
          </Link>
        </SectionHeader>
        {data.experience.map((experience) => (
          <div
            className={styles.latestExperienceContainer}
            key={`${experience.company}-${experience.position}`}
          >
            <div>
              <h2>{experience.company}</h2>
              <div className='text-sm'>{experience.position}</div>
              <div className='text-sm'>{experience.date}</div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.projects}>
        <SectionHeader>
          <h1>Projects</h1>
          <Link href='/projects' className={styles.linkHover}>
            See all projects
          </Link>
        </SectionHeader>
        <Projects projects={data.projects.slice(0, 2)} />
      </section>

      <section className={styles.education}>
        <SectionHeader>
          <h1>Education</h1>
          <Link href='/education' className={styles.linkHover}>
            See all education
          </Link>
        </SectionHeader>
        <Education />
      </section>

      <section className={styles.connect}>
        <SectionHeader>
          <h1>Let&apos;s Connect</h1>
        </SectionHeader>
        <div className={styles.connectContainer}>
          <p>
            If you want to get in touch with me, feel free to reach out on
            social media or send me an email.
          </p>
          <div className={styles.socialMediaIcons}>
            <Link href='https://github.com/pl3lee' target='_blank'>
              <Github />
            </Link>
            <Link
              href='https://www.linkedin.com/in/billy-pl-lee'
              target='_blank'
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
