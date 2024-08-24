'use client';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import styles from './page.module.scss';
import data from '@/data.json';
import Link from 'next/link';
import { Projects } from '@/components/Projects/Projects';
import { motion } from 'framer-motion';
import { ChevronRight, Github, Linkedin } from 'lucide-react';

export default function ProjectsPage() {
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
      <motion.section className={styles.projects} variants={item}>
        <SectionHeader>
          <h1>Projects</h1>
        </SectionHeader>
        <Projects projects={data.projects} />
      </motion.section>
    </motion.main>
  );
}
