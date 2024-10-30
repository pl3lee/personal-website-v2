import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';
import { Projects } from '@/components/Projects/Projects';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

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
            See all experience
          </Link>
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
