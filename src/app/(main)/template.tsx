'use client';

import { motion } from 'framer-motion';
import styles from './template.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      className={styles.root}
    >
      {children}
    </motion.main>
  );
}
