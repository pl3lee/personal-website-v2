import styles from './Footer.module.scss';

export function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.footerContainer}>
        © {new Date().getFullYear()} | Billy Lee
      </div>
    </div>
  );
}
