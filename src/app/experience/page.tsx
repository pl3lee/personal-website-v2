'use client';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';
import { Projects } from '@/components/Projects/Projects';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin } from 'lucide-react';

export default function ExperiencePage() {
  const container = {
    hidden: { y: 20, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.main
      className={styles.root}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.section className={styles.experience} variants={item}>
        <SectionHeader>
          <h1>Experience</h1>
          <Link href='/resume.pdf'>View my Resume</Link>
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
              {experience.description && <div>{experience.description}</div>}
              <ul>
                {experience.keypoints.map((keypoint) => {
                  return <li key={keypoint}>&gt; {keypoint}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </motion.section>
    </motion.main>
  );
}
