'use client';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';
import { Projects } from '@/components/Projects/Projects';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin } from 'lucide-react';

export default function EducationPage() {
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
      <motion.section className={styles.education} variants={item}>
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
      </motion.section>
    </motion.main>
  );
}
