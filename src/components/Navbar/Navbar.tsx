import Link from 'next/link';
import styles from './Navbar.module.scss';

export function Navbar() {
  return (
    <nav className={styles.root}>
      <ul className={styles.linksContainer}>
        <li>
          <Link href='/'>summary</Link>
        </li>
        <li>
          <Link href='/experience'>experience</Link>
        </li>
        <li>
          <Link href='/projects'>projects</Link>
        </li>
        <li>
          <Link href='/education'>education</Link>
        </li>
      </ul>
    </nav>
  );
}
